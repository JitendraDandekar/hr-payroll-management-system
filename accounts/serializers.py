from rest_framework import serializers
from .models import AdminUser, Employee
from django.contrib.auth.hashers import make_password


class AdminLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=50)
    password = serializers.CharField(max_length=50, style={'input_type': 'password'})


class AdminUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminUser
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        username = validated_data.get('username')
        password = validated_data.get('password')
        if username == "" and password == "":
            raise serializers.ValidationError("field not be null!")
        password = make_password(validated_data.pop('password'))
        admin = AdminUser.objects.create(password=password, **validated_data)
        admin.save()
        return admin

    def update(self, instance, validated_data):
        username = validated_data.get('username')
        password = validated_data.get('password')
        status = validated_data.get('status')
        admin = AdminUser.objects.get(id=instance.id)

        if password not in [None, ""]:
            admin.password = make_password(password)
        if username not in [None, ""]:
            admin.username = username
        if status not in [None, ""]:
            admin.status = status

        admin.save()
        return admin


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
