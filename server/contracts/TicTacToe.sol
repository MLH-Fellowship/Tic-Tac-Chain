// SPDX-License-Identifier: MIT
pragma solidity >0.5.11;


// The game logic will be implemented in this file

contract TicTacToe{

    // Storing the commission as 5000 Wei

    uint commission=5000;

    // Created a Mapping Game which maps from string to address array

    mapping(string=>address[]) public Game;
    
    // Created Mapping BettAmt which maps from adddress to uint
    // It maps from address of player to bet amount

    mapping(address=>uint) public BettAmt;
    
    // Function which accept a payment from the user and creates a user

    function createPlayer(string memory RoomID) external payable{
        address sender = msg.sender;
        uint betamount= msg.value;
        Game[RoomID].push(sender);
        BettAmt[sender]=betamount;
    }

    // Function to send the bet amount to the winner

    function sendBetAmt(address payable winner,uint bettedAmt) public{
        winner.transfer(bettedAmt);
    }
    
    // Calculate the Total Bet Amount

    function TotalBet(string memory RoomID) public view returns(uint) {
        uint Bet0=BettAmt[Game[RoomID][0]]-commission;
        uint Bet1=BettAmt[Game[RoomID][1]]-commission;
        uint total=Bet0+Bet1;
        return total;
    }

    // Function to take the winner index as input
    // It calculates the Winner address and send total bet to the person

    function Winner(string memory RoomID,uint index) public{
        address payable winner_address=address(uint160(Game[RoomID][index]));
        uint totalBet=TotalBet(RoomID);
        sendBetAmt(winner_address, totalBet);

    }

    // Function for Get Bet Amount By Address

    function getBet(address player) public view returns(uint){
        return BettAmt[player]-commission;
    }

    // Function to send money to both players if it is draw game
    function Draw(string memory RoomID) public{

        address payable player0_address=address(uint160(Game[RoomID][0]));
        uint bet0=getBet(Game[RoomID][0]);
        address payable player1_address=address(uint160(Game[RoomID][1]));
        uint bet1=getBet(Game[RoomID][1]);
        sendBetAmt(player0_address, bet0);
        sendBetAmt(player1_address, bet1);

        
    }

}