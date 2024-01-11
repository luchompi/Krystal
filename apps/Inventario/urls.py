from django.urls import path

from . import views

app_name = 'Inventario'

urlpatterns = [
    path('', views.InventarioController.as_view()),
    path('<int:id>/', views.InventarioController.as_view()),
]
