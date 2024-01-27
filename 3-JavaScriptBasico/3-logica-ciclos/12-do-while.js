/*
do {
    // Bloque de código
} while (condición);

Primero se ejecuta el bloque de código y luego se evalúa la condición. Lo importante es que siempre siempre se ejecuta primero el bloque de código para luego evaluar la condicion.
*/

let contador = 0;

do {
    console.log(contador);
    contador++;
} while (contador < 3);
