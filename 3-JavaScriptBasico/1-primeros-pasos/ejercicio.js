// Perfil de Social Media

//1. User information
const username = 'aldort19'
const fullName = 'Diego Moreno'
const age = 26
const isStudent = true

//2. Address information
const address = {
    street: 'Via Armenia',
    city: 'Pereira',
    state: 'Risaralda',
    zipCode: '660009',
}

//3. Hobbies
const hobbies = ['Coding', 'Gaming', 'Reading', 'Watching movies']

//4 Generating personalized bio
const personalizedBio = `My name is ${fullName}.
I'm ${age} years old.
I live in ${address.city}, ${address.state}.
I like ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]} and ${hobbies[3]}.`

//5. Printing personalized bio
console.log(personalizedBio)
