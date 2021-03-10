// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "./Modifiers.sol";

// Player generation and modification contracts will be handled here
contract HockeyPlayers is HasModifiers{
    struct Player {
        address playerAddress;  // player's unique address/wallet id
        uint bettedAmt;  // amount that the player is betting
    } 

    Player[] public playersInGame;

    // function to deduct betted amount at the time of game signup
    function deductBet (uint _amount) public payable {
        require(_amount == msg.value);
        address payable thisContract = address(uint160(address(this)));
        thisContract.transfer(_amount);
    }

    // creates a player and adds it to the playersInGame array
    function createPlayer (address _playerAddress, uint _bettedAmt) external hasEther(_bettedAmt) {
        require(playersInGame.length <= 2);
        Player memory player = Player(_playerAddress, _bettedAmt);
        deductBet(player.bettedAmt);
        playersInGame.push(player);
    }

}