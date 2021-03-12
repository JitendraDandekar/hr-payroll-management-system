from django.db import models


class AdminUser(models.Model):
    username = models.CharField(max_length=50, unique=True, null=True, blank=True)
    password = models.CharField(max_length=50, null=True, blank=True)
    status = models.BooleanField(default=True)

    class Meta:
        db_table = 'admin'

    def __str__(self):
        return self.username


def auto_emp_id_increment():
    count = Employee.objects.order_by('emp_id').last()
    if count:
        return count.emp_id + 1
    else:
        return 1000


def documents_path(instance, filename):
    return 'employee/emp_{id}/{filename}'.format(id=instance.emp_id, filename=filename)


class Employee(models.Model):
    GENDER = [('male', 'Male'), ('female', 'Female'),
              ('transgender', 'Transgender')]

    emp_id = models.AutoField(primary_key=True, default=auto_emp_id_increment)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    contact = models.IntegerField()
    gender = models.CharField(max_length=50, choices=GENDER)
    dob = models.DateField()
    address = models.CharField(max_length=255)
    department = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    dateOfHired = models.DateField()
    dateOfJoined = models.DateField()
    profilePic = models.ImageField(
        upload_to=documents_path, default="employee/profile-picture.png")
    active = models.BooleanField(default=True)

    class Meta:
        db_table = 'employee'

    def __str__(self):
        return self.firstname + ' ' + self.lastname
