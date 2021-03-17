// load the TicTacToe contract as an artifact
const TicTacToe = artifacts.require("./TicTacToe.sol");
var asserted = require('assert');



contract('TicTacToe', ([accounts,player1,player2]) => {
    let tictactoe;

    // before other code execute we need to deploy our airhockey contract
    before(async () => {
        tictactoe = await TicTacToe.deployed();
    });

    describe('deployment', async() => {
        // Test for whether the contract deployed successfully or not
        it('deploys successfully', async () => {
            const address = await tictactoe.address;
            // Test that check whether address is 0x0 or not
            assert.notEqual(address, 0x0);
            // Test that check whether address is a empty string or not
            assert.notEqual(address, '');
            // Test that check whether address is a null value or not
            assert.notEqual(address, null);
            // Test that check whether address is undefined or not
            assert.notEqual(address, undefined);
        }
    );

        // Test for setting the unique id to get the unique id mapping from Room ID
        const roomid="qwawerdsss";
        it('Setting the unique id from Room ID',async()=>{
            const result=await tictactoe.setid(roomid);
        });

        var uniqueid = 0;

        // Test for getting the unique id saved from Room ID setted in earlier test
        it('Getting the unique id from Room ID',async()=>{
            uniqueid=await tictactoe.getid(roomid);
            // Checking whether uniqueid is equal to 1 or not
            asserted.equal(1,uniqueid);
            // Checking whether unique id is not equal other than 1 
            assert.notEqual(2,uniqueid);
        });

        // Creating a Player1 and Sending the Bet amount to store in the smart contract

        it('Creation of Player1 and Sending the Bet amount Successfully',async()=>{
            const result=await tictactoe.createPlayer.sendTransaction(
                uniqueid,
                { from: player1, 
                value: web3.utils.toWei("0.01")
            });

        });

        
        // Creating a Player2 and Sending the Bet amount to store in the smart contract

        it('Creation of Player2 and Sending the Bet amount Successfully',async()=>{
            const result=await tictactoe.createPlayer.sendTransaction(
                uniqueid,
                { from: player2, 
                value: web3.utils.toWei("0.01")
            });

        });

        // Get Total Bet deposited by 2 players

        var BetAmt;

        it('Getting Total Bet',async()=>{
            BetAmt=await tictactoe.TotalBet(uniqueid);
        });

        // Verifying the Total Bet Amount

        it('Verify Total Bet',async()=>{
            var betactual=web3.utils.toWei('0.02', 'ether');
            asserted.equal(betactual,BetAmt.toString());
        });

        // Tests for Sending Money to Player1

        it('Sending Money to the Winner i.e Player 1',async()=>{
            const result=await tictactoe.Winner(uniqueid,0);
        })

});

});