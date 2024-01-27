const house = {
    dogName: 'Lucky',
    dogGreeting: function() {
        console.log(`Hola, soy ${this.dogName}`); // Este this se refiere al
        // objeto house hace referencia a si mismo.
    }
}

house.dogGreeting(); // Hola, soy Lucky


// Enlace explicito
function dogGreeting () {
    console.log(`Hola, soy ${this.dogName}`); // Este this se refiere al
    // objeto house hace referencia a si mismo.
}

const newHouse = {
    dogName: 'Frank',
}

dogGreeting.call(newHouse); // Hola, soy Frank

function newDogGreeting (owner, address) {
    console.log(`Hola, soy ${this.dogName} and I live with ${owner} on ${address}`);
}

const owner = 'Juan';
const address = 'Calle 123';

newDogGreeting.call(newHouse, owner, address); // Hola, soy Frank and I live with Juan on Calle 123