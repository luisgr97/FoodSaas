from django.urls import path, re_path

from .views import *


urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('create', PaymentCreate.as_view()), #ok
    path('list', PaymentList.as_view()),#ok
    path('get/<pk>', PaymentUpdate.as_view()), #ok
    path('update/<pk>', PaymentDetail.as_view()),#ok
    path('delete/v<pk>', PaymentDelete.as_view()),#ok
]
