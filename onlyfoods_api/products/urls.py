from django.urls import path, re_path

from .views import *


urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('create', ProductCreate.as_view()), #ok
    path('list', ProductList.as_view()),#ok
    path('get/<pk>', ProductDetail.as_view()), #ok
    path('update/<pk>', ProductUpdate.as_view()),#ok
    path('delete/<pk>', ProductDelete.as_view()),#ok
    path('getbymenu/<menuId>',ProductListByMenu.as_view())
]
