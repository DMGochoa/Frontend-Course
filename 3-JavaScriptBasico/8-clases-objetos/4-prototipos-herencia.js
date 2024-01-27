/* Los prototipos solo existen en clases o funciones constructoras.

El prototipo lo que hace es que si una propiedad o metodo no existe 
en el objeto, lo busca en el prototipo.

*/

class Animal {
    constructor (nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    emitirSonido() {
        console.log('Sonido de emite un sonido');
    }
}

// Herencia, es decir el perro extiende de animal
class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo); // Llama al constructor de la clase padre
        this.raza = raza;
    }

    emitirSonido() { // Sobreescribir el metodo emitirSonido
        console.log('Guauuuuuuu');
    }

    correr() {
        console.log(`${this.nombre} corre muy rapido`);
    }
}

const perro1 = new Perro('Firulais', 'Perro', 'Chihuahua');
perro1.emitirSonido();
perro1.correr();

// Ahora si queremos trabajar especificamente con una ionstancia
// aqui le estamos agregando un nuevo metodo a la instancia sin afectar
// a las demas instancias. Pero si queremos agregar un nuevo metodo a la clase
// lo hacemos con prototype.
perro1.nuevoMetodo = function() {
    console.log('Este es un nuevo metodo');
}

perro1.nuevoMetodo();
console.log(perro1);

// Agregar un nuevo metodo a la clase
Perro.prototype.nuevoMetodo2 = function() {
    console.log('Este es un nuevo metodo 2');
}

perro1.nuevoMetodo2();
console.log(perro1);
console.log(Perro.prototype)

// Todos los objetos al final extienden de Object y todas estas conexiones 
// se mapean a traves de las cadenas de prototipos.
