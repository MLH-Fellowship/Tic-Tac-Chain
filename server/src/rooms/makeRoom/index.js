const { randRoom } = require("../../utilities/randRoom");

// Promise function to make sure, every time a new room is generated.
const makeRoom = (rooms, resolve) => {
  var newRoom = randRoom();
  while (rooms.has(newRoom)) {
    newRoom = randRoom();
  }
  rooms.set(newRoom, {roomId:newRoom, players:[], board:null})
  resolve(newRoom)
};

module.exports = {makeRoom}
