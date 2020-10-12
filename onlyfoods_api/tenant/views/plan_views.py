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
# Serializer to the model Plan
from ..serializers.plan_serializer import *
from ..models import Client

# to manage the response object
from rest_framework.response import Response  # realiza la respuesta Http
from rest_framework import status  # retorna el código 200, 300, 400, 500


class PlanCreate(CreateAPIView):
    """View to Create Plans"""
    queryset = Client.objects.all()
    serializer_class = PlanSerializer


class PlanDetail(RetrieveAPIView):
    """View to Retrive a Plans"""
    queryset = Client.objects.all()
    serializer_class = PlanSerializer


class PlanList(ListAPIView):
    """View to List a Plans"""
    queryset = Client.objects.all()
    serializer_class = PlanSerializer


class PlanUpdate(RetrieveUpdateAPIView):
    """View to Update a Plans"""
    queryset = Client.objects.all()
    serializer_class = PlanSerializer


class PlanDelete(DestroyAPIView):
    """View to Delete a Plans"""
    queryset = Client.objects.all()
    serializer_class = PlanSerializer
