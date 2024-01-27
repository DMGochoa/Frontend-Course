let mensaje

const edad = 26;

if (edad >= 18) {
    mensaje = 'Eres mayor de edad';
} else {
    mensaje = 'Eres menor de edad';
}

console.log(mensaje);

// Ternary operator
// condition ? true : false
mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
// Esto lo que hace es compactar cuando las condiciones son muy sencillas
console.log(mensaje);