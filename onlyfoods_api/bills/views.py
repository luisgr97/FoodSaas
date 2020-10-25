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
# Serializer to the model Bill
from .serializers import *
from .models import Bill

# to manage the response object
from rest_framework.response import Response #realiza la respuesta Http
from rest_framework import status # retorna el código 200, 300, 400, 500



class BillCreate(CreateAPIView):
    """View to Create Bills"""
    queryset = Bill.objects.all()
    serializer_class = BillSerializer
    

class BillDetail(RetrieveAPIView):
    """View to Retrive a Bills"""
    queryset = Bill.objects.all()
    serializer_class = BillShowPublicDataSerializer
    

class BillList(ListAPIView):
    """View to List a Bills"""
    queryset = Bill.objects.all()
    serializer_class = BillShowPublicDataSerializer


class BillUpdate(RetrieveUpdateAPIView):
    """View to Update a Bills"""
    queryset = Bill.objects.all()
    serializer_class = BillSerializer


class BillDelete(DestroyAPIView):
    """View to Delete a Bills"""
    queryset = Bill.objects.all()
    serializer_class = BillSerializer

