from django.urls import path, re_path

from .views import *


urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('create', ProductCreate.as_view()), #ok
    path('list', ProductList.as_view()),#ok
    path('get/<pk>', ProductUpdate.as_view()), #ok
    path('update/<pk>', ProductDetail.as_view()),#ok
    path('delete/v<pk>', ProductDelete.as_view()),#ok
]
