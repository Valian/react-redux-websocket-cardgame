import {should} from 'chai'
import * as logic from '../gameLogic'

should()

describe('Game logic', () => {
    describe('addPlayer function', () => {

        const startingState = {
            phase: 'waitingForPlayers',
            sockets: {
                id1: {player: null, error: null},
                id2: {player: null, error: null},
                id3: {player: null, error: null},
                id4: {player: null, error: null},
                id5: {player: null, error: null},
                id6: {player: null, error: null}
            }
        };

        it('we should be able to add first player', () => {
            var stateWithPlayer = logic.addPlayer(startingState, 'id1', 'marian')
            var newState = Object.assign({}, startingState, {
                players: {
                    marian: {name: 'marian'}
                }
            })
            stateWithPlayer.should.be.deep.equal(newState)
        })

        it('we should be able to add second player', () => {
            var stateWithPlayer = logic.addPlayer(startingState, 'id1', 'marian')
            var stateWithTwoPlayers = logic.addPlayer(stateWithPlayer, 'id2','marek')
            var newState = Object.assign({}, startingState, {
                players: {
                    marian: {name: 'marian'},
                    marek: {name: 'marek'}
                }
            })
            stateWithTwoPlayers.should.be.deep.equal(newState)
            console.log(startingState)
        })

        it("we shouldn't be able to add sixth player", () => {
            var stateWithFivePlayers = Object.assign({}, startingState, {
                players: ['a', 'b', 'c', 'd', 'e'].map((name) => [name, {}])
            })
            var stateWithStillFivePlayers = logic.addPlayer(stateWithFivePlayers, 'id6', 'f');
            stateWithStillFivePlayers.should.be.deep.equal(stateWithFivePlayers)
        })

        it("should ignore player if not string", () => {
            var invalidValues = [45, null, undefined, Object()]
            var modifiedState = invalidValues.reduce((state, value) => logic.addPlayer(state, value), startingState);
            modifiedState.should.be.deep.equal(startingState);
        })

        it("should ignore if not in waiting for player state", () => {
            var state = {phase: 'other'}

        })

    })
})