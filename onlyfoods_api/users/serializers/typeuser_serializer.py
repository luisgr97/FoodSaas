# Library seializer
from rest_framework import serializers
# Model of user
from ..models import TypeCustomUser


class TypeUserSerializer(serializers.ModelSerializer):
    """Serializer class to object type user"""

    class Meta:
        model = TypeCustomUser
        fields = '__all__'

    def create(self, validated_data):
        """Create a new user object"""
        typeuser = TypeCustomUser.objects.create(
            typeusers=validated_data['typeusers'],
            is_active=validated_data['is_active'],
        )
        # Guarda el usuario
        typeuser.save()
        return typeuser

    def update(self, instance, validated_data):
        """Update a user object"""
        typeuser = super().update(instance, validated_data)
        typeuser.save()
        return typeuser
    
    def perform_destroy(self, instance):
        """Delete a user object"""
        instance.delete()
        return "ok"

