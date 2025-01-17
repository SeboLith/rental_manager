from rest_framework import serializers
from .models import Profile


# Profile serializer
class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'
