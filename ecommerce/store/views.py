from django.shortcuts import render
from django.http import JsonResponse
import datetime
import json
from .models import *

# Create your views here.
def store(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(
            customer=customer,
            complete=False
            )
        items = order.orderitem_set.all()
        cartItems = order.get_cart_items
    else:
        items = []
        order = {'get_cart_total':0, 'get_cart_items':0, 'shipping': False}
        cartItems = order['get_cart_items']
    products = Product.objects.all()
    context = {'products': products, 'cartItems': cartItems}
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
        cartItems = order.get_cart_items
    # Dado que el usuario no esta autenticado
    else:
        items = []
        order = {'get_cart_total':0, 'get_cart_items':0, 'shipping': False}
        cartItems = order['get_cart_items']
    context = {'items': items, 'order': order, 'cartItems': cartItems}
    return render(request, 'store/cart.html', context)

def checkout(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(
            customer=customer,
            complete=False
            )
        items = order.orderitem_set.all()
        cartItems = order.get_cart_items
    else:
        items = []
        order = {'get_cart_total':0, 'get_cart_items':0, 'shipping': False}
        cartItems = order['get_cart_items']
    context = {'items': items, 'order': order, 'cartItems': cartItems}
    return render(request, 'store/checkout.html', context)

# Desde el back end, se va a manejar la logica de la actualizacion de los items
def updfateItem(request):
    #  Se anade lo siguiente luego de crear la extraccion del csrf token
    data = json.loads(request.body)
    productId = data['productId']
    action = data['action']
    print('Action:', action)
    print('Product:', productId)
    
    # Ahora vamos a buscar el customer y el producto para proceder a crear el pedido
    customer = request.user.customer
    product = Product.objects.get(id=productId)
    order, created = Order.objects.get_or_create(
        customer=customer,
        complete=False
    )
    orderItem, created = OrderItem.objects.get_or_create(
        order=order,
        product=product
    )

    # Ahora vamos a manejar la logica de la actualizacion de los items
    # Si el action es igual a add, se anade un item al pedido
    # Si el action es igual a remove, se elimina un item del pedido
    if action == 'add':
        orderItem.quantity = (orderItem.quantity + 1)
    elif action == 'remove':
        orderItem.quantity = (orderItem.quantity - 1)
    # Guardamos el pedido
    orderItem.save()
    # Si el pedido es igual a 0, se elimina el item
    if orderItem.quantity <= 0:
        orderItem.delete()
    
    return JsonResponse(
        'Item was added',
        safe=False
    ) # Retorna un JSON

# Ahora vamos haces una funcion para procesar el pedido
def processOrder(request):
    print('Data:', request.body)
    transaction_id = datetime.datetime.now().timestamp()
    data = json.loads(request.body)

    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(
            customer=customer,
            complete=False
            )
        total = float(data['form']['total'])
        order.transaction_id = transaction_id

        # Verificar que no se este intentando hacer un pedido falso
        if abs(total - order.get_cart_total) < 0.001:
            order.complete = True
        order.save()

        if order.shipping == True:
            ShippingAddress.objects.create(
                customer=customer,
                order=order,
                address=data['shipping']['address'],
                city=data['shipping']['city'],
                state=data['shipping']['state'],
                zipcode=data['shipping']['zipcode'],
            )

    else:
        print('User is not logged in')
    return JsonResponse('Payment complete!', safe=False) # Retorna un JSON
