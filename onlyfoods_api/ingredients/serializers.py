# Library seializer
from rest_framework import serializers
# Model of Ingredient
from .models import Ingredient 


class IngredientSerializer(serializers.ModelSerializer):
    """Serializer class to object Ingredient"""

    class Meta:
        model = Ingredient
        fields = '__all__'

    def create(self, validated_data):
        """Create a new Ingredient object"""
        ingredient = Ingredient.objects.create(
            ingredient_name=validated_data['ingredient_name'],
            image=validated_data['image'],
            description=validated_data['description'],
            price=validated_data['price'],
            product=validated_data['product']
        )
        # Guarda el usuario
        ingredient.save()
        return ingredient

    def update(self, instance, validated_data):
        """Update a Ingredient object"""
        ingredient = super().update(instance, validated_data)
        ingredient.save()
        return ingredient

    def perform_destroy(self, instance):
        """Delete a Ingredient object"""
        instance.delete()
        return "ok"


class IngredientShowPublicDataSerializer(serializers.ModelSerializer):
    """Serializer class to object Ingredient, expose the none sensible attributes"""

    class Meta:
        model = Ingredient
        fields = ['id','ingredient_name',
                  'image',
                  'description',
                  'price',
                  'product']
