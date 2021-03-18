const { makeRoom, joinRoom, kick, getRoomPlayersNum } = require("./src/rooms");
const { randPiece } = require("./src/utilities/randRoom");
const Player = require("./src/player/player.class");
const Board = require('./src/board/board.class')
const cors = require("cors");
const socketio = require("socket.io");
const PORT = process.env.PORT || 4000;

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(cors());
var rooms = new Map();
function newGame(room){
  currentRoom = rooms.get(room)
  const board = new Board
  currentRoom.board = board
}
// Just a quick GET '/' check
app.get("/", (req, res) => res.send(`Live socket running at ${PORT}`));

/**
 * Room Map
 * {key: value}
 * { room: {roomId:room, players:[], board: null, bet:true/false} }
 */

//Assign x o values to each of the player class
function pieceAssignment(room){
  const firstPiece = randPiece()
  const lastPiece = firstPiece === 'X'? 'O':'X'

  currentRoom = rooms.get(room)
  currentRoom.players[0].piece = firstPiece
  currentRoom.players[1].piece = lastPiece
}



io.on("connection", (socket) => {
  //Free Game Client Submit Event
  console.log("Socket connected.");

   //new Free Game Client Submit Event
  socket.on("newFreeGame", (player) => {
    console.log("Free");
    const room_created = makeRoom(rooms, 0);
    console.log(room_created);
    if (room_created) socket.emit("newFreeGameCreated", room_created);
  });

  //Bet Game Client Submit Event
  socket.on("newBetGame", () => {
    console.log("Bet");
    const room_created = makeRoom(rooms, 1);
    console.log(room_created);
    if (room_created) socket.emit("newFreeGameCreated", room_created);
  });

  // Join Game
  //On the client submit event (on start page) to join a room
socket.on("joining", ({ room }) => {
    if (rooms.has(room)) {
      socket.emit("joinConfirmed");
    } else {
      socket.emit("errorMessage", "No room with that id found");
    }
  });

  // On Room Join
  socket.on("newRoomJoin", ({ room, name }) => {
    if (room === "" || name === "") {
      io.to(socket.id).emit("joinError");
    }
    //Put the new player into the room
    socket.join(room);
    const id = socket.id;
    const newPlayer = new Player(name, room, id); 
    joinRoom(newPlayer, room, rooms);
    //Get the number of player in the room
    const peopleInRoom = getRoomPlayersNum(room,rooms);

    //Need another player so emit the waiting event
    //to display the wait screen on the front end
    if (peopleInRoom === 1) {
      io.to(room).emit("waiting");
    }

    if (peopleInRoom===2){
      //Assign the piece to each player in the backend data structure and then
      //emit it to each of the player so they can store it in their state
      pieceAssignment(room)
      currentPlayers = rooms.get(room).players
      for (const player of currentPlayers){
          io.to(player.id).emit('pieceAssignment', {piece: player.piece, id: player.id})
      }
      newGame(room)

      //When starting, the game state, turn and the list of both players in
      //the room are required in the front end to render the correct information
      const currentRoom = rooms.get(room)
      const gameState = currentRoom.board.game
      const turn = currentRoom.board.turn
      const players = currentRoom.players.map((player) => [player.id, player.name])
      io.to(room).emit('starting', {gameState,players,turn})
  } 
  if (peopleInRoom===3){
    socket.leave(room)
    kick(room,rooms)
    io.to(socket.id).emit('joinError')
  }


  });


  socket.on('move', ({room, piece, index}) => {
    currentBoard = rooms.get(room).board
    currentBoard.move(index, piece)

    if (currentBoard.checkWinner(piece)){
        io.to(room).emit('winner', {gameState:currentBoard.game, id:socket.id})
    }else if(currentBoard.checkDraw()){
        io.to(room).emit('draw', {gameState:currentBoard.game})
    }else{
        currentBoard.switchTurn()
        io.to(room).emit('update', {gameState:currentBoard.game, turn:currentBoard.turn})
    }
})

//Listener event for a new game
socket.on('playAgainRequest', (room) => {
    currentRoom = rooms.get(room)
    currentRoom.board.reset()
    //Reassign new piece so a player can't always go first
    pieceAssignment(room)
    currentPlayers = currentRoom.players
    for (const player of currentPlayers){
        io.to(player.id).emit('pieceAssignment', {piece: player.piece, id: player.id})
    }

    io.to(room).emit('restart', {gameState:currentRoom.board.game, turn:currentRoom.board.turn})
})

//On disconnect event
socket.on('disconnecting', ()=> {
    //Get all the rooms that the socket is currently subscribed to
    const currentRooms = Object.keys(socket.rooms)
    //In this game an object can only have 2 rooms max so we check for that
    if (currentRooms.length === 2){
        //The game room is always the second element of the list 
        const room = currentRooms[1]
        const num = getRoomPlayersNum(room)
        //If one then no one is left so we remove the room from the mapping
        if (num === 1){
            rooms.delete(room)
        }
        //If 2 then there is one person left so we remove the socket leaving from the player list and
        //emit a waiting event to the other person
        if (num === 2){
            currentRoom = rooms.get(room)
            currentRoom.players = currentRoom.players.filter((player) => player.id !== socket.id)
            io.to(room).emit('waiting')
        }


    }
})    


});




server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
