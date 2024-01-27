/*
Metodos que iteran sobre un array y no modifican el array original.

find() -> Devuelve el valor del primer elemento del array que cumple la funcion de prueba proporcionada. En cualquier otro caso devuelve undefined.
*/

// find
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find((number) => number > 2);
console.log(evenNumber); // 3

// findIndex

const evenNumberIndex = numbers.findIndex((number) => number > 2);
console.log(evenNumberIndex); // 2
console.log(numbers[evenNumberIndex]); // 3
