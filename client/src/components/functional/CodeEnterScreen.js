import React from 'react';

const CodeScreenEnter = (gameType, gameCode) =>{
    if (gameType=="bet") {
        return (
            <div className={`code-${gameType}`}>
                <h2>Bet: 0.001 Ether</h2>
                <h3>Enter Game Code</h3>
                <div className="code-black">{gameCode}</div>
                
            </div>
            )
    } else if (gameType=="free") {
        return (
            <div className={`code-${gameType}`}>
                <h2>Play for free!</h2>
                <h3>Enter Game Code</h3>
                <div className="code-white">{gameCode}</div>    
            </div>
        )
    }  
}

export default CodeScreenEnter;