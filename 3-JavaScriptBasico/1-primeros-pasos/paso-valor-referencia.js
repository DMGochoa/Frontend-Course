// Paso por valor
let x = 1;
let y = 'Hola';
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c); // 1 'Hola' null 1 'Hola' null

a = 2;
b = 'Chau';
c = undefined;

console.log(x, y, z, a, b, c); // 1 'Hola' null 2 'Chau' 3

// Paso por referencia
let frutas = ['manzana'];
frutas.push('pera');
