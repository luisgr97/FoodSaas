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
from ..serializers.typeuser_serializer import *
from ..models import TypeCustomUser
# to manage the response object
from rest_framework.response import Response #realiza la respuesta Http
from rest_framework import status # retorna el código 200, 300, 400, 500



class TypeUserCreate(CreateAPIView):
    """View to Create Users"""
    queryset = TypeCustomUser.objects.all()
    serializer_class = TypeUserSerializer
    

class TypeUserDetail(RetrieveAPIView):
    """View to Retrive a Users"""
    queryset = TypeCustomUser.objects.all()
    serializer_class = TypeUserSerializer


class TypeUserList(ListAPIView):
    """View to List a Users"""
    queryset = TypeCustomUser.objects.all()
    serializer_class = TypeUserSerializer


class TypeUserUpdate(RetrieveUpdateAPIView):
    """View to Update a Users"""
    queryset = TypeCustomUser.objects.all()
    serializer_class = TypeUserSerializer

class TypeUserDelete(DestroyAPIView):
    """View to Delete a Users"""
    queryset = TypeCustomUser.objects.all()
    serializer_class = TypeUserSerializer


