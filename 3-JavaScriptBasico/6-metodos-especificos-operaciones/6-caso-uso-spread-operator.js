// 1. Copia un array

const animalsOriginal = ['ant', 'bison', 'camel', 'duck', 'elephant']
const animalsCopy = [...animalsOriginal]

console.log(animalsOriginal)
console.log(animalsCopy)

// 2. Combining Arrays

const numbers = [1, 2, 3]
const letters = ['a', 'b', 'c']

const numbersAndLetters = [...numbers, ...letters]

console.log(numbersAndLetters)

//3. Crear arrays con elementos adicionales

const numbers2 = [1, 2, 3]
const numbersAndLetters2 = [...numbers2, 4, 5, 6]

console.log(numbersAndLetters2)

//4. Pass elements to functions

function sum (x, y, z) {
    return x + y + z
}

const numbers3 = [1, 2, 3]
console.log(sum(...numbers3))

function suma(...args) {
    return args.reduce((total, current) => total + current, 0);
}

console.log(suma(1, 2, 3)); // Resultado: 6 (1 + 2 + 3 = 6)
console.log(suma(10, 20, 30, 40)); // Resultado: 100 (10 + 20 + 30 + 40 = 100)
console.log(suma(2, 4, 6, 8, 10)); // Resultado: 30 (2 + 4 + 6 + 8 + 10 = 30)
console.log(suma()); // Resultado: 0 (sin argumentos, devuelve 0 por defecto)
