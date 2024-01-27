//1. Tipo entero y decimal
const entero = 10;
const decimal = 10.12;

console.log(typeof entero, typeof decimal);
// En javascript no existe el tipo de dato float, solo number

//2. Notacion cientifica
const cientifico = 10e3;

//3. Infinitos y NaN
const infinito = 1 / 0;
const otroInfinito = Infinity;
const noUnNumero = NaN;

console.log(infinito, otroInfinito, noUnNumero);

//Operaciones aritmeticas
// 1. Suma, resta, multiplicacion y division
const suma = 1 + 2;
const resta = 1 - 2;
const multiplicacion = 1 * 2;
const division = 1 / 2;

//2. Modulo y exponenciacion
const modulo = 4 % 2;
const exponente = 2 ** 2;

// Problemas de precision
const sumaDecimal = 0.1 + 0.2;
console.log(sumaDecimal);
// Por temas de representacion no hay suficiente memoria para representar el numero.
console.log(sumaDecimal.toFixed(2));
// El metodo toFixed() permite especificar la cantidad de decimales que queremos.
console.log(sumaDecimal === 0.3);
// Esto nos devuelve false porque no son exactamente iguales.

// Operaciones avanzadas
const raizCuadrada = Math.sqrt(9);
const valorAbsoluto = Math.abs(-5);
const numeroAlAzar = Math.random();
console.log(raizCuadrada, valorAbsoluto, numeroAlAzar);