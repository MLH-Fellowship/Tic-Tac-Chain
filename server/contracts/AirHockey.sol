// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

import "./modifiers.sol";
import "./HockeyPlayers.sol";

// The game logic will be implemented in this file
contract AirHockey is HockeyPlayers {
    uint public totalBet;

    // function to get total betted amount and set it to totalBet
    function getTotalBet () public  returns(uint) {
        totalBet=playersInGame[0].bettedAmt+playersInGame[1].bettedAmt;
        return totalBet;
    }
    

}