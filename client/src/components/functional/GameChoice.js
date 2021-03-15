import React, { Component } from 'react';
import ChoiceButton from './ChoiceButtons';

const GameChoice = ({gameType, heading, tagLine, onChoice}) =>{
    return (
        <div className={`choice-container-${gameType}`}>
            <h1 className="choice-head">{heading}</h1>
            <h3 className="choice-sub">{tagLine}</h3>
            <ChoiceButton type="choice" choice={`start-game-${gameType}`} label="Start Game" onChoice={onChoice.bind(this, choice)}/>
            <ChoiceButton type="choice" choice={`join-game-${gameType}`} label="Join Game" onChoice={onChoice.bind(this, choice)}/>
        </div>
    )
}

export default GameChoice;