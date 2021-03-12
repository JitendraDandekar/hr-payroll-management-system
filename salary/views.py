from django.db import connection
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Salary
from .serializers import SalarySerializer
from accounts.models import Employee


class SalaryViewSet(viewsets.ModelViewSet):
    queryset = Salary.objects.all()
    serializer_class = SalarySerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['employee_id']


class MonthlySalaryViewSet(viewsets.ViewSet):

    def list(self, request):
        paid_status = request.GET.get('paidStatus', None)
        full_name = request.GET.get('fullName', None)
        department = request.GET.get('department', None)

        if (paid_status or full_name or department) is not None:
            with connection.cursor() as cursor:
                cursor.execute(
                    """select ms.employee_id_id, e.firstname || " " || e.lastname as full_name, e.department, 
                    ms.from_date, ms.to_date, ms.paid_status, ms.paid_date from monthly_salary ms join employee e 
                    on ms.employee_id_id=e.emp_id where (e.firstname || " " || e.lastname like %s) and 
                    ms.paid_status=%s or e.department=%s;""",
                    [full_name + '%', paid_status, department])
                rows = cursor.fetchall()
        else:
            with connection.cursor() as cursor:
                cursor.execute(
                    """select ms.employee_id_id, e.firstname || " " || e.lastname as full_name, e.department, 
                    s.monthly_salary, ms.from_date, ms.to_date, ms.paid_status, ms.paid_date from monthly_salary 
                    ms join employee e on ms.employee_id_id=e.emp_id join salary s on s.employee_id_id=e.emp_id;""")
                rows = cursor.fetchall()

        columns = ['emp_id', 'full_name', 'department', 'salary', 'from_date', 'to_date', 'paid_status', 'paid_date']
        data = []
        for row in rows:
            data.append(dict(zip(columns, row)))
        return Response(data, status=200)

    def retrieve(self, request, pk=None):
        with connection.cursor() as cursor:
            cursor.execute(
                """select ms.employee_id_id, e.firstname || " " || e.lastname as full_name, e.department, 
                s.monthly_salary, ms.from_date, ms.to_date, ms.paid_status, ms.paid_date from monthly_salary ms 
                join employee e on ms.employee_id_id=e.emp_id join salary s on s.employee_id_id=e.emp_id where 
                ms.employee_id_id=%s;""",
                [pk])
            row = cursor.fetchone()
        if row is not None:
            columns = ['emp_id', 'full_name', 'department', 'salary', 'from_date', 'to_date', 'paid_status',
                       'paid_date']
            data = [dict(zip(columns, row))]
            return Response(data, status=200)
        else:
            return Response({'message': 'not found!'}, status=404)

    def update(self, request, pk=None):
        paid_status = request.data.get('paidStatus')
        paid_date = request.data.get('paidDate')

        with connection.cursor() as cursor:
            cursor.execute('update monthly_salary set paid_status=%s, paid_date=%s where employee_id_id=%s',
                           [paid_status, paid_date, pk])
            connection.commit()
        return Response({'message': 'row updated!'}, status=200)
