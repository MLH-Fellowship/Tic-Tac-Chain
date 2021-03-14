import React, {Component}  from 'react';
import ChoiceButton from './ChoiceButtons';

const EnterCode = ({color, gameCode, onTyping, onChoice}) =>{
    return (
      <div className={`input-${color}`}>
        <input type="text" value={gameCode} onChange={onTyping.bind(this)} />
        <ChoiceButton type="secondary" choice="submit" label="Submit" onChoice={onChoice} />
      </div>
    )
}

export default EnterCode;