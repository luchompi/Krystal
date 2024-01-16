from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Inventario
from .serializers import InventarioSerializer


class InventarioController(APIView):
    def get_elemento(self, id):
        try:
            return Inventario.objects.get(id=id)
        except Inventario.DoesNotExist:
            return None

    def get(self, request, id=None, *args, **kwargs):
        if queryset := self.get_elemento(id):
            serializer = InventarioSerializer(queryset)
        else:
            queryset = Inventario.objects.order_by('-id')[:10]
            serializer = InventarioSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        data = request.data.copy()
        precio = int(data['precio'])
        cantidad = int(data['cantidad'])
        data['precio_unitario'] = round(precio / cantidad, 2)
        precio_venta = int(data['precio_venta'])
        ganancia = round(
            (precio_venta - data['precio_unitario']) / data['precio_unitario'], 2)
        data['ganancia'] = ganancia * 100
        serializer = InventarioSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id=None, *args, **kwargs):

        if queryset := self.get_elemento(id):
            serializer = InventarioSerializer(
                queryset, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            data = request.data.copy()
            for item in data:
                if queryset := self.get_elemento(item['Código']) and item['Stock'] > 0:
                    dif = item['Cantidad'] - item['Stock']
                    element = {
                        'id': item['Código'],
                        'nombre': item['Nombre'],
                        'cantidad': max(dif, 0),
                    }
                    serializer = InventarioSerializer(data=element)
                    queryset = Inventario.objects.get(id=item['Código'])
                    serializer = InventarioSerializer(
                        queryset, data=element, partial=True)
                    if serializer.is_valid():
                        serializer.save()
                    else:
                        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                return Response(status=status.HTTP_200_OK)

    def delete(self, request, *args, **kwargs):
        if instance := self.get_elemento(kwargs['id']):
            instance.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)
