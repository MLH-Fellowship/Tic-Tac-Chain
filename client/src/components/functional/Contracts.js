import React from 'react';
import fs from 'fs';
import Web3 from 'web3';
import data from './../../smart_contracts/build/contracts/TicTacToe'
const ticTacToeABI = data.abi; 
const ticTacToeAddress = "0xD64284a9D2D9B019C6384F04F22d38a50b94a378";

class Contracts extends React.Component{
    async componentWillMount() {
        await this.loadWeb3();
        await this.startApp();
      }
    
      async loadWeb3() {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
        }
        else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
      }
    
    async startApp() {
    ticTacToe = await new web3js.eth.Contract(ticTacToeABI, ticTacToeAddress);
    
}

    setRoomid(id){
        setRoomEvent= ticTacToe.method.setRoomID(id).send();
        setRoomEvent.watch(function(err, result) {
        if (err) {
          console.log(err)
          return;
        }
        // append details of result.args to UI
        else{
            console.log(result);
        }
      })
      
}

    createplayer1(id){
        ticTacToe.createPlayer(id,{ from: web3.eth.accounts[0], 
            value: web3.toWei("0.01","ether")}, 
        (err, result)=>
        { revert(); 
        });
}

    createplayer2(id){
        ticTacToe.createPlayer(id,{ from: web3.eth.accounts[0], 
            value: web3.toWei("0.01","ether")}, 
            (err, result)=>
        { revert(); 
        });
}

    sendBettoWinner(id,index){
        ticTacToe.methods.Winner(id,index).send();
}

    draw(id){
        ticTacToe.methods.Draw(id).send();
}


}