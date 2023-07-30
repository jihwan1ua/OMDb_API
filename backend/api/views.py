from django.shortcuts import render
# from django.contrib.auth import get_user_model
# User = get_user_model()
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import viewsets
from .serializers import UserSerializer, MovieSerializer
from .models import User, Movie

# Create your views here.
# class SignupView(APIView):
#     permission_classes = (permissions.AllowAny, )
#     def post(self, request, format=None):
#         # sign up form with username, email, password, password verification fields
#         # request form data
#         data = self.request.data
#         userName = data['userName']
#         email = data['email']
#         password = data['password']
#         password2 = data['password2']

#         if password == password2:
#             if User.object.filter(email=email).exists():
#                 return Response({'error': 'email already exists'})
#             # TODO: I could implement password rules. i.e. longer than number of characters, special character, etc.
#             else:
#                 user = User.objects.create_user(userName=userName, email=email, password=password)
#                 user.save()
#                 return Response({'success': 'User created successfully'}) 
#         else:
#             return Response({'error': 'passwords do not match'})

class UserSerializerView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MovieSerializerView(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer