var updateBtns = document.getElementsByClassName('update-cart')

for (var i = 0; i < updateBtns.length; i++) {
    // Anadimos un eventhandler a cada boton de update
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'Action:', action)

        console.log('USER:', user)
        if (user === 'AnonymousUser'){
            console.log('User is not authenticated')
        }else{
            console.log('User is authenticated')
            updateUserOrder(productId, action)
        }
    })
}

// Función para actualizar el pedido del usuario
function updateUserOrder(productId, action){
    // Imprime un mensaje en la consola para indicar que los datos están siendo enviados
    console.log('Sending data...')

    // Define la URL a la que se enviará la solicitud
    var url = '/update_item/'

    // Utiliza la función fetch para enviar una solicitud HTTP POST a la URL especificada
    fetch(url, {
        // Especifica que el método HTTP a utilizar es POST
        method: 'POST',
        // Define los encabezados de la solicitud
        headers:{
            // Indica que el cuerpo de la solicitud será una cadena JSON
            'Content-Type':'application/json',
            // Incluye un token CSRF para proteger contra ataques de falsificación de solicitudes entre sitios
            // descomentar luego de configurar el token en main.html
            'X-CSRFToken': csrftoken,
        },
        // Convierte un objeto JavaScript que contiene el productId y la acción en una cadena JSON y la establece como el cuerpo de la solicitud
        body:JSON.stringify({'productId': productId, 'action': action})
    })
    // Utiliza la función then para manejar la respuesta una vez que se ha enviado la solicitud
    .then((response) => {
        // Convierte la respuesta en JSON y la devuelve
        return response.json()
    })
    .then((data) => {
        // Imprime los datos en la consola
        console.log('data:', data)
        // Recarga la página para asegurarse de que se muestren los datos más recientes
        location.reload()
    })
}