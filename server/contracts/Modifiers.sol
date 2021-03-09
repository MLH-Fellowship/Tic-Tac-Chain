// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;


// All the custom modifiers need to be defined in this file
contract HasModifiers {

    // asserts if the player has ether to bet
    modifier hasEther (uint _bettedAmt) {
        require(msg.sender.balance >= _bettedAmt);
        _;
    }

    // asserts if the game is over
    modifier gameOver (uint _highestScore) {
        require(_highestScore == 10);
        _;
    }
    
}

