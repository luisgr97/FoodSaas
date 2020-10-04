"""Librerias e imports"""
from django.db import models
from django_tenants.models import TenantMixin, DomainMixin


class Client(TenantMixin):
    """Class Tenant, represent a scheme in the bd"""

    name = models.CharField(max_length=100)
    paid_until = models.DateField()
    on_trial = models.BooleanField()
    created_on = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    auto_create_schema = True
    auto_drop_schema = True

    class Meta:
        db_table = 'client'
        verbose_name = 'client'
        verbose_name_plural = 'clients'


class Domain(DomainMixin):
    """Registra los dominios de la app"""

    class Meta:
        db_table = 'domain'
        verbose_name = 'domain'
        verbose_name_plural = 'domains'

    