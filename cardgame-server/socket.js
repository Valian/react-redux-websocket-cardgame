import Server from 'socket.io';

module.exports = function startServer(app, store, port) {
    const io = new Server(app);
    store.subscribe(
        () => io.emit('state', store.getState())
    );

    io.on('connection', (socket) => {
        socket.emit('state', store.getState());
        socket.on('action', store.dispatch.bind(store));
    });

    console.info("==> 🌎  Socket.io listening on port %s.", port)
}
