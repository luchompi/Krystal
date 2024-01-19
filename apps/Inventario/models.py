from django.db import models


# Inventario Model
class Inventario(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=500)
    cantidad = models.IntegerField()
    precio = models.IntegerField()
    precio_unitario = models.DecimalField(
        decimal_places=2, default=0.00, max_digits=10)
    precio_venta = models.IntegerField(default=0)
    ganancia = models.DecimalField(
        decimal_places=2, default=0.00, max_digits=10)
    date_created = models.DateField(auto_now_add=True)
    date_updated = models.DateField(auto_now=True)

    def __str__(self):
        return self.nombre
