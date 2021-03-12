from django.contrib import admin
from .models import AdminUser, Employee

# Register your models here.
admin.site.register(AdminUser)
admin.site.register(Employee)