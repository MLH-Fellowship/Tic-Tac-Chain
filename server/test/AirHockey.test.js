// loaded the AirHockey Contract as a artifact
const AirHockey = artifacts.require("./AirHockey.sol");

contract('AirHockey',(accounts)=>{
    let airhockey;

    // before other code execute we need to deploy our airhockey contract
    before(async ()=>{
        airhockey=await AirHockey.deployed();
    });

    describe('deployment',async()=>{
        // Test for whether the contract deployed successfully or not
        it('deploys successfully',async ()=>{
            const address=await airhockey.address;
            // Test that check whether address is 0x0 or not
            assert.notEqual(address,0x0);
            // Test that check whether address is a empty string or not
            assert.notEqual(address,'');
            // Test that check whether address is a null value or not
            assert.notEqual(address,null);
            // Test that check whether address is undefined or not
            assert.notEqual(address,undefined);
        }
    )
})
})