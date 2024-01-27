/*
Metodos que iteran sobre un array y no modifican el array original.

filter() -> Crea un nuevo array con elementos que cumplen una condicion dada por una funcion. Es importatnte que la funcion devuelva un valor booleano.

reduce() -> Ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un unico valor.
*/

// filter
const numbers = [2, 8, 5, 4, 3, 9, 1, 6, 7];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 8, 4, 6]

// reduce
const suma = numbers.reduce((acc, number) => acc + number, 0);
// .reduce((acumulador, valorActual) => acumulador + valorActual, valorInicialDelAcumulador)
console.log(suma); // 45


const palabras = ['Hola', 'mundo', 'soy', 'una', 'palabra', 'muy', 'larga', 'mundo', 'mundo'];
const palabraRepetida = palabras.reduce((acc, palabra) => {
    if (acc[palabra]) {
        acc[palabra]++;
    } else {
        acc[palabra] = 1;
    }
    return acc;
}, {});
console.log(palabraRepetida); // { Hola: 1, mundo: 3, soy: 1, una: 1, palabra: 1, muy: 1, larga: 1 }