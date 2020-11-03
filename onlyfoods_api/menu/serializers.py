# Library seializer
from rest_framework import serializers
# Model of Menu
from .models import Menu


class MenuSerializer(serializers.ModelSerializer):
    """Serializer class to object Menu"""

    class Meta:
        model = Menu
        fields = '__all__'

    def create(self, validated_data):
        """Create a new Menu object"""
        menu = Menu.objects.create(
            menu_name=validated_data['menu_name'],
            banner=validated_data['banner'],
            description=validated_data['description'],
            franchise=validated_data['franchise']
        )
        # Guarda el usuario
        menu.save()
        return Menu

    def update(self, instance, validated_data):
        """Update a Menu object"""
        menu = super().update(instance, validated_data)
        menu.save()
        return menu

    def perform_destroy(self, instance):
        """Delete a Menu object"""
        instance.delete()
        return "ok"


class MenuShowPublicDataSerializer(serializers.ModelSerializer):
    """Serializer class to object Menu, expose the none sensible attributes"""

    class Meta:
        model = Menu
        fields = ['id','menu_name',
                  'banner',
                  'description',
                  'franchise']
        depth = 2
