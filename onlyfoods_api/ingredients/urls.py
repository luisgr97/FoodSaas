from django.urls import path, re_path

from .views import *

urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('create', IngredientCreate.as_view()), #ok
    path('list', IngredientList.as_view()),#ok
    path('get/<pk>', IngredientUpdate.as_view()), #ok
    path('update/<pk>', IngredientDetail.as_view()),#ok
    path('delete/<pk>', IngredientDelete.as_view()),#ok
]
