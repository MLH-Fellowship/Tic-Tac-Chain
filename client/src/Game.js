import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import LandingPage from './components/pages/Landing';
import Board from './components/pages/Board';


const Game = () => {
    return(
    <Router>
        <Route path='/' exact component={LandingPage} />
        <Route path='/game' component={Board} />
    </Router>
)

}
 
export default Game