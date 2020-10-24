"""Secction To Imports and Froms"""
from django.db import models  # Para la Bd
# imports foreign
from menu.models import Menu


class Product(models.Model):
    """Product model"""

    # Business Fields
    product_name = models.CharField(
        max_length=255, null=True, blank=True, unique=True)
    image = models.CharField(max_length=2000,
                             blank=True,
                             null=True,
                             default='https://res.cloudinary.com/sigeedu/image/upload/v1594776164/sigedu/1528904524_boy_1_wehjsw.svg')
    description = models.CharField(max_length=2000,
                                   blank=True,
                                   null=True)
    price = models.FloatField(blank=True,
                              null=True, default=0.0)
    # foregin keys
    menu = models.ForeignKey(
        Menu, related_name="products", on_delete=models.PROTECT)

    # data fields
    create_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'product'
        verbose_name = 'product'
        verbose_name_plural = 'products'

    """functions by identify the model"""

    def __str__(self):
        return str(self.product_name)
