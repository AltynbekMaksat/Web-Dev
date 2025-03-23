from django.urls import path
from .views import home  # Импортируем нашу функцию

urlpatterns = [
    path('', home, name='home'),  # Главная страница
]
