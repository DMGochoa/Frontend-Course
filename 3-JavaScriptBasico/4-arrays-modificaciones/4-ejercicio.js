/*
Crear un programa que simule un stack usando los metodos push y pop. El stack debe guardar una coleccion de libros. El usuario puede realizar las siguientes acciones:
- Agregar un libro al tope del stack
- Sacar un libro del tope del stack
- Mostrar todos los libros

Se debe implementar un loop que permita al usuario realizar estas acciones hasta que decida salir.
*/

const ADD_TO_STACK = 'add';
const REMOVE_FROM_STACK = 'remove';
const SHOW_STACK = 'show';
const EXIT = 'exit';

function deleteFromStack (bookStack) {
    if (bookStack.length > 0) {
        bookStack.pop();
    } else {
        alert('No hay libros en el stack');
    }
    return bookStack;
}

function decitions (bookStack, option) {
    switch (option) {
        case ADD_TO_STACK:
            const book = prompt('Ingrese el nombre del libro');
            bookStack.push(book);
            break;
        case REMOVE_FROM_STACK:
            bookStack = deleteFromStack(bookStack);
            break;
        case SHOW_STACK:
            alert(bookStack);
            break;
        case EXIT:
            break;
        default:
            alert('Opcion invalida');
            break;
    }
    return bookStack;
}

function app() {
    let books = [];
    let option = '';
    while (option !== 'exit') {
        option = prompt('Ingrese una opcion: add, remove, show, exit');
        books = decitions(books, option);
    }
}

app();