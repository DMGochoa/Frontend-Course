const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
         ? setTimeout(() => resolve('Hello Async'), 3000) 
         : reject(new Error('Test Error'));
    });
};


// Hace que sea asincrono pero se tiene que esperar a que se cumpla la promesa
// para continual con el resto del codigo que esta en el mismo bloque.
const anotheFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello World');
}

console.log('Before');
anotheFn();
console.log('After');