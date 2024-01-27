// Nos ayuda a iterar sobre todos los elementos de una lista, y ejecutar un bloque de código para cada uno de ellos.

/*
for (variable; condicion; incremento) {
    CODIGO A EJECUTAR
}
*/

let list = [1, 2, 3, 4, 5, 'Pepito Perez'];

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}
