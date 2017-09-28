from rest_framework import serializers

from django.contrib.auth.models import User

from django.contrib.auth.password_validation import validate_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)

class PasswordSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint.
    """
    newpass = serializers.CharField(required=True)
    def validate_new_password(self, value):
        validate_password(value)
        return value