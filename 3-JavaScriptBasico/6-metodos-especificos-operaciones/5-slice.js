/*
Metodos que iteran sobre un array y no modifican el array original.

slice -> Extrae una seccion de un array y devuelve un nuevo array. 
De inicio a fin sin incluir el final.
*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2)) // Desde donde empieza hasta el final
console.log(animals.slice(2, 4)) // Desde donde empieza hasta donde termina sin incluirlo
console.log(animals.slice(1, 5)) // Desde donde empieza hasta donde termina sin incluirlo
console.log(animals.slice(-2)) // Desde donde empieza hasta el final
console.log(animals.slice(-2, -1)) // Desde donde empieza hasta donde termina sin incluirlo