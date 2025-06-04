from django.contrib import admin
from .models import Employee

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'created_at')
    fields = ('name', 'position', 'photo', 'this', 'bio')