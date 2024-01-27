/*
Metodos que iteran sobre un array y no modifican el array original.

includes -> Determina si un array incluye un determinado elemento, devuelve un booleano.

indexOf -> Entrega el indice del elemento que primero coincida con el valor especificado,
si no lo encuentra devuelve -1.

lastIndexOf -> Hace lo mismo que indexOf pero empieza a buscar coincidencias desde el final.
*/

// includes

const names = ['John', 'Paul', 'George', 'Ringo']
const george = names.includes('George')
console.log(george)

const diego = names.includes('Diego')
console.log(diego)

// indexOf

const names2 = ['John', 'Paul', 'George', 'Ringo', 'John']
const john = names2.indexOf('John')
console.log(john)

const diego2 = names2.indexOf('Diego')
console.log(diego2)


// lastIndexOf

const names3 = ['John', 'Paul', 'George', 'Ringo', 'John']
const john2 = names3.lastIndexOf('John')
console.log(john2)

const diego3 = names3.lastIndexOf('Diego')
console.log(diego3)