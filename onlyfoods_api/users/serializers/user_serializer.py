# Library seializer
from rest_framework import serializers
# Library to hash to password of user
from django.contrib.auth.hashers import make_password
# Model of user
from ..models import CustomUser



class CreateUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name',
                  'document_id', 'phone_number', 'address', 'date_of_birth', 'typeuser', 'password', 'is_staff']


    def create(self, validated_data):
        """Create a new user object"""
        user = CustomUser.objects.create(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            document_id=validated_data['document_id'],
            phone_number=validated_data['phone_number'],
            address=validated_data['address'],
            date_of_birth=validated_data['date_of_birth'],
            typeuser=validated_data['typeuser'],
            password=make_password(validated_data.pop("password")),
            is_staff=validated_data['is_staff']
        )
        # Guarda el usuario
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    """Serializer class to object user"""

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name',
                  'document_id', 'phone_number', 'address', 'date_of_birth', 'typeuser', 'password', 'is_staff']
        depth = 2
        #exclude = ('groups', 'user_permissions')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'min_length': 6,
            }
        }

    def create(self, validated_data):
        """Create a new user object"""
        user = CustomUser.objects.create(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            document_id=validated_data['document_id'],
            phone_number=validated_data['phone_number'],
            address=validated_data['address'],
            date_of_birth=validated_data['date_of_birth'],
            typeuser=validated_data['typeuser'],
            password=make_password(validated_data.pop("password")),
            is_staff=validated_data['is_staff']
        )
        # Guarda el usuario
        user.save()
        return user

    def update(self, instance, validated_data):
        """Update a user object"""
        user = super().update(instance, validated_data)
        user.save()
        return user

    def perform_destroy(self, instance):
        """Delete a user object"""
        instance.delete()
        return "ok"


class UserShowPublicDataSerializer(serializers.ModelSerializer):
    """Serializer class to object user, expose the none sensible attributes"""

    class Meta:
        model = CustomUser
        fields = ['id',
                  'first_name',
                  'last_name',
                  'typeuser',
                  'profile_picture',
                  'last_login',
                  'is_active']
        depth = 2
