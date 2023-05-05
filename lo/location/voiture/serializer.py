from rest_framework import serializers
from .models import *




class VilleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ville
        fields = '__all__'







class VoitureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voiture
        fields = ['id','nom', 'prix_jour', 'nombre_siege', 'nbr_bagage', 'nbr_portes', 'climatise','manuelle','photourl','ville']

    def get_photo_url(self, obj):
        return obj.get_photo_url()
    


class ReservationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reservation
        fields = ('date_debut', 'date_fin','voiture','client')

class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = '__all__'    