# Library seializer
from rest_framework import serializers
# Model of Payment
from .models import Payment


class PaymentSerializer(serializers.ModelSerializer):
    """Serializer class to object Payment"""

    class Meta:
        model = Payment
        fields = '__all__'

    def create(self, validated_data):
        """Create a new Payment object"""
        payment = Payment.objects.create(
            pay=validated_data['pay'],
            value=validated_data['value']
        )
        # Guarda el usuario
        payment.save()
        return payment

    def update(self, instance, validated_data):
        """Update a Payment object"""
        payment = super().update(instance, validated_data)
        payment.save()
        return payment

    def perform_destroy(self, instance):
        """Delete a Payment object"""
        instance.delete()
        return "ok"


class PaymentShowPublicDataSerializer(serializers.ModelSerializer):
    """Serializer class to object Payment, expose the none sensible attributes"""

    class Meta:
        model = Payment
        fields = ['pay',
                  'value',
                  'pay_at']
        depyh = 1
