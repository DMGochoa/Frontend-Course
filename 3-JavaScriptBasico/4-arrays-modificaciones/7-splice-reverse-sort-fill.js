// Metodos que modifican el array original.

const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white'];

//splice: cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

valor = colors.splice(2, 2, 'purple', 'orange');
console.log(colors);
console.log(`El valor eliminado es: ${valor}`);

//reverse: invierte el orden de los elementos del array
colors.reverse();
console.log(colors);

//sort: ordena los elementos del array
colors.sort();
console.log(colors);

//sort with numbers
const numbers = [1, 10, 2, 5, 9, 20];
numbers.sort((a, b) => a - b);

//fill: rellena todos los elementos del array desde el indice a un indice final con un valor estatico.

const ages = [12, 15, 18, 20, 22, 25, 30];
