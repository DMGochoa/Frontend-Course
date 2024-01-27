/*
Metodos que iteran sobre un array y no modifican el array original.

concat -> concatena dos arrays

spread operator -> esparce los elementos de un array

join -> une los elementos de un array en un string
*/

const morseCode1 = ['....', '---']// H O
const morseCode2 = ['.-..', '.-']// L A


// Forma 1
const morseMessage = morseCode1.concat(morseCode2)

console.log(morseCode1)
console.log(morseCode2)
console.log(morseMessage)

//Forma 2
const morseMessage2 = [].concat(morseCode1, morseCode2)

console.log(morseMessage2)

// Spread operator

const morseMessage3 = [...morseCode1, ...morseCode2]

console.log(morseMessage3)

const numbers = [1, 2, 3, 4, 5]
const string = 'Hola mundo'

console.log([...numbers, ...string])

// Join

const morseMessage4 = morseMessage3.join(' e ')
console.log(morseMessage4)
