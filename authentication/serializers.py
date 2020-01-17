from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


# Register serializer
class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email',
                  'first_name', 'last_name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        email=validated_data['email'],
                                        first_name=validated_data['first_name'],
                                        last_name=validated_data['last_name'],
                                        password=validated_data['password'])
        return user


# Login serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)

        if user and user.is_active:
            return user
        raise serializers.ValidationError('Incorrect Credentials')


# User serializer
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')