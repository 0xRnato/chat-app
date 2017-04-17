module.exports = (io, users) => {
    io.on('connection', (socket) => {
        const username = socket.username;
        const sessionID = socket.id;
        users.push({sessionID: sessionID, username: username});
        socket.join('main room');

        console.log(username + ' is connected');
        socket.broadcast.emit('wellcome', username);

        socket.on('chat message', (msg) => {
            io.emit('chat message', msg, username);
        });

        socket.on('disconnect', () => {
            console.log(username + '  is disconnected');
            socket.broadcast.emit('bye', username);
        });
    });
};
