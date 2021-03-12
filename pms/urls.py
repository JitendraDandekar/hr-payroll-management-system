"""pms URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers

from accounts.views import AdminUserViewSet, AdminViewSet, EmployeeViewSet, CountEmployee
from salary.views import SalaryViewSet, MonthlySalaryViewSet
from home.views import NewsViewSet

router = routers.DefaultRouter()
router.register('admin-login', AdminUserViewSet, basename='adminLogin')
router.register('admin', AdminViewSet, basename='admin')
router.register('employee', EmployeeViewSet, basename='employee')
router.register('employee-count', CountEmployee, basename='employeeCount')
router.register('salary', SalaryViewSet, basename='salary')
router.register('news', NewsViewSet, basename="news")
router.register('monthly-salary', MonthlySalaryViewSet, basename="monthlySalary")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', TemplateView.as_view(template_name='index.html'))
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
