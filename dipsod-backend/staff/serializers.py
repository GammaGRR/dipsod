from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()
    this_url = serializers.SerializerMethodField()

    class Meta:
        model = Employee
        fields = ['id', 'name', 'position', 'photo_url', 'this_url', 'bio']

    def get_photo_url(self, obj):
        return self.context['request'].build_absolute_uri(obj.photo.url)
    
    def get_this_url(self, obj):
        if obj.this:
            return self.context['request'].build_absolute_uri(obj.this.url)
        return None