import Immutable from 'seamless-immutable'
import {should} from 'chai'
import * as logic from '../gameLogic'

should()

var baseState = Immutable({
    phase: 'waitingForPlayers',
    sockets: {},
    players: {}
})

describe('Game logic', () => {
            
})