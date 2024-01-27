// Cuando escribamos booleanos seria bueno que el nombre de la variable sea una pregunta y de esta manera es facil saber que tipo de dato es.
const isActive = true;
const hasPermission = false;

// Conversion implicita
const result = 5 > 3;
console.log(result, typeof result);

const name = 'Diego';
console.log(!!name);

//Explicita
const value = 0
const explicitBoolean = Boolean(value);
console.log(`El numero ${value} es `, explicitBoolean, typeof explicitBoolean);
// Numeros diferentes de 0 son true.
// Es importante saber que tipos de datos son truthy y cuales son falsy.