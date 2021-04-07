from rest_framework import serializers
from .models import SongDetail, User
from rest_framework import exceptions
from django.contrib.auth import authenticate


class SongUploaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongDetail
        fields = '__all__'


class CreateUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'phone', 'city', 'profile_pic']

    def validate(self, data):
        user_obj = User(
            username=data.get('username'),
            email=data.get('email')
        )
        user_obj.set_password(data.get('password'))
        user_obj.is_active = True
        user_obj.save()
        return user_obj


class LoginUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=50)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password')

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')
        if username and password:
            auth = authenticate(username=username, password=password)
            if auth:
                return auth
            else:
                raise exceptions.ValidationError('Username or Password Invalid')
        else:
            raise exceptions.ValidationError('All Fields Required***')