"""Secction To Imports and Froms"""

from django.db import models  # Para la Bd
# imports foreign
from tenant.models import Client

class Franchise(models.Model):
    """Franchise model"""

    # Business Fields
    business_name = models.CharField(max_length=255, null=True, blank=True, unique=True)
    email = models.EmailField(
        max_length=255, unique=True, null=True, blank=True)
    nit = models.CharField(max_length=255, unique=True)
    logo = models.CharField(max_length=2000,
                                       blank=True,
                                       null=True,
                                       default='https://res.cloudinary.com/sigeedu/image/upload/v1594776164/sigedu/1528904524_boy_1_wehjsw.svg')
    address = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=13, blank=True, null=True)

    # foregin keys
    tenant = models.OneToOneField(Client, related_name="franchise", on_delete=models.PROTECT)
    
    # data fields
    create_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'franchise'
        verbose_name = 'franchise'
        verbose_name_plural = 'franchises'

    """functions by identify the model"""

    def __str__(self):
        return str(self.business_name)



