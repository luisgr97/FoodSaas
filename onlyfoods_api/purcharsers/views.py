# Views custom to the endpoint

# from rest_framework.views import APIView
# Generic views to the endpoint
from rest_framework.generics import (
    CreateAPIView,  # create one
    RetrieveAPIView,  # get one (filter)
    ListAPIView,  # get all (filter)
    RetrieveUpdateAPIView,  # update one
    DestroyAPIView,  # delete one
)
# Serializer to the model Purcharse
from .serializers import *
from .models import Purcharse

# to manage the response object
from rest_framework.response import Response #realiza la respuesta Http
from rest_framework import status # retorna el código 200, 300, 400, 500



class PurcharseCreate(CreateAPIView):
    """View to Create Purcharses"""
    queryset = Purcharse.objects.all()
    serializer_class = PurcharseSerializer
    

class PurcharseDetail(RetrieveAPIView):
    """View to Retrive a Purcharses"""
    queryset = Purcharse.objects.all()
    serializer_class = PurcharseShowPublicDataSerializer
    

class PurcharseList(ListAPIView):
    """View to List a Purcharses"""
    queryset = Purcharse.objects.all()
    serializer_class = PurcharseShowPublicDataSerializer


class PurcharseUpdate(RetrieveUpdateAPIView):
    """View to Update a Purcharses"""
    queryset = Purcharse.objects.all()
    serializer_class = PurcharseSerializer


class PurcharseDelete(DestroyAPIView):
    """View to Delete a Purcharses"""
    queryset = Purcharse.objects.all()
    serializer_class = PurcharseSerializer

