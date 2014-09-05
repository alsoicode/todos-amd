from django.shortcuts import render

from .models import Todo


def index(request):
    todos = Todo.to_JSON()
    return render(request, 'app.html', {'todos': todos})
