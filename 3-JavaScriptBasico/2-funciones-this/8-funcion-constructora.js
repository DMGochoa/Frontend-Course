function Rocket (name) {
    this.name = name
    this.launch = function () {
        console.log(`Launching ${this.name}`)
    }
}

const falcon9 = new Rocket('Falcon 9')
const falconHeavy = new Rocket('Falcon Heavy')
console.log(falcon9.name) // Falcon 9
console.log(falconHeavy.name) // Falcon Heavy
falcon9.launch() // Launching Falcon 9
falconHeavy.launch() // Launching Falcon Heavy