import React, { Component } from 'react';

import GameChoice from '../functional/GameChoice';

class ChoiceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // enter required states
        }
    }

    freeHead = "Play For Free!";
    freeTag = "Best mode for a quick game with friends!";

    betHead = "Bet 0.001 Ether!";
    betTag = "Win cryptocurrency the easy way!";

    onButtonCLick(){
        // enter the onChoice method
    }

    render(){
        return (
            <div>
                <GameChoice gameType="free" heading={freeHead} tagLine={freeTag} onChoice={onButtonCLick}/>
                <GameChoice gameType="bet" heading={betHead} tagLine={betTag} onChoice={onButtonCLick}/>
            </div>
        )
    }
}

export default ChoiceScreen;