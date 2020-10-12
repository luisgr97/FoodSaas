# Library seializer
from rest_framework import serializers
# Model of user
from ..models import Plan
from datetime import datetime
"""-------------------------------Tenant Serializers------------------------------------------------"""

class PlanSerializer(serializers.ModelSerializer):
    """Serializer class to object plan"""

    class Meta:
        model = Plan
        fields = '__all__'
        depth = 1

    def create(self, validated_data):
        """Create a new user object"""
        plan = Plan.objects.create(
            name=validated_data['name'],
            created_on=datetime.now(),
            is_active=validated_data['is_active']
            )
        # Guarda el usuario
        plan.save()
        return plan

    def update(self, instance, validated_data):
        """Update a user object"""
        plan = super().update(instance, validated_data)
        plan.save()
        return plan
    
    def perform_destroy(self, instance):
        """Delete a user object"""
        instance.delete()
        return "ok"





