from django.db import models
from accounts.models import Employee


# class SalaryCalculator:
#     def __init__(self, ppa):
#         self.ppa = ppa
#
#     @property
#     def monthly_salary(self):
#         return int(self.ppa / 12)
#
#     def basic_da(self):
#         return self.monthly_salary() * 0.50
#
#     def hra(self):
#         return self.basic_da() * 0.10
#
#     @staticmethod
#     def conveyance():
#         return 1600
#
#     def pf(self):
#         return self.basic_da() * 0.12
#
#     @staticmethod
#     def esic(self):
#         return 125
#
#     @staticmethod
#     def professional_tax(self):
#         return 200
#
# def net_salary(self): return self.monthly_salary() - self.hra() - self.conveyance() - self.pf() - self.esic() -
# self.professional_tax()


class Salary(models.Model):
    employee_id = models.ForeignKey(Employee, on_delete=models.CASCADE)
    ppa = models.FloatField()
    monthly_salary = models.FloatField()
    basic_da = models.FloatField()
    hra = models.FloatField()
    conveyance = models.FloatField()
    pf = models.FloatField()
    esic = models.FloatField()
    professional_tax = models.FloatField()
    net_salary = models.FloatField()

    class Meta:
        db_table = 'salary'

    def __str__(self):
        return self.employee_id.firstname + " " + self.employee_id.lastname


class MonthlySalary(models.Model):
    employee_id = models.ForeignKey(Employee, on_delete=models.CASCADE)
    from_date = models.DateField()
    to_date = models.DateField()
    paid_status = models.BooleanField(default=False)
    paid_date = models.DateField(null=True)

    class Meta:
        db_table = 'monthly_salary'

    def __str__(self):
        return self.employee_id.firstname + " " + self.employee_id.lastname
