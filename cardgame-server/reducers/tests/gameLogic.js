import Immutable from 'seamless-immutable'
import {should} from 'chai'
import * as logic from '../gameLogic'

should()

describe('Game logic', () => {
    describe('addPlayer function', () => {

        const startingState = Immutable({
            phase: 'waitingForPlayers',
            sockets: {
                id1: {player: null, error: null},
                id2: {player: null, error: null},
                id3: {player: null, error: null},
                id4: {player: null, error: null},
                id5: {player: null, error: null},
                id6: {player: null, error: null}
            },
            players: {}
        });

        it('we should be able to add first player', () => {
            var stateWithPlayer = logic.addPlayer(startingState, 'id1', 'marian')
            stateWithPlayer.should.be.deep.equal(startingState
                .set('players', { marian: {name: 'marian'}})
                .setIn(['sockets', 'id1', 'player'], 'marian'))
        })

        it('we should be able to add second player', () => {
            var stateWithPlayer = logic.addPlayer(startingState, 'id1', 'marian')
            var stateWithTwoPlayers = logic.addPlayer(stateWithPlayer, 'id2','marek')
            stateWithTwoPlayers.should.be.deep.equal(startingState
                .set('players', {marian: {name: 'marian'}, marek: {name: 'marek'}})
                .setIn(['sockets', 'id1', 'player'], 'marian')
                .setIn(['sockets', 'id2', 'player'], 'marek'))
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
            var otherStatePhase = startingState.set('phase', 'other')
            var notModifiedState = logic.addPlayer(otherStatePhase, 'id1', 'marian')
            notModifiedState.should.be.deep.equal(otherStatePhase)
        })

    })
})