let io;

module.exports = {
    init: httpServer => {
        require('socket.io')(httpServer)
    }
}