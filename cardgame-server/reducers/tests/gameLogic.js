import {should} from 'chai'
import Immutable, {Map, List} from 'immutable'
import * as logic from '../gameLogic'

should()

const state = Immutable.fromJS({
    shared: {
        board: [
            [4, 8, 13],
            [5, 6, 12, 23],
            [1],
            [54]
        ],
        players: [
            {
                name: 'First',
                cardsCount: 5,
                penalty: 23
            },
            {
                name: 'Second',
                cardsCount: 5,
                penalty: 23
            }
        ],
        state: {
            playersReady: [0],
            phase: 'selecting/selected/...'
        }
    },
    playersPrivate: [
        {
            cardsOnHand: [2, 5, 6, 6, 7]
        },
        {
            cardsOnHand: [45, 65, 65, 34, 23]
        }
    ]
})


describe('Game logic', () => {
    describe('when in state waitingForPlayers', () => {

        const startingState = Map({
            state: 'waitingForPlayers'
        });

        it('we should be able to add first player', () => {
            var stateWithPlayer = logic.addPlayer(startingState, 'marian')
            stateWithPlayer.should.be.equal(Map({
                state: 'waitingForPlayers',
                players: List.of(Map({
                    name: 'marian'
                }))
            }))
        })

        it('we should be able to add second player', () => {
            var stateWithPlayer = logic.addPlayer(startingState, 'marian')
            var stateWithTwoPlayers = logic.addPlayer(stateWithPlayer, 'marek')
            stateWithTwoPlayers.should.be.equal(Map({
                state: 'waitingForPlayers',
                players: List.of(Map({
                    name: 'marian'
                }), Map({
                    name: 'marek'
                }))
            }))
        })

        it("we shouldn't be able to add sixth player", () => {
            var players = ['a', 'b', 'c', 'd', 'e']
            var stateWithFivePlayers = Map({
                state: 'waitingForPlayers',
                players: List(players.map((name) => Map({name: name})))
            })
            var stateWithStillFivePlayers = logic.addPlayer(stateWithFivePlayers, 'f');
            stateWithStillFivePlayers.should.be.equal(stateWithFivePlayers)
        })
    })
})