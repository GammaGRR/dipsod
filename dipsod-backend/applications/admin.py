from django.contrib import admin
from django.urls import path
from .models import ConsultationRequest, ServiceRequest, ServiceCategory, Service, ConsultationMessage

@admin.register(ConsultationRequest)
class ConsultationRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'status', 'created_at')
    list_filter = ('id', 'status')

@admin.register(ConsultationMessage)
class ConsultationMessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'message', 'status', 'created_at')
    list_filter = ('status',)

@admin.register(ServiceRequest)
class ServiceRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'service', 'created_at')
    search_fields = ('id', 'name', 'phone')

class ServiceInline(admin.StackedInline):
    model = Service
    extra = 1
    fields = ('name', 'order')

@admin.register(ServiceCategory)
class ServiceCategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon', 'emoji')
    inlines = [ServiceInline]