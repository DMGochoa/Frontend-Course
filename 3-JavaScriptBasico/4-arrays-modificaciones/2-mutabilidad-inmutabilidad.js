// Mutabilidad e inmutabilidad
const fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'watermelon'];
console.log(fruits);
fruits.push('strawberry');
console.log(fruits); // Se le agrego un valor nuevo al array

//Inmutabilidad

const newfruits = fruits.concat(['grapes']);
console.log(fruits);
console.log(newfruits); // Aqui lo que ocurre es que creamos un nuevo array con el valor que queremos agregar, pero el array original no se modifica

// Verisi es un array.
const isArray = Array.isArray(fruits);
console.log(isArray); // Aqui estamos preguntando si fruits es un array, y nos devuelve un booleano