from rest_framework import viewsets, permissions
from .serializers import ComputerSerializer
from .models import Computer
from .permissions import IsOwnerOrReadOnly


class ComputerViewSet(viewsets.ModelViewSet):
    queryset = Computer.objects.all()
    serializer_class = ComputerSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)