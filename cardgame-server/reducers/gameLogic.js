import { Map, List } from 'immutable'

export function addPlayer(state, playerName) {
    if(state.get('players', []).size >= 5) {
        return state
    }
    return state.update('players', List(), players => players.push(Map({
        name: playerName
    })))
}

/*
var state = {
    board: [
        [4, 8, 13],
        [5, 6, 12, 23],
        [1],
        [54]
    ],
    players: {
        id1: {
            name: 'First',
            cardsCount: 5,
            penalty: 23,
            cardsOnHand: [2, 5, 6, 6, 7],
            selectedCard: 7
        },
        id2: {
            name: 'Second',
            cardsCount: 5,
            penalty: 23,
            cardsOnHand: [45, 65, 65, 34, 23],
            selectedCard: 7
        }
    },
    phase: 'selecting/selected/waitingForPlayers etc...'
}
*/
