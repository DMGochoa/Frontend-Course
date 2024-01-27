/*
A partir del 2015 se introdujo la palabra reservada class para crear clases en JavaScript. Se
asemeja mas a la sintaxis de otros lenguajes de programacion orientados a objetos como Java o C#.
*/

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona('Juan', 'Perez', 25);

persona1.saludar();