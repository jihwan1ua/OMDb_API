from rest_framework import serializers 
from .models import Movie, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # Editable = false field createOn do not need to be added on as read_only_fields
        # https://www.django-rest-framework.org/api-guide/serializers/
        fields = '__all__'
    
class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'