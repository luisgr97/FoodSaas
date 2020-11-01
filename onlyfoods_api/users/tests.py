from django.test import TestCase
from .models import TypeCustomUser
from django_tenants.utils import schema_context

with schema_context('kokoriko'):
    TypeCustomUser.objects.create(typeusers="superusuario")
    TypeCustomUser.objects.create(typeusers="administrador")
    TypeCustomUser.objects.create(typeusers="digitador")
    TypeCustomUser.objects.create(typeusers="cliente")

# Create your tests here.