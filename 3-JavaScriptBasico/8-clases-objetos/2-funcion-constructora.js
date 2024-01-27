// let persona = {
//     nombre: "Diego",
//     apellido: "Moreno",
//     edad: "26"
// }

// Pero si queremos crear muchas personas pues tendriamos un problema
// para eso creamos una funcion constructora que haga personas.

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona('Diego', 'Moreno', 26);

// Si queremos agregar propiedades a la funcion constructora

Persona.prototype.telefono = '123456789';

console.log(persona1.telefono);

Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
}

persona1.saludar();
