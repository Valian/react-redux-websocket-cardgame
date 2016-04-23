import Immutable from 'seamless-immutable'

const MAX_PLAYERS = 5

function getAndUpdateId(state) {
    state.idCounter = (state.idCounter || 0) + 1
    return state
}

export function addPlayer(state, socketId, playerName) {
    if((typeof(playerName) != "string") || (state.players.length >= MAX_PLAYERS) || (state.phase != 'waitingForPlayers')) {
        return state
    }
    return state
        .update('players', players => (players || Immutable({})).set(playerName, {name: playerName}))
        .setIn(['sockets', socketId, 'player'] , playerName)
}

/*
var state = {
    board: [
        [4, 8, 13],
        [5, 6, 12, 23],
        [1],
        [54]
    ],
    sockets: {
        id1: {
            error: null,
            player: 1
        },
        id2: {
            error: null,
            player: 2
        },
        id3: {
            error: 'Game already started',
            player: null
        }
    },
    players: {
         1: {
             name: 'First',
             cardsCount: 5,
             penalty: 23,
             cardsOnHand: [2, 5, 6, 6, 7],
             selectedCard: 7
         },
         2: {
             name: 'Second',
             cardsCount: 5,
             penalty: 23,
             cardsOnHand: [45, 65, 65, 34, 23],
             selectedCard: 7
         }
    },
    phase: 'selecting/selected/waitingForPlayers etc...',
    idCounter: 0
}
*/
