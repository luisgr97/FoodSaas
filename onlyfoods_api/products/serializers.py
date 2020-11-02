# Library seializer
from rest_framework import serializers
# Model of Product
from .models import Product 


class ProductSerializer(serializers.ModelSerializer):
    """Serializer class to object Product"""

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        """Create a new Product object"""
        product = Product.objects.create(
            product_name=validated_data['product_name'],
            image=validated_data['image'],
            description=validated_data['description'],
            price=validated_data['price'],
            menu=validated_data['menu']
        )
        # Guarda el usuario
        product.save()
        return product

    def update(self, instance, validated_data):
        """Update a Product object"""
        product = super().update(instance, validated_data)
        product.save()
        return product

    def perform_destroy(self, instance):
        """Delete a Product object"""
        instance.delete()
        return "ok"


class ProductShowPublicDataSerializer(serializers.ModelSerializer):
    """Serializer class to object Product, expose the none sensible attributes"""

    class Meta:
        model = Product
        fields = ['product_name',
                  'image',
                  'description',
                  'price',
                  'menu']
        depyh = 1
