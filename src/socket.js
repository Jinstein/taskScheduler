const io = require('socket.io');
module.exports = (io) => {
    io.on('connecton', (socket) =>{
        console.log('Socket initiated!');
        socket.on('newScoreToServer', (data) =>{
            console.log('Socket: newScore');
            io.emit('newScoreToClient', data);
        });
    });
};