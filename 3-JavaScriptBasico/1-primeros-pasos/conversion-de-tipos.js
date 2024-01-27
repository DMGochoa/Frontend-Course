// Tyoe casting: Explicit
const cuarentaYDos = '42';
const cuarentaYDosEntero = Number(cuarentaYDos);
console.log(cuarentaYDosEntero, typeof cuarentaYDosEntero);

const stringDecimal = '180.534';
const decimal = Number(stringDecimal);
console.log(decimal, typeof decimal);

const binario = '1010';
const binarioADecimal = parseInt(binario, 2);
console.log(binarioADecimal, typeof binarioADecimal);

// Tyoe casting: Implicit
const suma = '5' + 3;
console.log(suma, typeof suma);
const suma1 = 3 + '5';
console.log(suma1, typeof suma1);
const suma2 = '3' + true;
console.log(suma2, typeof suma2);
const suma3 = true + 3;
console.log(suma3, typeof suma3);
// Si hay un string entonces concatena y cuando no hay strings entonces suma.