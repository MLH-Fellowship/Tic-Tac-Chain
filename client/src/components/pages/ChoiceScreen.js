import React from 'react';
import ChoiceButton from './../functional/ChoiceButtons'

const Choice = ({onChoice}) => {
    return (
        <>
        <div className='choice-container'>
    <h1>FREE GAME</h1>
            <ChoiceButton onChoice={onChoice} type='primary' choice='newFree' label='Start New'/> 
            <ChoiceButton onChoice={onChoice} type='secondary' choice='joinFree' label='Join Game'/> 
        </div>
        <br/><br/>
        <div className='choice-container'>
      <h1>Bet 0.001 ETH Game</h1>
            <ChoiceButton onChoice={onChoice} type='primary' choice='newBet' label='Start New'/> 
            <ChoiceButton onChoice={onChoice} type='secondary' choice='joinBet' label='Join Game'/> 
        </div>
        </>
    );
}

export default Choice;
