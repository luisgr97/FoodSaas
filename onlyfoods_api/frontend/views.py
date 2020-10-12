# Views custom to the endpoint
from django.shortcuts import render 
from django.http import HttpResponse
from django.views.generic import View
from django.conf import settings
import os


class Frontend(View):
    
    def get(self, request):
            print (os.path.join(settings.REACT_APP_DIR, 'build', 'index.html'))
            try:
                with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                    return HttpResponse(f.read())
            except FileNotFoundError:
                logging.exception('Production build of app not found')
                return HttpResponse(
                    status=501,
                )

