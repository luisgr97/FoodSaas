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
# Serializer to the model Payment
from .serializers import *
from .models import Payment

# to manage the response object
from rest_framework.response import Response #realiza la respuesta Http
from rest_framework import status # retorna el código 200, 300, 400, 500



class PaymentCreate(CreateAPIView):
    """View to Create Payments"""
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    

class PaymentDetail(RetrieveAPIView):
    """View to Retrive a Payments"""
    queryset = Payment.objects.all()
    serializer_class = PaymentShowPublicDataSerializer
    

class PaymentList(ListAPIView):
    """View to List a Payments"""
    queryset = Payment.objects.all()
    serializer_class = PaymentShowPublicDataSerializer


class PaymentUpdate(RetrieveUpdateAPIView):
    """View to Update a Payments"""
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer


class PaymentDelete(DestroyAPIView):
    """View to Delete a Payments"""
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

