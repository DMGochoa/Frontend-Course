if (shipping == "False"){
    console.log('User is not required to pay for shipping');
    document.getElementById('shipping-info').innerHTML = '';
}

if (user != 'AnonymousUser'){
    console.log('User is authenticated, getting form data');
    document.getElementById('user-info').innerHTML = '';
}

if (shipping == "False" && user != 'AnonymousUser') {
    console.log('User is not required to pay for shipping and is authenticated');
    // Ocultamos el formulario de envío si el usuario no necesita envío y está autenticado
    document.getElementById('form-wrapper').classList.add('hidden');
    // Mostramos el botón de pago
    document.getElementById('payment-info').classList.remove('hidden');
}

var form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault(); // Previene que el formulario se envíe
    // Ahora mostramos la información de pago
    document.getElementById('payment-info').classList.remove('hidden');
    // Ocultamos el boton
    document.getElementById('form-button').classList.add('hidden');
});

document.getElementById('make-payment').addEventListener(
    'click', function(event) {
        //event.preventDefault();
        submitFormData();
    }
);

function submitFormData() {
    console.log('Payment button clicked')

    var userFormData = {
        'name': null,
        'email': null,
        'total': total,
    }
    var shippingInfo = {
        'address': null,
        'city': null,
        'state': null,
        'zipcode': null,
    }

    if (shipping != "False") {
        shippingInfo.address = form.address.value;
        shippingInfo.city = form.city.value;
        shippingInfo.state = form.state.value;
        shippingInfo.zipcode = form.zipcode.value;
    }
    if (user == 'AnonymousUser') {
        userFormData.name = form.name.value;
        userFormData.email = form.email.value;
    }

    var url = '/process_order/'
    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({
            'form': userFormData,
            'shipping': shippingInfo
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        alert('Transaction completed');
        window.location.href = storeURL; // Redirige al usuario a la página de inicio
    })
}