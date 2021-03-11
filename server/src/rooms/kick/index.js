//Remove the latest player joined from a room's player list 
function kick(room,rooms){
    currentRoom = rooms.get(room)
    currentRoom.players.pop()
}
module.exports={kick}