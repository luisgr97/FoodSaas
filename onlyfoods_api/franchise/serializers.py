# Library seializer
from rest_framework import serializers
# Model of Franchise
from .models import Franchise


class FranchiseSerializer(serializers.ModelSerializer):
    """Serializer class to object Franchise"""

    class Meta:
        model = Franchise
        fields = '__all__'

    def create(self, validated_data):
        """Create a new Franchise object"""
        franchise = Franchise.objects.create(
            business_name=validated_data['business_name'],
            email=validated_data['email'],
            nit=validated_data['nit'],
            logo=validated_data['logo'],
            address=validated_data['address'],
            phone=validated_data['phone'],
            tenant=validated_data['tenant']
        )
        # Guarda el usuario
        franchise.save()
        return franchise

    def update(self, instance, validated_data):
        """Update a Franchise object"""
        franchise = super().update(instance, validated_data)
        franchise.save()
        return franchise

    def perform_destroy(self, instance):
        """Delete a Franchise object"""
        instance.delete()
        return "ok"


class FranchiseShowPublicDataSerializer(serializers.ModelSerializer):
    """Serializer class to object Franchise, expose the none sensible attributes"""

    class Meta:
        model = Franchise
        fields = ['business_name',
                  'email',
                  'logo',
                  'phone']

