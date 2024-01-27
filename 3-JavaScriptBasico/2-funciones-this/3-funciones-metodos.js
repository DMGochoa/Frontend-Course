// Capacidades que tienen las funcioens al igual que otros objetos

// 1. Pasar funciones como argumentos "callback"
function a (){}
function b (callback) {
    callback()
}
b(a)

// 2. Retornar funciones
function a () {
    function b () {
        return 1
    }
    return b
}

// 3. Asignar funciones a variables
const h = function () {} // Esta funcion no tiene nombre, se le conoce como funcion anonima. Tambien se conoce como expresion de funcion y la otra como declaracion de funcion

// 4. Tiene propiedades y metodos
function a () {}
const obj = {}
a.call(obj) // Esto es un metodo

// 5. Pueden ser anidadas "nested functions"
function a () {
    function b () {
        function c () {
            
        }
        c()
    }
    b()
}

// Se puede guardar funciones en objetos
const rocket = {
    name: 'Falcon 9',
    launch () {
        console.log('Lift off!')
    },
    launchMessage: function launch2() {
        console.log('Lift off2!')
    }
}
rocket.launch()
rocket.launchMessage() // Se puede llamar a la funcion con el nombre de la funcion o con el nombre de la propiedad. Esto se conoce como metodo, cuando guardamosuna funcion en un objeto.