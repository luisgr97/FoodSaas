"""Secction To Imports and Froms"""
from django.db import models  # Para la Bd
# imports foreign
from bills.models import Bill


class Payment(models.Model):
    """Payment model"""

    # foregin keys
    pay = models.ForeignKey(
        Bill, on_delete=models.PROTECT)

    # data fields
    pay_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    value = models.FloatField(null=True, blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'payment'
        verbose_name = 'payment'
        verbose_name_plural = 'payments'

    """functions by identify the model"""

    def __str__(self):
        return str(self.id)
