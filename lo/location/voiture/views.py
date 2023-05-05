
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response
from rest_framework.decorators import api_view
from  rest_framework import generics
from rest_framework import viewsets
from django_filters.rest_framework import FilterSet, DateFilter


from .serializer import *
from .serializer import *
# Create your views here.

class VilleViewSet(viewsets.ModelViewSet):
    queryset = Ville.objects.all()
    serializer_class = VilleSerializer
    filterset_fields = ['id']



class VoitureViewSet(viewsets.ModelViewSet):
    queryset = Voiture.objects.all()
    serializer_class = VoitureSerializer
    filterset_fields = ['nom', 'prix_jour', 'nombre_siege', 'nbr_bagage', 'nbr_portes', 'climatise','manuelle','photourl' ,'ville']
    search_fields = ['ville']

    def test(self ):
        queryset = VoitureSerializer.object.all()
        return queryset



class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    filterset_fields = ["date_debut" , "date_fin" , "voiture","client"]
    filterset_fields = ['voiture', "date_debut" , "date_fin" ]
    

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    filterset_fields = ["username" , "email" , "password" , "age", "date_permis", "ref_permis"]
    filterset_fields = ['email','id']




