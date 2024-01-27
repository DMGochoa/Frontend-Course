/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y 
contraseña son correctos.
3. Si el usuario y la contraseña son correctos, el sistema
debe mostrar un mensaje de bienvenida y mostrar el timeline
del usuario.
4. Si el usuario o la contraseña son incorrectos, el sistema
debe mostrar un mensaje de error y no mostrar ningun timeline.
*/

const usersDatabase = [
    {
        username: 'Diego',
        password: '123',
    },
    {
        username: 'Juan',
        password: '123'
    },
    {
        username: 'Pedro',
        password: '123'
    }
]

const usersTimeline = [
    {
        username: "Pablo",
        timeline: "Este es el timeline de Pablo"
    },
    {
        username: "Juan",
        timeline: "Este es el timeline de Juan"
    },
    {
        username: "Pedro",
        timeline: "Este es el timeline de Pedro"
    },
    {
        username: "Diego",
        timeline: "Este es el timeline de Diego"
    }
]

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.isValidUser = this.validateUser();
    }

    validateUser() {
        for(let i = 0; i < usersDatabase.length; i++) {
            if(this.username === usersDatabase[i].username && this.password === usersDatabase[i].password) {
                return true;
            }
        }
        return false;
    }

    showTimeline() {
        if(this.isValidUser) {
            console.log(`Bienvenido ${this.username}, este es tu timeline:`);
            for(let i = 0; i < usersTimeline.length; i++) {
                console.log(
                    `    ${usersTimeline[i].username}: ${usersTimeline[i].timeline}`
                );
            }
        } else {
            console.log('Usuario o contraseña incorrectos');
        }
    }

}

// Ejemplo de uso
const diego = new User('Diego', '123');
diego.showTimeline();
console.log('----------------------------------');
const juan = new User('Juan', '124');
juan.showTimeline();

