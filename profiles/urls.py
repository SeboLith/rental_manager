from rest_framework import routers
from .views import ProfileViewSet

router = routers.DefaultRouter()

router.register('profiles', ProfileViewSet, basename='profiles')

urlpatterns = router.urls