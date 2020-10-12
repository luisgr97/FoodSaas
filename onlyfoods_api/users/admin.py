"""Section to imports and froms"""

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import *
# this library translate at fields and information to any lenguages
from django.utils.translation import gettext as _


class UserAdmin(BaseUserAdmin):
    """This class represent a user view in the admin site of django"""

    ordering = ['id']
    list_display = ['id', 'email', 'first_name', 'last_name',
                    'document_id', 'profile_picture',
                    'phone_number', 'address', 'password', 'create_at']
    fieldsets = (
        (None, {"fields": ('document_id', 'password')}),
        (_('Pesonal Info'), {"fields": ('email', 'first_name', 'last_name',
                                        'profile_picture', 'phone_number',
                                        'address')}),
        (_('Permissions'), {
         "fields": ('is_active', 'is_staff', 'is_superuser')}),
        (_('Important dates'), {"fields": ('date_of_birth',
                                           'last_login')})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')
        }),
    )

"""This line register a model view to the users in the console admin"""
admin.site.register( CustomUser, UserAdmin)
