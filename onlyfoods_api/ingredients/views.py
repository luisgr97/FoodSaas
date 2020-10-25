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
# Serializer to the model Ingredient
from .serializers import *
from .models import Ingredient

# to manage the response object
from rest_framework.response import Response #realiza la respuesta Http
from rest_framework import status # retorna el código 200, 300, 400, 500



class IngredientCreate(CreateAPIView):
    """View to Create Ingredients"""
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    

class IngredientDetail(RetrieveAPIView):
    """View to Retrive a Ingredients"""
    queryset = Ingredient.objects.all()
    serializer_class = IngredientShowPublicDataSerializer
    

class IngredientList(ListAPIView):
    """View to List a Ingredients"""
    queryset = Ingredient.objects.all()
    serializer_class = IngredientShowPublicDataSerializer


class IngredientUpdate(RetrieveUpdateAPIView):
    """View to Update a Ingredients"""
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class IngredientDelete(DestroyAPIView):
    """View to Delete a Ingredients"""
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

