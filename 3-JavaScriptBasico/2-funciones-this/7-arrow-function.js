//Arrow function vs tradicional function

const greeting = function (name) {
    return `Hello ${name}`
}

const newGreeting = (name) => {
    return `Hello ${name}`
}

// Arrow function con un implicit return
const arrowGreeting = (name) => `Hello ${name}`
// Arrow function con dos parametros
const arrowGreeting2 = (name, age) => `Hello ${name} you are ${age} years old`

// Lexical binding
const fictionalCharacter = {
    name: "Uncle Ben",
    messageWithTradidiotalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

// Se puede observar que el this de la arrow function no hace referencia al objeto fictionalCharacter.
fictionalCharacter.messageWithTradidiotalFunction('With a traditional function')
fictionalCharacter.messageWithArrowFunction('With an arrow function')