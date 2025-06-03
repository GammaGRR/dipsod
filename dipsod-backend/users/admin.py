from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.safestring import mark_safe
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'is_admin', 'phone', 'avatar_preview')
    readonly_fields = ('avatar_preview',)
    
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Персональная информация', {'fields': ('first_name', 'last_name', 'email')}),
        ('Права доступа', {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'is_admin', 'groups', 'user_permissions'),
        }),
        ('Дополнительная информация', {'fields': ('phone', 'avatar', 'avatar_preview')}),
        ('Даты', {'fields': ('last_login', 'date_joined')}),
    )

    def avatar_preview(self, obj):
        if obj.avatar:
            return mark_safe(f'<img src="{obj.avatar.url}" width="150" height="200" />')
        return "Нет фото"
    avatar_preview.short_description = "Превью аватара"

admin.site.register(CustomUser, CustomUserAdmin)