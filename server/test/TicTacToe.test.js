// load the TicTacToe contract as an artifact
const TicTacToe = artifacts.require("./TicTacToe.sol");

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
        let result,player1_info;
        const bettedAmt1=web3.utils.toWei('1', 'Ether');
        result=await tictactoe.createPlayer(bettedAmt1,{from: player1});
        console.log("player 1 created");


    });

    it('Creation of Player 2',async () => {
        let result,player2_info;
        const bettedAmt2=web3.utils.toWei('1', 'Ether');
        result=await tictactoe.createPlayer(bettedAmt2,{from: player2});
        console.log("player 2 created");
    });
})
})