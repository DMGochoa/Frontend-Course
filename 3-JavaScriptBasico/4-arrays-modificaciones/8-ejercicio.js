/*
Vamos a implementar un juego de cartas sencillo. Tendras un array que va representar un maso de cartas y usted desea realizar las siguientes operaciones:
1. Barajar las cartas.
2. Sacar una carta del tope.

NOTA: Para este caso vamos a requerir usar el metodo splice para mezclar las cartas.
*/

function crearMaso() {
    const palos = ['♠', '♥', '♦', '♣'];
    const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K'];
    let maso = [];
    for (let i = 0; i < palos.length; i++) {
        for (let j = 0; j < valores.length; j++) {
            maso.push(valores[j] + palos[i]);
        }
    }
    return maso;
}
// Buscar algoritmo de fisher-yates para barajar.
function barajar(maso) {
    // Creamos un nuevo array para almacenar las cartas barajadas.
    const idxAleatorio = (max) => Math.floor(Math.random() * max);
    let barajado = [];
    while (maso.length > 0) {
        let indice = idxAleatorio(maso.length);
        let carta = maso.splice(indice, 1);
        barajado.push(carta[0]);
    }
    return barajado;
}

function entregarCartas(maso, cantidad) {
    return maso.splice(0, cantidad);
}

function jugar() {
    let maso = crearMaso();
    let barajado = barajar(maso);
    let cartas = entregarCartas(barajado, 2);
    console.log(cartas);
}

jugar();
