import React, { Component } from 'react';

import GameChoice from '../functional/GameChoice';

class ChoiceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // enter required states
        }
    }

    onButtonClick(){
        // enter the onChoice method
    }

    render(){
        const freeHead = "Play For Free!";
        const freeTag = "Best mode for a quick game with friends!";
    
        const betHead = "Bet 0.001 Ether!";
        const betTag = "Win cryptocurrency the easy way!";
        return (
            <div>
                <GameChoice gameType="free" heading={freeHead} tagLine={freeTag} onChoice={()=>{this.onButtonClick()}}/>
                <GameChoice gameType="bet" heading={betHead} tagLine={betTag} onChoice={()=>{this.onButtonClick()}}/>
            </div>
        )
    }
}

export default ChoiceScreen;