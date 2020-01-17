from rest_framework import viewsets, permissions
from .models import Profile
from .serializers import ProfileSerializer


# Profile Viewset
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    #     permissions.IsAdminUser
    # ]
    serializer_class = ProfileSerializer
