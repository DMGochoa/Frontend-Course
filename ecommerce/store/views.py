from django.shortcuts import render
from .models import *

# Create your views here.
def store(request):
    products = Product.objects.all()
    context = {'products': products}
    return render(request, 'store/store.html', context)

def cart(request):
    # Caso en el que se este autenticado
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(
            customer=customer,
            complete=False
            ) # Query para obtener el pedido del cliente
        items = order.orderitem_set.all() # Query para obtener los items del pedido
    # Dado que el usuario no esta autenticado
    else:
        items = []
        order = {'get_cart_total':0, 'get_cart_items':0}
    context = {'items': items, 'order': order}
    return render(request, 'store/cart.html', context)

def checkout(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(
            customer=customer,
            complete=False
            )
        items = order.orderitem_set.all()
    else:
        items = []
        order = {'get_cart_total':0, 'get_cart_items':0}
    context = {'items': items, 'order': order}
    return render(request, 'store/checkout.html', context)