/*
Ejercicio: Ganador de un torneo de algoritmia

Un torneo de algoritmia se esta llevando a cabo en tu universidad. En este torneo
los participantes compiten en parejas. La competicion sigue un formati en el que
cada equipo compite contra todos los demas.

Solo dos equipos compiten al mismo tiempo y en cada competicion uno es designado
como el equipo local y el otro como el equipo visitante. Hay siempre un claro
ganador y un claro perdedor. El ganador recibe 3 puntos, el perdedor 0 y no hay
empates. El equipo que tenga mas puntos al final del torneo es el ganador.

Tu tarea es escribir una funcion que determine el ganador del torneo. Dado como
input dos arrays con los competidores y los resultados. El array de competidores
contiene la pareja de equipos representando como [homeTeam, awayTeam] donde cada
equipo es un string con almenos 30 caracteres. El array de resultados contiene
el ganador de cadacompeticion correspondiente.

Especificamente, results[i] denota el ganador de conpetitions[i], dodne a 1 indica
que gano el equipo local, y un 0 indica que gano el equipo visitante. Se garantiza
que exactamente un equipo va ganar el torneo y que cada equipo va competir encontra
de todos los demas solo una vez.

El torneo almenos tendra 2 equipos.

*/

const competitors = [
    ['Vacas Vaqueras', 'Los Increibles'],
    ['Los Increibles', 'Ratatouille'],
    ['Ratatouille', 'Vacas Vaqueras'],
    ['Los Increibles', 'Vacas Vaqueras'],
    ['Ratatouille', 'Los Increibles'],
    ['Vacas Vaqueras', 'Ratatouille']
]

const results = [0, 0, 1, 1, 0, 1]

function addPoints(team, points) {
    if (points[team]) {
        points[team] += 3
    } else {
        points[team] = 3
    }
    return points
}

function calculatePoints (competitors, results) {
    let points = {}
    for (let i = 0; i < competitors.length; i++) {
        const [homeTeam, awayTeam] = competitors[i]
        const result = results[i]
        if (result === 1) {
            points = addPoints(homeTeam, points)
        } else {
            points = addPoints(awayTeam, points)
        }
    }
    return points
}

function findWinner (points) {
    let theWinner = ''
    let maxPoints = 0
    for (const team in points) {
        if (points[team] > maxPoints) {
            maxPoints = points[team]
            theWinner = team
        }
    }
    return theWinner
}
const points = calculatePoints(competitors, results)
const winner = findWinner(points)
console.log(points)
console.log(winner)