"""Imports and froms"""

from users.models import CustomUser
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.authtoken.models import Token


"""para responder los usuarios en el login"""


class Log_in(APIView):
    """Class Login to manage the log acces in the plattform"""

    def post(self, request):
        """recive a document_id and password and return the basic info and the token access"""
        document_id = request.data.get('document_id', None)
        password = request.data.get('passwor', None)
        """si el se reciben bien los parametros busca el usuario"""
        if document_id and password:
            user_querysets = CustomUser.objects.get(document_id__iexact=document_id).values(
                'id',
                'first_name',
                'last_name',
                'type_user_id',
                'profile_picture',
                'password',
                'last_login',
                'is_active'
            )
            """Si lo encuentra y esta activo elimna los campos sencibiles y crea el token"""
            if (user_querysets.exists() and user_querysets[0]['is_active']):
                user = user_querysets[0]
                """valida que la contraseña propocionada sea correcta"""
                if(check_password(password, user['password'])):
                    user.pop('password')  # quitamos la contraseña.
                    """Si la contraseña es correcta trae el usuario"""
                    user_token = CustomUser.objects.get(
                        document_id__iexact=document_id)
                    """creamos el token de acceso ..."""
                    token, created = Token.objects.get_or_create(
                        user=user_token[0])
                    """revisa el perfil del usuario"""
                    return Response({"message": "Login exitoso",
                                     "data":  {
                                         "token": token.key,
                                         "user_data": {"user": user_token[0]}
                                     }})
                else:
                    message = "Contraseña incorrecta"
                    return Response({"message": message, 'data': {}},
                                    istatus=status.HTTP_204_NO_CONTENT)
            else:
                message = "El id proporcionado no existe o el usuario no está activo"
                return Response({"message": message, 'data': {}},
                                status=status.HTTP_204_NO_CONTENT)
        else:
            message = "No ha proporciando datos validos"
            return Response({"message": message, 'data': {}},
                            status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)


class Log_out(APIView):
    """Class Logout to manage the log acces in the plattform"""

    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)
