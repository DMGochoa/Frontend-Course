// Vamos a crear una funcion que va recibbir un objeto y parametros para modificar su contexto de ejecucion.

const owner = 'Diego';
const address = 'Calle 123';

function dogGreeting (owner, address) {
    console.log(`Hola, soy ${this.dogName} and I live with ${owner} on ${address}`);
}

const newHouse = {
    dogName: 'Frank',
}

dogGreeting.call(newHouse, owner, address); // Hola, soy Frank and I live with Diego on Calle 123

// El metodo call recibe como primer parametro el objeto que va a ser el contexto de ejecucion de la funcion dogGreeting y los demas parametros son los parametros que recibe la funcion dogGreeting.

necessaryParams = [owner, address];
dogGreeting.apply(newHouse, necessaryParams); // Hola, soy Frank and I live with Diego on Calle 123
// El metodo apply es igual al metodo call, la diferencia es que los parametros que recibe la funcion dogGreeting se pasan en un arreglo.

const newDogGreeting = dogGreeting.bind(newHouse, owner, address);
newDogGreeting(); // Hola, soy Frank and I live with Diego on Calle 123
// El metodo bind es igual al metodo call, la diferencia es que el metodo bind no ejecuta la funcion dogGreeting, sino que retorna una nueva funcion con el contexto de ejecucion modificado.