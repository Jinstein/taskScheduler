const express = require('express');
const path = require('path');
const route = require('./route.js');
const client = require('./db.js');
const socketIo = require('socket.io');
const socketEvents = require('./socket.js');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, 'html')));
app.use('/', route);
app.use((req,res) => {
    req.cache = client;
    next();
})

app.use(express.json);



const port = process.env.PORT || 8080;

const server = app.listen(port, () => console.log(`Listening on ${port}...`));
const io = socketIo(server);
socketEvents(io);
