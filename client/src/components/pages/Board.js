import React, { Component } from 'react';

import Square from '../functional/Square';

const Board = () =>{
    const renderSquare=(i)=>{
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