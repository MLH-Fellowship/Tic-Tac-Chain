import React, { Component } from 'react';
import ChoiceButton from './ChoiceButton';

const GameChoice extends Component = ({heading, tagLine, onChoice}) =>{
    return (
        <div className='choice-container'>
            <h1 className="choice-head">{heading}</h1>
            <h3 className="choice-sub">{tagLine}</h3>
            <ChoiceButton type="choice" choice="start-game" label="Start Game" onChoice={onChoice}/>
            <ChoiceButton type="choice" choice="join-game" label="Join Game" onChoice={onChoice}/>
        </div>
    )
}

export default GameChoice;