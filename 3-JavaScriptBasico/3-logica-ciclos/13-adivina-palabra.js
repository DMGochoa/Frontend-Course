/**
 * El usuario tiene 3 intentos para adivinar la palabra oculta.
 * 
 * Requerimientos:
 * - El juego debe tener una palabra oculta.
 * - El juego puede dar una pista de la palabra.
 * - El usuario debe ingresar una suposición.
 * - El juego debe verificar si la suposición es correcta.
 * - El juego debe tener un límite de intentos.
 * - El juego debe terminar cuando el usuario adivine la palabra o se acaben los intentos.
 */

const palabraSecreta = "javascript";
const intentos = 3;
const pista = "lenguaje de programación";

function agregarPista(pista, secreto, intento) {
    if (intento === 2) {
        pista = pista + ' empieza en ' +secreto.charAt(0);
    } else if (intento === 3) {
        pista = pista + ' y termina en ' + secreto.charAt(secreto.length - 1);
    }
    return pista;
}

function adivinaPalabra(palabraSecreta, intentos, pista) {
    let contador = 0;
    let suposicion = "";
    do {
        pista = agregarPista(pista, palabraSecreta, contador + 1);
        suposicion = prompt(`Adivina la palabra secreta. Pista: ${pista}`);
        if (suposicion.toLowerCase() === palabraSecreta.toLowerCase() ) {
            alert("¡Adivinaste!");
            break;
        } else {
            contador++;
            alert(`Fallaste. Te quedan ${intentos - contador} intentos`);
        }
    } while (contador < intentos);
}

adivinaPalabra(palabraSecreta, intentos, pista);