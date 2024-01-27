let playlist = ['Canción 1', 'Canción 2', 'Canción 3', 'Canción 4', 'Canción 5']

function newSong() {
    let agregarCancion = prompt('Agrega una nueva canción')
    playlist.unshift(agregarCancion)
}

newSong()

alert(`Las canciones dentro de tu lista de reproducción son: ${playlist.join(", ")}`)

function eliminar() {
    if (playlist.length === 0) {
        alert('Lo siento, no tengo canciones en la lista')
    } else {
        let cancionEliminada = playlist.shift()
        alert(`La canción que se acaba de eliminar es: ${cancionEliminada}`)
    }
}

eliminar()

console.log(playlist)