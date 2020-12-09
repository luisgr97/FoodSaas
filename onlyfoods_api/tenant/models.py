"""Librerias e imports"""
from django.db import models
from django_tenants.models import TenantMixin, DomainMixin


class Plan(models.Model):
    """Class Plan, represent a set of functionalities in the app"""

    name = models.CharField(max_length=100, unique=True)
    created_on = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'plan'
        verbose_name = 'plan'
        verbose_name_plural = 'plans'

    def __str__(self):
        return self.name


class Client(TenantMixin):
    """Class Tenant, represent a scheme in the bd"""

    name = models.CharField(max_length=100)
    plan = models.ForeignKey(Plan, related_name="plan", on_delete=models.PROTECT)
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

    def __str__(self):
        return str(self.name)


class Domain(DomainMixin):
    """Registra los dominios de la app"""
    class Meta:
        db_table = 'domain'
        verbose_name = 'domain'
        verbose_name_plural = 'domains'
    pass

   

    
