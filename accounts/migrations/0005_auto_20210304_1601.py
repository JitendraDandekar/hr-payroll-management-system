# Generated by Django 3.1.7 on 2021-03-04 10:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_auto_20210304_1537'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adminuser',
            name='username',
            field=models.CharField(max_length=50, null=True, unique=True),
        ),
    ]
