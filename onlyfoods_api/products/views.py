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
# Serializer to the model Product
from .serializers import *
from .models import Product

# to manage the response object
from rest_framework.response import Response #realiza la respuesta Http
from rest_framework import status # retorna el código 200, 300, 400, 500



class ProductCreate(CreateAPIView):
    """View to Create Products"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    

class ProductDetail(RetrieveAPIView):
    """View to Retrive a Products"""
    queryset = Product.objects.all()
    serializer_class = ProductShowPublicDataSerializer
    

class ProductList(ListAPIView):
    """View to List a Products"""
    queryset = Product.objects.all()
    serializer_class = ProductShowPublicDataSerializer


class ProductUpdate(RetrieveUpdateAPIView):
    """View to Update a Products"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDelete(DestroyAPIView):
    """View to Delete a Products"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

