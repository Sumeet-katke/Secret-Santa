from django.shortcuts import render
from random import shuffle
from .models import Santas
from django.http import HttpResponse

def index(request):
    if request.method == 'POST':
        Name = request.POST.get('Name')
        save = Santas(Name=Name)
        save.save()
        child = assign(request)
        return render(request, "index.html", {'child': child})
    else:
        return HttpResponse('Error')

def assign(request):
    children = list(Santas.objects.values_list('Name', flat=True))
    shuffle(children)
    return children[0] if children else None
