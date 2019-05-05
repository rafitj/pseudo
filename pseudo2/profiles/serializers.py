from rest_framework import serializers
from profiles.models import Profile
from versatileimagefield.serializers import VersatileImageFieldSerializer


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        profile_image = VersatileImageFieldSerializer(
            sizes='profile_image_renditions'
        )
        user = serializers.ReadOnlyField(source='user.username')
        fields = '__all__'
