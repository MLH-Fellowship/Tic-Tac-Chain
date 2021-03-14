const  { makeRoom, joinRoom, kick, getRoomPlayersNum } = require('./src/rooms')

const cors = require("cors");
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const PORT = process.env.PORT || 4000


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
const rooms = new Map();
/**
 * Room Map
 * {key: value}
 * { room: {roomId:room, players:[], board: null, bet:true/false} }
 */
io.on("connection", (socket) => {
    //On the client submit event (on start page) to create a new room
    socket.on("newGame", () => {
    new Promise(makeRoom(rooms)).then((room) => {
      socket.emit("newGameCreated", room);
    });
  });
});
server.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))