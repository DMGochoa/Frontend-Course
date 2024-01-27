// Vamos a tener varios escenarios posibles:

// switch (expresion) {
//     case valor1:
//         // Código a ejecutar si el valor es igual a valor1
//         break; // Opcional, detiene la ejecución del switch
//     case valor2:
//         // Código a ejecutar si el valor es igual a valor2
//         break;
//     default:
//         // Código a ejecutar si el valor no es igual a ninguno de los anteriores
// }

let expr = 'Papayas1';

switch (expr) {
    case 'Naranjas':
        console.log('El kilo cuesta $0.59.');
        break;
    case 'Manzanas':
        console.log('El kilo cuesta $0.32.');
        break;
    case 'Platanos':
        console.log('El kilo de platanos cuesta $0.48.');
        break;
    case "Mangos":
    case "Papayas":
        console.log('El kilo cuesta $0.79.');
        break;
    default:
        console.log(`Lo lamentamos, por el momento no disponemos de ${expr}.`)
}