"""Section to imports and froms"""
from django.contrib import admin
from django_tenants.admin import TenantAdminMixin
from .models import *
# this library translate at fields and information to any lenguages
from django.utils.translation import gettext as _


@admin.register(Client)
class ClientAdmin(TenantAdminMixin, admin.ModelAdmin):
    """Ad to panel admin the teant model"""
    ordering = ['id']
    list_display = ('name', 'paid_until', 'on_trial', 'created_on', 'is_active')

    fieldsets = (
        (_('Tenant'), {"fields": ('name', 'created_on')}),
        (_('Info'), {"fields": ('paid_until', 'on_trial', 'is_active')})
    )
