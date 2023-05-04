from django.urls import path
from rest_framework import routers


from  .views import *

from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('ville', VilleViewSet)
router.register('type', TypeViewSet)
router.register('voiture', VoitureViewSet)
router.register('reservation',ReservationViewSet)
router.register('client',ClientViewSet)
