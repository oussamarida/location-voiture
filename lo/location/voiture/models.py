from django.db import models

# Create your models here.

from django.db import  models
from django.contrib.auth.models import AbstractUser


class Ville(models.Model):
    nom = models.CharField(max_length=50)

    def __str__(self):
        return self.nom



class Voiture(models.Model):
    id= models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nom = models.CharField(max_length=100, null=True , unique=True)
    prix_jour = models.DecimalField(max_digits=8, decimal_places=2)
    nombre_siege = models.CharField(max_length=100, null=True)
    nbr_bagage=models.CharField(max_length=100, null=True)
    nbr_portes=models.CharField(max_length=100, null=True)
    climatise=models.CharField(max_length=100, null=True)
    manuelle=models.CharField(max_length=100, null=True)
    photourl = models.CharField(max_length=700, null=True)
    ville = models.ForeignKey(Ville, related_name="villes",on_delete=models.CASCADE)

    def __str__(self):
        return '{} {} {} {} {} {} {} '.format(self.nom , self.prix_jour , self.nbr_bagage, self.prix_jour,self.nbr_portes,self.nombre_siege,self.ville)


    
class Client(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50)
    age = models.IntegerField()
    date_permis = models.DateField()
    ref_permis = models.CharField(max_length=20)

    def __str__(self):
        return '{} {} {} {} {} {} '.format(self.username , self.email , self.password , self.age , self.date_permis ,self.ref_permis)


class Reservation(models.Model):
    date_debut = models.DateField()
    date_fin = models.DateField()
    voiture = models.ForeignKey(Voiture,related_name="voitures",  on_delete=models.CASCADE)
    client = models.ForeignKey(Client , on_delete=models.CASCADE)

    def __str__(self):
        return '{} {} {} {}  '.format(self.date_debut , self.date_fin , self.voiture , self.client)




