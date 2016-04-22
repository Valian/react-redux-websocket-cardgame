class GameStateCreator {
    constructor(state) {
        this._currentId = 1
        this._internal = {
            phase: state,
            friends: {},
            board: [],
            sockets: {}
        }
    }

    sockets(amount) {
        for(var i = 0; i < amount ; i++) {
            this._internal.sockets[this._currentId++] = {
                player: null,
                error: null
            }
        }
        return this;
    }

    players(amount) {
        for(var i = 0; i < amount ; i++) {
            this._internal.sockets[this._currentId++] = {
                player: {},
                error: null
            }
        }
        return this;
    }
}
