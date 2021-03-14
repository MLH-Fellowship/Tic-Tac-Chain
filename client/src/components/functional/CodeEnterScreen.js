import React from 'react';
import EnterCode from './EnterCode';

const CodeScreenEnter = ({color, gameType, gameCode, onTyping, onChoice}) =>{
    if (gameType=="bet") {
        return (
            <div className={`code-${gameType}`}>
                <h2>Bet: 0.001 Ether</h2>
                <h3>Enter Game Code</h3>
                <EnterCode gameCode={gameCode} onTyping={onTyping} onChoice={onChoice}/>
            </div>
            )
    } else if (gameType=="free") {
        return (
            <div className={`code-${gameType}`}>
                <h2>Play for free!</h2>
                <h3>Enter Game Code</h3>
                <EnterCode color={color} gameCode={gameCode} onTyping={onTyping} onChoice={onChoice}/>
            </div>
        )
    }  
}

export default CodeScreenEnter;