"""Secction To Imports and Froms"""
from django.db import models  # Para la Bd
# imports foreign
from products.models import Product


class Ingredient(models.Model):
    """Ingredient model"""

    # Business Fields
    ingredient_name = models.CharField(
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
    product = models.ForeignKey(
        Product, related_name="ingredients", on_delete=models.CASCADE)

    # data fields
    create_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'ingredient'
        verbose_name = 'ingredient'
        verbose_name_plural = 'ingredients'

    """functions by identify the model"""

    def __str__(self):
        return str(self.ingredient_name)
