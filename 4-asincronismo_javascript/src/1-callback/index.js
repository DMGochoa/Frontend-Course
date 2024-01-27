// Es una funcion que pasa como argumentoi otra funcion y se usa por dentro de la ultima.
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}


setTimeout(function () {
    console.log('Hola mundo');
}, 2000)

console.log(calc(6, 2, sum));

function grettin(name) {
    let message = `Hola ${name}`;
    console.log(message);
}

setTimeout(
    grettin, // callback
    1000, // tiempo
    'Erick' // argumentos...
)
