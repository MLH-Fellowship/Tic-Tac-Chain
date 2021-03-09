const AirHockey = artifacts.require("./AirHockey.sol");

contract('AirHockey',(accounts)=>{
    let airhockey;
    
    before(async ()=>{
        airhockey=await AirHockey.deployed();
    });

    describe('deployment',async()=>{
        it('deploys successfully',async ()=>{
            const address=await airhockey.address;
            assert.notEqual(address,0x0);
            assert.notEqual(address,'');
            assert.notEqual(address,null);
            assert.notEqual(address,undefined);
        }
    )
})
})