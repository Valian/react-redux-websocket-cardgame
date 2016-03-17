import { setState } from './actions/index'

export default function initSocketHandlers(socket, store) {
    socket.on('state', state =>
        store.dispatch(setState(state))
    );
}