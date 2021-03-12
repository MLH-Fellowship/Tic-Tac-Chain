import React, {Component} from 'react';
import HomeButtons from '../functional/HomeButtons';


class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            step: 1,
            name: '',
            playGame: null,
        }
    }
    
    componentDidMount(){
        // logic to be implemented
    }


    componentWillUnmount(){
        // logic to be implemented
    }

    onChoice = (choice)=>{
        const gameChoiceScreen = (choice==='play-game' ? true : false)  // checks if the choice was play-game or rules
        const newState = {playGame: gameChoiceScreen}
        this.setState(newState, ()=>{
            this.stepForward()
        })
    }


    render(){
        return (
            <HomeButtons logo={logo} onChoice={this.onChoice}/>
        );
    } 
}

export default LandingPage;