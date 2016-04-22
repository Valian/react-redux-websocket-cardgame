import { Map, List } from 'immutable'

export function addPlayer(state, socketId, playerName) {
    if(!state.get('sockets', {}).has(socketId)) {
        return state
    }
    if(typeof(playerName) != "string") {
        return state
    }
    if(state.get('players', {}).size >= 5) {
        return state
    }
    return state.update('players', Map(), players => players.merge(Map([[
        playerName, Map()
    ]])))
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
            player: {
                name: 'First',
                cardsCount: 5,
                penalty: 23,
                cardsOnHand: [2, 5, 6, 6, 7],
                selectedCard: 7
            }
        },
        id2: {
            error: null,
            player: {
                name: 'Second',
                cardsCount: 5,
                penalty: 23,
                cardsOnHand: [45, 65, 65, 34, 23],
                selectedCard: 7
            }
        },
        id3: {
            error: 'Game already started',
            player: null
        }
    },
    phase: 'selecting/selected/waitingForPlayers etc...'
}
*/
