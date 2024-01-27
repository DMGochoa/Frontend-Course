const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1"

// Fucion fetchdata

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest(); // Instancia de la conexion
    xhttp.open(
        'GET', // Tipo de peticion
        url_api, // Url de la peticion
        true // Si es asincrono
    )
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) { // 4: Completado
            if (xhttp.status === 200) { // 200: OK
                callback(
                    null, 
                    JSON.parse(xhttp.responseText) // Transforma el texto a JSON
                    );
            } else {
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send(); // Envia la solicitud
}

fetchData(
    `${API}/products`,
    function (error1, data1) {
        // Si error, matamos retornando un error
        if (error1) return console.error(error1);
        // Ahora llamamos a fetchdata para traer los datos.
        fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
            // Si error, matamos retornando un error
            if (error2) return console.error(error2);
            // Por ultimo mostramos los resultados :)
            fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
                // Si error, matamos retornando un error
                if (error3) return console.error(error3);
                // Por ultimo mostramos los resultados :)
                console.log(data1[0]);
                console.log(data2.title);
                console.log(data3.name);
            });
        });
    })