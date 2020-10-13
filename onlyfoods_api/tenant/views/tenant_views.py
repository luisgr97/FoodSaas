""" Views custom to the endpoint"""

#from rest_framework.views import APIView
# Generic views to the endpoint
from rest_framework.generics import (
    CreateAPIView,  # create one
    RetrieveAPIView,  # get one (filter)
    ListAPIView,  # get all (filter)
    RetrieveUpdateAPIView,  # update one
    DestroyAPIView,  # delete one
)
# Serializer to the model Tenant
from ..serializers.tenant_serializer import *
from ..models import Client

# to manage the response object
from rest_framework.response import Response  # realiza la respuesta Http
from rest_framework import status  # retorna el código 200, 300, 400, 500


class TenantCreate(CreateAPIView):
    """View to Create Tenants"""
    queryset = Client.objects.all()
    serializer_class = TenantSerializer


class TenantDetail(RetrieveAPIView):
    """View to Retrive a Tenants"""
    queryset = Client.objects.all()
    serializer_class = TenantShowPublicDataSerializer


class TenantList(ListAPIView):
    """View to List a Tenants"""
    queryset = Client.objects.all()
    serializer_class = TenantShowPublicDataSerializer


class TenantUpdate(RetrieveUpdateAPIView):
    """View to Update a Tenants"""
    queryset = Client.objects.all()
    serializer_class = TenantSerializer


class TenantDelete(DestroyAPIView):
    """View to Delete a Tenants"""
    queryset = Client.objects.all()
    serializer_class = TenantSerializer
