// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

import "./modifiers.sol";

// Player generation and modification contracts will be handled here
contract HockeyPlayers is HasModifiers{
    struct Player {
        address playerAddress;  // player's unique address/wallet id
        uint bettedAmt;  // amount that the player is betting
    } 

    Player[] public playersInGame;

    // creates a player and adds it to the playersInGame array
    function createPlayer (address _playerAddress, uint bettedAmt) public hasEther() {
        Player memory player;
        player=Player(_playerAddress,bettedAmt);
        require(playersInGame.length<=2);
        playersInGame.push(player);

    }
}