// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;


// The game logic will be implemented in this file
contract TicTacToe{
    
    struct Player {
        address payable playerAddress;  // player's unique address/wallet id
        uint bettedAmt;  // amount that the player is betting
    } 

    // Declaring players 
    Player[] public playersInGame;
    
    // Initialising the total bet amount
    uint private totalBet;

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


    // function to deduct betted amount at the time of game signup
    function deductBet (uint _amount) public payable {
        require(_amount == msg.value);
        address payable thisContract = address(uint160(address(this)));
        thisContract.transfer(_amount);
    }

    // creates a player and adds it to the playersInGame array
    function createPlayer (uint _bettedAmt) public {
        Player memory player = Player(msg.sender, _bettedAmt);
        // deductBet(player.bettedAmt);
        playersInGame.push(player);
    }

    // Function to get the amount from the particular user
    function getAmount(uint i) public view returns (uint){
        return playersInGame[i].bettedAmt;
    }


    // function to get total betted amount and set it to totalBet
    function getTotalBet () public view returns (uint){
        return playersInGame[0].bettedAmt + playersInGame[1].bettedAmt;
    }
    
    // function to transfer total betted ether to winner's account
    function transferMoney (uint _winnerIndex) payable external{
        totalBet=getTotalBet();
        address payable winnerAddress = playersInGame[_winnerIndex].playerAddress;
        winnerAddress.transfer(totalBet);
    }
    
}