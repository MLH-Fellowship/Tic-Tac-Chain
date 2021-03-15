var ticTacToe;

const fs = require('fs');
const Web3 = require('web3');


// change path to contract JSON to point to the TicTacToe.json file after compilation
const ticTacToeABI = JSON.parse(fs.readFileSync('../build/contracts/TicTacToe.json', 'utf8')).abi; 

// to get contract address on development, run truffle migrate -network deployment
// make sure ganache is running on host: 127.0.0.1, port: 8545            
const ticTacToeAddress = "0xDD5C8F6000Dc509ACB4929627d2817aD76a097d7";

function startApp() {
    ticTacToe = new web3js.eth.Contract(ticTacToeABI, ticTacToeAddress);
    
}

function setRoomid(id){
    ticTacToe.methods.setRoomID(id).send();
}

function createplayer1(id){
    ticTacToe.createPlayer(id,{ from: web3.eth.accounts[0], 
        value: web3.toWei("0.01","ether")}, 
        function(err, result)
        { revert(); 
        });
}

function createplayer2(id){
    ticTacToe.createPlayer(id,{ from: web3.eth.accounts[0], 
        value: web3.toWei("0.01","ether")}, 
        function(err, result)
        { revert(); 
        });
}

function sendBettoWinner(id,index){
    ticTacToe.methods.Winner(id,index).send();
}

function draw(id){
    ticTacToe.methods.Draw(id).send();
}


window.addEventListener('load', function() { 
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider || "ws://127.0.0.1:8545"); 
    } else {
        console.log("No web3? You should consider trying MetaMask!")
    }
    startApp()
  })
