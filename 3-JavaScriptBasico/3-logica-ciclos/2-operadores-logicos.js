/*

Operadores lógicos

*/

// && (AND): Devuelve true si ambos operandos son true.
// || (OR): Devuelve true si al menos uno de los operandos es true.
// ! (NOT): Devuelve true si el operando es false.

const a = 10;
const b = 20;
const c = "10";

a == b && a === c; //false
a != b && a !== c; //true
a > b || a <= b; //true 
a >= b || a < b; //false
a >= b || a < b || a == c; //true
!(a == b); //true
!(a == b && a === c); //true
!(a == b || a === c); //false