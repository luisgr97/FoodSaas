"""Secction To Imports and Froms"""
from django.db import models  # Para la Bd
# imports foreign
from users.models import CustomUser


class Bill(models.Model):
    """Bill model"""

    # Business Fields
    sub_total = models.FloatField(blank=True,
                              null=True, default=0.0)
    iva = models.FloatField(blank=True,
                              null=True, default=0.0)
    total = models.FloatField(blank=True,
                              null=True, default=0.0)
    
    # foregin keys
    client = models.ForeignKey(
        CustomUser, related_name="client", on_delete=models.PROTECT)
    
    # data fields
    create_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'bill'
        verbose_name = 'bill'
        verbose_name_plural = 'bills'

    """functions by identify the model"""

    def __str__(self):
        return str(self.id)
