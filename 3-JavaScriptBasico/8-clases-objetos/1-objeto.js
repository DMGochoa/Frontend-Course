/*
Los objetos son estructuras de datos (a grandes rasgos) de la forma llave:valor. Donde tenemos
propiedad = valor y esto le definimos como objeto { propiedad: valor }. Cuando estamos hablando
de crear un carro o un usuario, a la programacion lo que estamos haciendo es abstraer la realidad
y crear un objeto que tenga las propiedades que nosotros queremos que tenga.
*/

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: {
        calle: 'Calle 1',
        numero: 123,
        ciudad: 'Bogota'
    },
    saludar: function() {
        console.log('Hola');
    }
}

persona.saludar();

persona.telefono = '123456789';
console.log(persona.telefono);

persona.despedirse = function() {
    console.log('Chao');
}

persona.despedirse();

console.log(persona.direccion.ciudad);

delete persona.telefono;
console.log(persona);
