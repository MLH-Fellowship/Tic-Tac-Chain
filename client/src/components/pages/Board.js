import React, { Component } from 'react';
import io from 'socket.io-client'
import qs from 'qs'
import Square from '../functional/Square';

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      game: new Array(9).fill(null),
      piece: 'X',
      turn: true,
      end: false,
      room: '',
      statusMessage: '',
      currentPlayerScore: 0,
      opponentPlayer: [],
      //State to check when a new user join
      waiting: false,
      joinError: false
    }
    this.socketID = null
  }

  componentDidMount() {
    //Getting the room and the username information from the url
    //Then emit to back end to process
    this.socket = io(ENDPOINT)
    const {room, name} = qs.parse(window.location.search, {
      ignoreQueryPrefix: true
     })
    this.setState({room})
    this.socket.emit('newRoomJoin', {room, name})

    //New user join, logic decide on backend whether to display 
    //the actual game or the wait screen or redirect back to the main page
    this.socket.on('waiting', ()=> this.setState({waiting:true, currentPlayerScore:0, opponentPlayer:[]}))
    this.socket.on('starting', ({gameState, players, turn})=> {
      this.setState({waiting:false})
      this.gameStart(gameState, players, turn)
    })
    this.socket.on('joinError', () => this.setState({joinError: true}))

    //Listening to the assignment of piece store the piece along with the in state
    //socket id in local socketID variable
    this.socket.on('pieceAssignment', ({piece, id}) => {
      this.setState({piece: piece})
      this.socketID = id 
    })
    
    //Game play logic events
    this.socket.on('update', ({gameState, turn}) => this.handleUpdate(gameState, turn))
    this.socket.on('winner', ({gameState,id}) => this.handleWin(id, gameState))
    this.socket.on('draw', ({gameState}) => this.handleDraw(gameState))

    this.socket.on('restart', ({gameState, turn}) => this.handleRestart(gameState, turn))
  }

  
  renderSquare=(i)=>{
        return(
          <Square key={i} 
          
          // value={this.state.game[i]} 
          //                         player={this.state.piece} 
          //                         end={this.state.end} 
          //                         id={i} 
          //                         onClick={this.handleClick}
          //                         turn={this.state.turn}
                                  
        /> 
        )
      }
      
      const squareArray = []
      for (let i=0; i<9; i++){
        const newSquare = renderSquare(i)
        squareArray.push(newSquare)
      }
      
      return(
        <>
          <div className="board">
            {squareArray}
          </div>  
        </>
      )
}
export default Board;