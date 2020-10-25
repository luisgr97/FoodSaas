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
# Serializer to the model Franchise
from .serializers import *
from .models import Franchise

# to manage the response object
from rest_framework.response import Response #realiza la respuesta Http
from rest_framework import status # retorna el código 200, 300, 400, 500



class FranchiseCreate(CreateAPIView):
    """View to Create Franchises"""
    queryset = Franchise.objects.all()
    serializer_class = FranchiseSerializer
    

class FranchiseDetail(RetrieveAPIView):
    """View to Retrive a Franchises"""
    queryset = Franchise.objects.all()
    serializer_class = FranchiseShowPublicDataSerializer
    

class FranchiseList(ListAPIView):
    """View to List a Franchises"""
    queryset = Franchise.objects.all()
    serializer_class = FranchiseShowPublicDataSerializer


class FranchiseUpdate(RetrieveUpdateAPIView):
    """View to Update a Franchises"""
    queryset = Franchise.objects.all()
    serializer_class = FranchiseSerializer


class FranchiseDelete(DestroyAPIView):
    """View to Delete a Franchises"""
    queryset = Franchise.objects.all()
    serializer_class = FranchiseSerializer


