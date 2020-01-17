from rest_framework import routers
from .views import UserViewSet, RegisterAPI, LoginAPI, UserAPI
from django.urls import path
from knox import views

router = routers.DefaultRouter()

router.register('users', UserViewSet, basename='users')

userpatterns = router.urls

authpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('user/', UserAPI.as_view(), name='user')
]

urlpatterns = userpatterns + authpatterns