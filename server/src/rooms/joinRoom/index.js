const joinRoom = (player,room, rooms)=>{
    currentRoom  = rooms.get(room)
    updatedPlayerList = currentRoom.players.push(player)
    updatedRoom = {...currentRoom, players:updatedPlayerList}
}