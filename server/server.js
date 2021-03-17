const { makeRoom, joinRoom, kick, getRoomPlayersNum } = require("./src/rooms");

const cors = require("cors");
const socketio = require("socket.io");
const PORT = process.env.PORT || 4000;

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors())
var rooms = new Map();

// Just a quick GET '/' check
app.get('/',(req,res)=>res.send(`Live socket running at ${PORT}`))

/**
 * Room Map
 * {key: value}
 * { room: {roomId:room, players:[], board: null, bet:true/false} }
 */

io.on('connection', (socket) => {
  //Free Game Client Submit Event
  console.log("Socket connected.");
  socket.on("newFreeGame", (player) => {
      console.log("Free")
      const room_created = makeRoom(rooms, 0)
      console.log(room_created)
      if(room_created)
        socket.emit("newFreeGameCreated",room_created );

  });


  //Bet Game Client Submit Event
  socket.on("newBetGame", () => {
    console.log("Bet")
    const room_created = makeRoom(rooms, 1)
    console.log(room_created)
    if(room_created)
      socket.emit("newFreeGameCreated",room_created );
  });


// Join Game
    //On the client submit event (on start page) to join a room
    socket.on('joining', ({room}) => {
      if (rooms.has(room)){
          socket.emit('joinConfirmed')
      }else{
          socket.emit('errorMessage', 'No room with that id found')
      }
  })
});

server.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))
