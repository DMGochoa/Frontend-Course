/*
Raffle Winner (Encontrar el ganador de una rifa)

En este programa, se desea verificar si una persona es un ganador dentro de una lista de ganadores. Simplemente ingrese el numero del ticket y el programa debe de verificar la informacion.
*/

const winnerTickets = [123, 456, 789, 741, 852, 963];

function isWinner(ticket, winnerTickets) {
    winnerTickets.f
    return winnerTickets.includes(ticket) ? 'Ganaste' : 'Perdiste';
}

console.log(isWinner(123, winnerTickets)); // 'Ganaste'

const winningParticipants = [
    {id: 1, name: 'John', ticketNumber: 123},
    {id: 2, name: 'Sara', ticketNumber: 456},
    {id: 83, name: 'Paul', ticketNumber: 789},
    {id: 24, name: 'Kate', ticketNumber: 741},
    {id: 35, name: 'Steve', ticketNumber: 852},
    {id: 6, name: 'Mike', ticketNumber: 963},
];

const NO_WINNER_MSG = 'No winner with that ticket';

function isWinnerByName(name, winningParticipants) {
    const winner = winningParticipants.findIndex((participant) => participant.name === name);
    return winner != -1 ? winner : NO_WINNER_MSG;
}

console.log(isWinnerByName('John', winningParticipants)); // 'You win'

function isWinnerByTicket (noTicket, winningParticipants) {
    const winner = winningParticipants.findIndex((participant) => participant.ticketNumber === noTicket);
    return winner != -1 ? winner : NO_WINNER_MSG;
}

console.log(isWinnerByTicket(133, winningParticipants)); // 'No winner with that ticket'

function displayWinnerInformation (winner, winningParticipants) {
    if (winner !== undefined && winner !== null && winner !== NO_WINNER_MSG) {
        result = winningParticipants[winner];
    } else {
        result = winner;
    }
    return result;
}

const theWinner = isWinnerByName('John', winningParticipants);
console.log(displayWinnerInformation(theWinner, winningParticipants)); // {id: 1, name: 'John', ticketNumber: 123}