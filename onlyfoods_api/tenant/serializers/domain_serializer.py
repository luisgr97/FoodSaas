# Library seializer
from rest_framework import serializers
# Model of user
from ..models import Domain

"""-------------------------------Domain Serializers------------------------------------------------"""


class DomainSerializer(serializers.ModelSerializer):
    """Serializer class to object Domain"""

    class Meta:
        model = Domain
        fields = '__all__'
        depth = 1

    def create(self, validated_data):
        """Create a new user object"""
        domain = Domain.objects.create(
            domain=validated_data['domain'],
            is_primary=validated_data['is_primary'],
            tenant_id=validated_data['tenant_id'],
        )
        # Guarda el usuario
        domain.save()
        return domain

    def update(self, instance, validated_data):
        """Update a user object"""
        domain = super().update(instance, validated_data)
        domain.save()
        return domain

    def perform_destroy(self, instance):
        """Delete a user object"""
        instance.delete()
        return "ok"


class DomainShowPublicDataSerializer(serializers.ModelSerializer):
    """Serializer class to object user, expose the none sensible attributes"""

    class Meta:
        model = Domain
        fields = [
            'domain',
            'tenant_id'
        ]
        depth = 1
