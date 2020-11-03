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
            is_active=validated_data['is_active']
        )
        # Guarda el usuario
        menu.save()
        return Menu

    def update(self, instance, validated_data):
        """Update a Menu objTypeError: int() argument must be a string, a bytes-like object or a number, not 'DeferredAttribute'
￼
Enviar mensaje a #general
ect"""
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
        fields = ['id', 'menu_name',
                  'banner',
                  'description'
                  ]
        depth = 2
