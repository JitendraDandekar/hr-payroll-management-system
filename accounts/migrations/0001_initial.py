# Generated by Django 3.1.7 on 2021-02-26 05:48

import accounts.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AdminUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50, unique=True)),
                ('password', models.CharField(max_length=50)),
                ('status', models.BooleanField(default=True)),
            ],
            options={
                'db_table': 'admin',
            },
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('emp_id', models.AutoField(default=accounts.models.auto_emp_id_increment, primary_key=True, serialize=False)),
                ('firstname', models.CharField(max_length=50)),
                ('lastname', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=100)),
                ('contact', models.IntegerField()),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female'), ('transgender', 'Transgender')], max_length=50)),
                ('dob', models.DateField()),
                ('address', models.CharField(max_length=255)),
                ('department', models.CharField(max_length=100)),
                ('designation', models.CharField(max_length=100)),
                ('dateOfHired', models.DateField()),
                ('dateOfJoined', models.DateField()),
                ('profilePic', models.ImageField(blank=True, default='employee/profile-picture.png', null=True, upload_to=accounts.models.documents_path)),
                ('active', models.BooleanField(default=True)),
            ],
            options={
                'db_table': 'employee',
            },
        ),
    ]
