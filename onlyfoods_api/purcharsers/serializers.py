# Library seializer
from rest_framework import serializers
# Model of Purcharse
from .models import Purcharse 


class PurcharseSerializer(serializers.ModelSerializer):
    """Serializer class to object Purcharse"""

    class Meta:
        model = Purcharse
        fields = '__all__'

    def create(self, validated_data):
        """Create a new Purcharse object"""
        purcharse = Purcharse.objects.create(
            product=validated_data['product'],
            bill=validated_data['bill']
        )
        # Guarda el usuario
        purcharse.save()
        return purcharse

    def update(self, instance, validated_data):
        """Update a Purcharse object"""
        purcharse = super().update(instance, validated_data)
        purcharse.save()
        return purcharse

    def perform_destroy(self, instance):
        """Delete a Purcharse object"""
        instance.delete()
        return "ok"


class PurcharseShowPublicDataSerializer(serializers.ModelSerializer):
    """Serializer class to object Purcharse, expose the none sensible attributes"""

    class Meta:
        model = Purcharse
        fields = ['product',
                  'bill',
                  'create_at']
        depyh = 2
