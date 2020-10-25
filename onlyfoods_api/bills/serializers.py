# Library seializer
from rest_framework import serializers
# Model of Bill
from .models import Bill 


class BillSerializer(serializers.ModelSerializer):
    """Serializer class to object Bill"""

    class Meta:
        model = Bill
        fields = '__all__'

    def create(self, validated_data):
        """Create a new Bill object"""
        bill = Bill.objects.create(
            sub_total=validated_data['sub_total'],
            iva=validated_data['iva'],
            total=validated_data['total'],
            client=validated_data['client']
        )
        # Guarda el usuario
        bill.save()
        return bill

    def update(self, instance, validated_data):
        """Update a Bill object"""
        bill = super().update(instance, validated_data)
        bill.save()
        return bill

    def perform_destroy(self, instance):
        """Delete a Bill object"""
        instance.delete()
        return "ok"




class BillShowPublicDataSerializer(serializers.ModelSerializer):
    """Serializer class to object Bill, expose the none sensible attributes"""

    class Meta:
        model = Bill
        fields = ['sub_total',
                  'iva',
                  'total',
                  'client',
                  'create_at']
        depyh = 1
