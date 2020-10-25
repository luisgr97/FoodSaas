"""Secction To Imports and Froms"""
from django.db import models  # Para la Bd
# imports foreign
from products.models import Product
from bills.models import Bill


class Purcharse(models.Model):
    """Purcharse model"""

    # foregin keys
    product = models.ForeignKey(
        Product, related_name="products", on_delete=models.PROTECT)
    bill = models.ForeignKey(
        Bill, related_name="bill", on_delete=models.PROTECT)

    # data fields
    create_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'purcharse'
        verbose_name = 'purcharse'
        verbose_name_plural = 'purcharses'

    """functions by identify the model"""
    def __str__(self):
        return str(self.id)
