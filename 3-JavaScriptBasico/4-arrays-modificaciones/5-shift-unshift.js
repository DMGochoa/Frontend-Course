// Metodos que modifican el array original.

const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white'];

// shift: saca el primer elemento del array
const firstColor = colors.shift();
console.log(colors);
console.log(firstColor);

// unshift: agrega un elemento al principio del array
colors.unshift('purple');
console.log(colors);
