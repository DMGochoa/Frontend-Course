/*
Metodos que iteran sobre un array y no modifican el array original.

map() -> Permite aplicar una funcion a cada elemento de un array y construir un nuevo array con los resultados.

forEach() -> Permite iterar sobre un array y ejecutar una funcion para cada elemento del array sin devolver nada.
*/

//map

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number * number);
console.log(squares); // [1, 4, 9, 16, 25]

function pow2(number) {
    return number * number;
}

const squares2 = numbers.map(pow2);
console.log(squares2); // [1, 4, 9, 16, 25]

//for each

colors = ['red', 'green', 'blue'];
const iteretatedColors = colors.forEach((color) => console.log(color));
console.log(iteretatedColors); // undefined es decir que el forEach no devuelve nada