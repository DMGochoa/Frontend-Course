/*
Ejercicio: Encontrar los indices de una sub cadena

Dado un array de strings y un string target, escriba una funcion
que determine si el target string esta presente en el array. Si esta
presente, devuelva el indice de la primera ocurrencia y el indice de
la ultima ocurrencia, de lo contrario devuelva -1.
*/

const stringArray = ['apple', 'banana', 'orange', 'kiwi', 'orange', 'apple', 'pineapple']
const target = 'apple'

function findIndices (array, target) {
    const firstIndex = array.indexOf(target)
    const lastIndex = array.lastIndexOf(target)
    return firstIndex === -1 && lastIndex === -1 ? -1:[firstIndex, lastIndex]
}

console.log(findIndices(stringArray, target))
