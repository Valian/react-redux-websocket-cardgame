import Server from 'socket.io';

const port = 8090

export default function startServer(app, store) {
    const io = new Server(app).listen(port);
    store.subscribe(
        () => io.emit('state', store.getState())
    );

    io.on('connection', (socket) => {
        socket.emit('state', store.getState());
        socket.on('action', store.dispatch.bind(store));
    });

    console.info("==> 🌎  Listening on port %s.", port)
}
