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

    
    it('Creation of Player 1',async () => {
        let result;
        const bettedAmt1=web3.utils.toWei('2', 'Ether');
        result=await tictactoe.createPlayer(bettedAmt1,{from: player1});
        console.log("player 1 created");

    });

    it('Creation of Player 2',async () => {
        let result;
        const bettedAmt2=web3.utils.toWei('2', 'Ether');
        result=await tictactoe.createPlayer(bettedAmt2,{from: player2});
        console.log("player 2 created");
    });

    it('Betted Amt Check',async()=>{
        let betAmt1,betAmt2;
        betAmt1=(await tictactoe.getAmount.call(0)).toString();
        asserted.strictEqual(betAmt1,web3.utils.toWei('2','Ether'),'Betted Amount in player 1 is not sucessfully Stored');
        betAmt2=(await tictactoe.getAmount.call(1)).toString();
        asserted.strictEqual(betAmt2,web3.utils.toWei('2','Ether'),'Betted Amount in player 2 is not sucessfully Stored');

    });

    it("Amount Deduct",async()=>{
        result=await tictactoe.transferMoney(0);
    });
})
})