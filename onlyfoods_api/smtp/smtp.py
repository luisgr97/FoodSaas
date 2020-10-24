"""Imports"""
from django.core.mail import EmailMultiAlternatives
from django.conf import settings


class Smtp():
    """Smtp object, is a class to manage the send personals emails"""
    message = ""

    def new_tenant_confirm(self, destination, message):
        """Function to send emails to confirm tenant creation"""
        
        # Configuración del correo
        email = EmailMultiAlternatives(
        'Confirmación subscripción a Onlyfoods',
        message,
        settings.EMAIL_HOST_USER,
        [destination],
        cc=[settings.EMAIL_HOST_USER],
        fail_silently=False,
        )

        # Mensaje del correo.
        email.send()
    
    def new_domain_confirm(self, destination, message):
        """Function to send email to confirm access domain"""

         # Configuración del correo
        email = EmailMultiAlternatives(
        'Confirmación activación de servicios Onlyfoods',
        message,
        settings.EMAIL_HOST_USER,
        [destination],
        cc=[settings.EMAIL_HOST_USER],
        fail_silently=False,
        )

        # Mensaje del correo.
        email.send()
    
    def recovery_password(self, destination, message):
        """Function to send email to recovery pass"""
        
        # Configuración del correo
        email = EmailMultiAlternatives(
        'Recuperar contraseña Onlyfoods',
        message,
        settings.EMAIL_HOST_USER,
        [destination],
        cc=[settings.EMAIL_HOST_USER],
        fail_silently=False,
        )

        # Mensaje del correo.
        email.send()
    
