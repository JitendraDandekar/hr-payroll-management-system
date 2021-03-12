from django.contrib.auth.hashers import check_password
from django.db import connection
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response

from .models import AdminUser, Employee
from .serializers import AdminUserSerializer, EmployeeSerializer, AdminLoginSerializer


# Create your views here.


class AdminUserViewSet(viewsets.ViewSet):

    def list(self, request):
        for key in list(request.session.keys()):
            del request.session[key]
        return Response({"message": "logout successfully"}, status=200)

    def create(self, request):
        serializer = AdminLoginSerializer(data=request.data)

        if serializer.is_valid():
            username = serializer.data['username']

            with connection.cursor() as cursor:
                cursor.execute("select id, password, status from admin where username=%s;", [username])
                user = cursor.fetchone()  # (id , password, status)

            if user is not None:
                if user[2]:  # user.status
                    password = check_password(serializer.data['password'], user[1])
                    if password:
                        request.session['admin_id'] = user[0]
                        return Response({"message": "login successfully!"}, status=200)
                    else:
                        return Response({"message": "invalid credentials!"}, status=401)
                else:
                    return Response({"message": "user is inactive!"}, status=401)
            else:
                return Response({"message": "user is not present!"}, status=404)


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    parser_classes = (MultiPartParser, FormParser,)
    serializer_class = EmployeeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['firstname', 'lastname',
                        'department', 'designation', 'gender']


class AdminViewSet(viewsets.ModelViewSet):
    queryset = AdminUser.objects.all()
    serializer_class = AdminUserSerializer


class CountEmployee(viewsets.ViewSet):

    def list(self, request):
        with connection.cursor() as cursor:
            cursor.execute("select count(*) from employee;")
            total = cursor.fetchone()
        with connection.cursor() as cursor:
            cursor.execute("select count(*) from employee where (active='1');")
            active = cursor.fetchone()
        with connection.cursor() as cursor:
            cursor.execute("select count(*) from employee where (active='0');")
            inactive = cursor.fetchone()

        return Response({"total": total[0], "active": active[0], "inactive": inactive[0]}, status=200)
