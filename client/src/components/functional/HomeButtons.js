import React from 'react';
import LandingButton from './LandingButton';

const HomeButtons = ({logo, onChoice}) => {
    return (
        <div className='landing-container'>
            <a href="/"><img src={logo} alt='TicTacToe Game'/></a>
            <LandingButton onChoice={onChoice} type='primary' choice='play-game' label='Play Game' /> 
            <LandingButton onChoice={onChoice} type='secondary' choice='rules' label='Rules' /> 
        </div>
    );
}

export default HomeButtons;