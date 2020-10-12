from django.urls import path, re_path

from .views import *

urlpatterns = [
    # Despliega el front.
    path('', Frontend.as_view()), #ok
]
