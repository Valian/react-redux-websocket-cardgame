export default socket => store => next => action => {
    if (action.meta && (action.meta.remote || action.meta.remoteOnly)) {
        socket.emit('action', action);
    }
    if (!action.meta || !action.meta.remoteOnly) {
        return next(action)
    }
}