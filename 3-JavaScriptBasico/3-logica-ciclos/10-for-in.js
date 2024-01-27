/**
 * For in es la forma para "iterar" sobre un objeto, es decir, acceder a cada una de sus propiedades.
 * 
 * for (variable in objeto) {
 *    CODIGO A EJECUTAR
 * }
 */

let person = {
    name: 'Pepito',
    lastName: 'Perez',
    age: 25
};

for (let key in person) {
    console.log(key, person[key]);
}
