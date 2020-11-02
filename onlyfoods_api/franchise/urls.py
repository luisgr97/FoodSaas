from django.urls import path, re_path

from .views import *

urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('create', FranchiseCreate.as_view()),  # ok
    path('list', FranchiseList.as_view()),  # ok
    path('get/<pk>', FranchiseDetail.as_view()),  # ok
    path('update/<pk>', FranchiseUpdate.as_view()),  # ok
    path('delete/<pk>', FranchiseDelete.as_view()),  # ok
]
