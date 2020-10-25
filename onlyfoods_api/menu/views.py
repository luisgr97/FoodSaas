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
# Serializer to the model Menu
from .serializers import *
from .models import Menu

# to manage the response object
from rest_framework.response import Response #realiza la respuesta Http
from rest_framework import status # retorna el código 200, 300, 400, 500



class MenuCreate(CreateAPIView):
    """View to Create Menus"""
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    

class MenuDetail(RetrieveAPIView):
    """View to Retrive a Menus"""
    queryset = Menu.objects.all()
    serializer_class = MenuShowPublicDataSerializer
    

class MenuList(ListAPIView):
    """View to List a Menus"""
    queryset = Menu.objects.all()
    serializer_class = MenuShowPublicDataSerializer


class MenuUpdate(RetrieveUpdateAPIView):
    """View to Update a Menus"""
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class MenuDelete(DestroyAPIView):
    """View to Delete a Menus"""
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

