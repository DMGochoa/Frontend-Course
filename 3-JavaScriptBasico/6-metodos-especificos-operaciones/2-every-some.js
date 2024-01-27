/*
Metodos que iteran sobre un array y no modifican el array original.

every -> Determinamos si los elementos de un array satisfacen una condicion.

some -> Determina si alguno cumple la condicion.
*/

// every

const ages = [18, 20, 22, 23, 24, 25, 26, 27, 28, 31]
const allAdults = ages.every((age) => age >= 18)
console.log(allAdults)

const allAdults21 = ages.every((age) => age >= 21)
console.log(allAdults21)

// some 
const allAdults30 = ages.some((age) => age >= 30)
console.log(allAdults30)