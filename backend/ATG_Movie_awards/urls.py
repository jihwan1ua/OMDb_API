"""
URL configuration for ATG_Movie_awards project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# TODO: Instead of having urls.py under api app, use router to handle endpoint navigation
# Using viewsets so as_view can't be used to show serializersView, so using router https://www.django-rest-framework.org/api-guide/routers
from rest_framework import routers
from api import views
router = routers.DefaultRouter()
# router.register(r'signup', views.SignupView.as_view())
router.register(r'user', views.UserSerializerView)
router.register(r'movies', views.MovieSerializerView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]