// Funciones puras e impuras

// Funciones puras
function suma(a, b) {
    return a + b;
}

//Funciones impuras (esto no es malo, solo es para saber que existen)

// 1. Modifican el valor de una variable global
// 2. Modifican el valor de un parametro
// 3. Solicitudes http
// 4. Modificar el DOM
// 5. Impresion en consola o pantalla
// 6. Obtener fecha y hora

// Funcion impura
let a = 1;
function impura(b) {
    a = a + b;
}
console.log(a); // 1
impura(3);
console.log(a); // 4