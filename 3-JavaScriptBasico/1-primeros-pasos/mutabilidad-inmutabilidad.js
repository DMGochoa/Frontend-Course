// Tipo de dato Primitivo - Inmutable
let numero = 23;
numero = numero + 1;
console.log(numero); // 24
// El valor original no cambia, lo que ocurre es que se asigna un nuevo valor a la variable
let esVerdad = true;
esVerdad = false;
console.log(esVerdad); // false

// Tipo de dato Complejo - Mutable
let usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 23
}
usuario.edad = 24;
console.log(usuario); // { nombre: 'Juan', apellido: 'Perez', edad: 24 }

let frutas = ['Manzana', 'Pera', 'Banana'];
frutas.push('Naranja');
console.log(frutas); // [ 'Manzana', 'Pera', 'Banana', 'Naranja' ]
frutas[0] = 'Frutilla';
console.log(frutas); // [ 'Frutilla', 'Pera', 'Banana', 'Naranja' ]

function cambiarNombre (objeto) {
    objeto.nombre = 'Pedro';
}
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 23
}
console.log(persona); // { nombre: 'Juan', apellido: 'Perez', edad: 23 }
cambiarNombre(persona);
console.log(persona); // { nombre: 'Pedro', apellido: 'Perez', edad: 23 }