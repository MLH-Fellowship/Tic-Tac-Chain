import React, {Component} from 'react';
import { Redirect } from 'react-router';
import HomeButtons from '../functional/HomeButtons';
import Rules from '../functional/Rules';

import logo from '../functional/icons/logo.png';



class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            step: 0,
            code: ""
        }
    }

    onChoice = (choice)=>{
        if (choice === 'play-game') {
            this.setState(
                {step: 1} 
            );
        } else if (choice === 'rules'){
            this.setState(
                {step: 2}
            )
        } else {
            this.setState(
                {step: 0}
            )
        }
    }

    onTyping(event) {
        this.setState(
          {code: event.target.value});
      }

    
    render(){ 
        switch(this.state.step){
            case(0):
                return (
                    <HomeButtons logo={logo} onChoice={this.onChoice}/>
                );
            
            case(1):
                return(
                    <Redirect to='/type' />
                );

            case(2):
                return(
                    <Rules onChoice={this.onChoice}/>
                );

            default:
                return null;
            
        };    
    } 
}

export default LandingPage;