from rest_framework import serializers
from .models import CustomUser, Kudo

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'organization', 'kudos_remaining']

class KudoSerializer(serializers.ModelSerializer):
    sender = CustomUserSerializer(read_only=True)
    receiver = CustomUserSerializer(read_only=True)

    class Meta:
        model = Kudo
        fields = '__all__'