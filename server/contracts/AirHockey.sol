// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "./Modifiers.sol";
import "./HockeyPlayers.sol";

// The game logic will be implemented in this file
contract AirHockey is HockeyPlayers {
    uint private totalBet;

    // function to get total betted amount and set it to totalBet
    function getTotalBet () public {
        totalBet=playersInGame[0].bettedAmt + playersInGame[1].bettedAmt;
    }
    
    // function to transfer total betted ether to winner's account
    function transferMoney (uint _winnerIndex) external payable{
        address payable winnerAddress = address(uint160(playersInGame[_winnerIndex].playerAddress));
        winnerAddress.transfer(totalBet);
    }

}