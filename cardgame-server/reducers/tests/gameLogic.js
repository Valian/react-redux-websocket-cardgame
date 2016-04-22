import {should} from 'chai'
import Immutable, {Map, List} from 'immutable'
import * as logic from '../gameLogic'

should()

describe('Game logic', () => {
    describe('addPlayer function', () => {

        const startingState = Immutable.fromJS({
            phase: 'waitingForPlayers',
            sockets: {
                id1: {player: null, error: null},
                id2: {player: null, error: null},
                id3: {player: null, error: null},
                id4: {player: null, error: null},
                id5: {player: null, error: null},
                id6: {player: null, error: null}
            }
        });

        it('we should be able to add first player', () => {
            var stateWithPlayer = logic.addPlayer(startingState, 'id1', 'marian')
            stateWithPlayer.should.be.equal(startingState.set('players', Map({marian: Map()})))
        })

        it('we should be able to add second player', () => {
            var stateWithPlayer = logic.addPlayer(startingState, 'id1', 'marian')
            var stateWithTwoPlayers = logic.addPlayer(stateWithPlayer, 'id2','marek')
            stateWithTwoPlayers.should.be.equal(startingState.set('players', Immutable.fromJS({
                marian: {},
                marek: {}
            })))
        })

        it("we shouldn't be able to add sixth player", () => {
            var stateWithFivePlayers = startingState.set('players',
                Map(['a', 'b', 'c', 'd', 'e'].map((name) => [name, {}]))
            )
            var stateWithStillFivePlayers = logic.addPlayer(stateWithFivePlayers, 'id6', 'f');
            stateWithStillFivePlayers.should.be.equal(stateWithFivePlayers)
        })

        it("should ignore player if not string", () => {
            var invalidValues = [45, null, undefined, Object()]
            var modifiedState = invalidValues.reduce((state, value) => logic.addPlayer(state, value), startingState);
            modifiedState.should.be.equal(startingState);
        })

        it("should ignore if not in waiting for player state", () => {
            var state = Map({phase: 'other'})

        })

    })
})