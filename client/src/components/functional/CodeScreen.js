import React from 'react';

const CodeScreenDisplay = (gameType, gameCode) =>{
    if (gameType=="bet") {
        return (
            <div className={`code-${gameType}`}>
                <h2>Bet: 0.001 Ether</h2>
                <h3>Waiting for the other player to join...</h3>
                <h3>Game Code</h3>
                <div className="code-black">{gameCode}</div>
                <div className="btn btn-copy-black" onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>Copy to Clipboard!</div>
            </div>
            )
    } else if (gameType=="free") {
        return (
            <div className={`code-${gameType}`}>
                <h2>Play for free!</h2>
                <h3>Waiting for the other player to join...</h3>
                <h3>Game Code</h3>
                <div className="code-white">{gameCode}</div>
                <div className="btn btn-copy-white" onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>Copy to Clipboard!</div>
            </div>
        )
    }
    
}

export default CodeScreenDisplay;