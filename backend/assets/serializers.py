from rest_framework import serializers
from .models import Computer


class ComputerSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Computer
        fields = "__all__"
