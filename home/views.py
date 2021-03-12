from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .utils import news
# Create your views here.


class NewsViewSet(viewsets.ViewSet):
    def list(self, request):
        return Response(news, status=200)
