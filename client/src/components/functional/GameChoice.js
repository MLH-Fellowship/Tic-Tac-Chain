import React, { Component } from 'react';
import ChoiceButton from './ChoiceButton';

const GameChoice = ({heading, gameChoice, tagLine, onChoice}) =>{
    return (
        <div className='choice-container'>
            <h1 className="choice-head">{heading}</h1>
            <h3 className="choice-sub">{tagLine}</h3>
            <ChoiceButton type="choice" choice="start-game" label="Start Game" onChoice={onChoice.bind(this, gameChoice)}/>
            <ChoiceButton type="choice" choice="join-game" label="Join Game" onChoice={onChoice.bind(this, gameChoice)}/>
        </div>
    )
}

export default GameChoice;