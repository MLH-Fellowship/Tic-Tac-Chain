const { randRoom } = require("../../utilities/randRoom");
const Player = require('./../../player/player.class')
// Promise function to make sure, every time a new room is generated.
function makeRoom(rooms, bet, player) {
  var newRoom = randRoom();
  let type = "";
  if (bet === 0) type = false;
  else type = true;
  console.log(bet);
  while (rooms.has(newRoom)) {
    newRoom = randRoom();
  }
  rooms.set(newRoom, { roomId: newRoom, players: [], board: null, bet: type });
  return newRoom;
}

module.exports = makeRoom;
