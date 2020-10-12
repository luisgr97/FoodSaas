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
# Serializer to the model Domain
from ..serializers.domain_serializer import *
from ..models import Domain

# to manage the response object
from rest_framework.response import Response  # realiza la respuesta Http
from rest_framework import status  # retorna el código 200, 300, 400, 500


class DomainCreate(CreateAPIView):
    """View to Create Domain"""
    queryset = Domain.objects.all()
    serializer_class = DomainSerializer


class DomainDetail(RetrieveAPIView):
    """View to Retrive a Domain"""
    queryset = Domain.objects.all()
    serializer_class = DomainShowPublicDataSerializer


class DomainList(ListAPIView):
    """View to List a Domains"""
    queryset = Domain.objects.all()
    serializer_class = DomainShowPublicDataSerializer


class DomainUpdate(RetrieveUpdateAPIView):
    """View to Update a Domains"""
    queryset = Domain.objects.all()
    serializer_class = DomainSerializer


class DomainDelete(DestroyAPIView):
    """View to Delete a Domains"""
    queryset = Domain.objects.all()
    serializer_class = DomainSerializer
