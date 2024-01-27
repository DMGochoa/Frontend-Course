// Es una forma más simple de hacer lo mismo que con un for loop y de esta forma acceder a cada elemento de la lista.

/**
array.forEach((item) => {
    CODIGO A EJECUTAR
});
*/

let list = [1, 2, 3, 4, 5, 'Pepito Perez'];

list.forEach((item, index) => {
    console.log(item, index);
});