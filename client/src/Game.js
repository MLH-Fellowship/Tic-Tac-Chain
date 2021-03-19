import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Web3 from 'web3';
// import data from './smart_contracts/build/contracts/TicTacToe'
import LandingPage from "./components/pages/Landing";
import Board from "./components/pages/Board";



// const ticTacToeABI = data.abi; 
// const ticTacToeAddress = "0xD64284a9D2D9B019C6384F04F22d38a50b94a378";
// var ticTacToe=''

class App extends Component {
//   async componentWillMount() {
//     await this.loadWeb3();
//     await this.startApp();
//   }

//   async loadWeb3() {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum);
//       await window.ethereum.enable();
//     } else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider);
//     } else {
//       window.alert(
//         "Non-Ethereum browser detected. You should consider trying MetaMask!"
//       );
//     }
//   }
//   componentDidMount(){

//   }



//   async startApp() {
//     ticTacToe = await new Web3.eth.Contract(ticTacToeABI, ticTacToeAddress);
//   }

//   setRoomid(id) {
//     const setRoomEvent = ticTacToe.methods.setRoomID(id).send();
//     setRoomEvent.watch(function (err, result) {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       // append details of result.args to UI
//       else {
//         console.log(result);
//       }
//     });
//   }

//   createplayer1(id) {
//     ticTacToe.createPlayer(
//       id,
//       { from: Web3.eth.accounts[0], value: Web3.toWei("0.01", "ether") },
//       (err, result) => {
//         // Web3.revert();
//       }
//     );
//   }

//   createplayer2(id) {
//     ticTacToe.createPlayer(
//       id,
//       { from: Web3.eth.accounts[0], value: Web3.toWei("0.01", "ether") },
//       (err, result) => {
//         // Web3.revert();
//       }
//     );
//   }

//   sendBettoWinner(id, index) {
//     ticTacToe.methods.Winner(id, index).send();
//   }

//   draw(id) {
//     ticTacToe.methods.Draw(id).send();
//   }






  render() {
    return (
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/game" component={Board} />
      </Router>
    );
  }
}

export default App;
