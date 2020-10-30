from .views import ComputerViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('assets', ComputerViewSet, basename='computer')

urlpatterns = router.urls
