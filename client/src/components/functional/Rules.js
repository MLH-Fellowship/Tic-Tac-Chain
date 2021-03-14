// The game rules will go on this page
import React, {Component} from 'react';

import LandingButton from './LandingButton'

const Rules = ({onChoice}) =>{
        return (
            <div className="rules">
                <h1>Rules:</h1>
                <p>The rules for the game will come here.</p>
                <LandingButton onChoice={onChoice} type='secondary' choice='home' label='Go Back'/>
            </div>
        );
}

export default Rules;
