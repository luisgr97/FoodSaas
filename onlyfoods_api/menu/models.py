"""Secction To Imports and Froms"""
from django.db import models  # Para la Bd
# imports foreign
from franchise.models import Franchise


class Menu(models.Model):
    """Menu model"""

    # Business Fields
    menu_name = models.CharField(
        max_length=255, null=True, blank=True, unique=True)
    banner = models.CharField(max_length=2000,
                              blank=True,
                              null=True,
                              default='https://res.cloudinary.com/sigeedu/image/upload/v1594776164/sigedu/1528904524_boy_1_wehjsw.svg')
    description = models.CharField(max_length=2000,
                                   blank=True,
                                   null=True)


    # data fields
    create_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'menu'
        verbose_name = 'menu'
        verbose_name_plural = 'menus'

    """functions by identify the model"""

    def __str__(self):
        return str(self.menu_name)
