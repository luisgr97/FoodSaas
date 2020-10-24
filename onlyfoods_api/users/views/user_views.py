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
# Serializer to the model User
from ..serializers.user_serializer import *
from ..models import CustomUser
# to manage the response object
from rest_framework.response import Response #realiza la respuesta Http
from rest_framework import status # retorna el código 200, 300, 400, 500



class UserCreate(CreateAPIView):
    """View to Create Users"""
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    

class UserDetail(RetrieveAPIView):
    """View to Retrive a Users"""
    queryset = CustomUser.objects.all()
    serializer_class = UserShowPublicDataSerializer
    

class UserList(ListAPIView):
    """View to List a Users"""
    queryset = CustomUser.objects.all()
    serializer_class = UserShowPublicDataSerializer


class UserUpdate(RetrieveUpdateAPIView):
    """View to Update a Users"""
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class UserDelete(DestroyAPIView):
    """View to Delete a Users"""
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


