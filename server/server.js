import {makeRoom,joinRoom, kick, getRoomPlayersNum } from './src/rooms'

const cors = require("cors");
const express = require("express");
const http = require("http");
const socketio = require("socket.io");


const app = expres();
const server = http.createServer(app);
const io = socketio(server)


app.use(cors())
const rooms = new Map();
/**
 * Room Map
 * {key: value}
 * { room: {roomId:room, players:[], board: null, bet:true/false} }
 */
 socket.on('newGame', () => {
    new Promise(makeRoom(rooms)).then((room) => {
        socket.emit('newGameCreated', room)
    })
})