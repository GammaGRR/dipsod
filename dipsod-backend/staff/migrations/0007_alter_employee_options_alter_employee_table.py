# Generated by Django 5.2 on 2025-04-15 15:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0006_alter_employee_table'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='employee',
            options={'verbose_name': 'Сотрудники', 'verbose_name_plural': 'Сотрудники'},
        ),
        migrations.AlterModelTable(
            name='employee',
            table=None,
        ),
    ]
