import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Square from "../functional/Square";
import Wait from "../functional/Wait";
import Status from "../functional/Status";
import ScoreBoard from "../functional/ScoreBoard";
import PlayAgain from "../functional/PlayAgain";
import Web3 from "web3";
import data from "./../../smart_contracts/build/contracts/TicTacToe";
import io from "socket.io-client";
import qs from "qs";
import Contract from "web3-eth-contract";

const ticTacToeABI = JSON.parse(JSON.stringify(data), "utf8").abi;
const ticTacToeAddress = "0xE43146ACcB08E83F6Db898D9f37927821ed48696";
var ticTacToe;
var unique_id = 0;
var accounts;
const ENDPOINT = "http://localhost:4000";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new Array(9).fill(null),
      piece: "X",
      turn: true,
      end: false,
      room: "",
      bet: null,
      statusMessage: "",
      currentPlayerScore: 0,
      opponentPlayer: [],
      //State to check when a new user join
      waiting: false,
      joinError: false,
      //timer clock
      timer: false,
      minutes: 10,
      seconds: 0,

      //keep track of draws
      draw:0
    };
    this.socketID = null;
  }

  async componentWillMount() {
    await this.loadWeb3();
    const ticTacToe=await this.loadContract();
    this.setState({ticTacToe});

  }

  async loadContract(){
    const web3 = window.web3;
		return new web3.eth.Contract(ticTacToeABI, ticTacToeAddress);    
  }

  async loadWeb3() {
    if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			await window.ethereum.enable();
		}
		if (window.web3) {
			window.web3 = new Web3(window.web3.currentProvider);
		} else {
			window.alert("please use metamask");
		}

  }

  async setRoomid(id) {
    const web3=window.web3;
    const account = (await web3.eth.getAccounts())[0];
    console.log(this.state.ticTacToe);
    const result = await this.state.ticTacToe.methods.setid(id).send({ from: account });
    console.log(result);
  }

  //   setRoomEvent.SetID().watch(function (err, result) {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     // append details of result.args to UI
  //     else {
  //       console.log(result);
  //     }
  //   });
  // }

  async getuniqueid(id) {
    unique_id = await this.state.ticTacToe.methods.getid(id).call();
    return unique_id;
  }

  createplayer1(id) {
    ticTacToe.createPlayer(
      id,
      { from: Web3.eth.accounts[0], value: Web3.toWei("0.01", "ether") },
      (err, result) => {
        // Web3.revert();
      }
    );
  }

  createplayer2(id) {
    ticTacToe.createPlayer(
      id,
      { from: Web3.eth.accounts[0], value: Web3.toWei("0.01", "ether") },
      (err, result) => {
        // Web3.revert();
      }
    );
  }

  sendBettoWinner(id, index) {
    ticTacToe.methods.Winner(id, index).send();
  }

  draw(id) {
    ticTacToe.methods.Draw(id).send();
  }

  componentDidMount() {
    //Getting the room and the username information from the url
    //Then emit to back end to process
    this.socket = io(ENDPOINT);
    const { room, name, bet } = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });
    this.setState({ room });
    this.setState({ bet: bet });
    this.socket.emit("newRoomJoin", { room, name });

    //New user join, logic decide on backend whether to display
    //the actual game or the wait screen or redirect back to the main page
    this.socket.on("waiting", async() => {
      //  Runs when Room is a BET GAME
      console.log(this.state.bet);
        await this.setRoomid(this.state.room);
        console.log("Room ID is set");
        console.log("GET UNIQUE ID");
        const result=await this.getuniqueid(this.state.room);
        console.log(result);
      
        this.setState({
        waiting: true,
        currentPlayerScore: 0,
        opponentPlayer: [],
      });
    });
    this.socket.on("starting", ({ gameState, players, turn }) => {
      this.setState({ waiting: false });
      this.gameStart(gameState, players, turn);
    });
    this.socket.on("joinError", () => {
      this.setState({ joinError: true });
    });

    //Listening to the assignment of piece store the piece along with the in state
    //socket id in local socketID variable
    this.socket.on("pieceAssignment", ({ piece, id }) => {
      this.setState({ piece: piece });
      this.socketID = id;
    });

    //Game play logic events
    this.socket.on("update", ({ gameState, turn }) =>
      this.handleUpdate(gameState, turn)
    );
    this.socket.on("winner", ({ gameState, id }) =>
      this.handleWin(id, gameState)
    );
    this.socket.on("draw", ({ gameState }) => this.handleDraw(gameState));
    this.socket.on("restart", ({ gameState, turn }) =>
      this.handleRestart(gameState, turn)
    );
  }

  //Setting the states to start a game when new user join
  gameStart(gameState, players, turn) {
    const opponent = players.filter(([id, name]) => id !== this.socketID)[0][1];
    this.setState({ opponentPlayer: [opponent, 0], end: false });
    this.setBoard(gameState);
    this.setTurn(turn);
    this.setMessage();
    this.setState({ timer: true });
    this.countdown();
  }

  //When some one make a move, emit the event to the back end for handling
  handleClick = (index) => {
    const { game, piece, end, turn, room } = this.state;
    if (!game[index] && !end && turn) {
      this.socket.emit("move", { room, piece, index });
    }
  };

  //Setting the states each move when the game haven't ended (no wins or draw)
  handleUpdate(gameState, turn) {
    this.setBoard(gameState);
    this.setTurn(turn);
    this.setMessage();
  }

  //Setting the states when some one wins
  handleWin(id, gameState) {
    this.setBoard(gameState);
    if (this.socketID === id) {
      const playerScore = this.state.currentPlayerScore + 1;
      this.setState({
        currentPlayerScore: playerScore,
        statusMessage: "You Win",
      });
    } else {
      const opponentScore = this.state.opponentPlayer[1] + 1;
      const opponent = this.state.opponentPlayer;
      opponent[1] = opponentScore;
      this.setState({
        opponentPlayer: opponent,
        statusMessage: `${this.state.opponentPlayer[0]} Wins`,
      });
    }
    if (this.state.currentPlayerScore >= 1) {
      if (this.state.bet === true) {
        console.log("sending Winner Detail");
        this.sendTheWinnerDetails();
      }

      this.setState({ end: true });
      this.setState({ timer: false });
      console.log(this.state.timer);
    }
  }

  //Setting the states when there is a draw at the end
  handleDraw(gameState) {
    this.setBoard(gameState);
    this.setState({draw:this.state.draw+1})
    if (this.state.bet === true) {
      if(!(this.state.minutes === 0 && this.state.seconds === 0))
      {
        this.socket.emit("playAgainRequest", this.state.room);
        console.log("BoarD Refreshed")
      }
    } else {
      if (!(this.state.minutes === "0" && this.state.seconds === 0)) {
        this.playAgainRequest();
      } else {
        this.setState({ end: true, statusMessage: "Draw" });
      }
    }
  }

  playAgainRequest = () => {
    this.socket.emit("playAgainRequest", this.state.room);
    this.setState({ minutes: 10, seconds: 0 });
    this.setState({ timer: true });
  };

  //Handle the restart event from the back end
  handleRestart(gameState, turn) {
    this.setBoard(gameState);
    this.setTurn(turn);
    this.setMessage();
    this.setState({ end: false });
  }

  //Some utilities methods to set the states of the board
  countdown() {
    if (this.state.timer) {
      setInterval(() => {
        if (this.state.timer) {
          const { seconds, minutes } = this.state;

          if (seconds > 0) {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1,
            }));
          }
          if (seconds === 0) {
            if (minutes === 0) {
              //game_end_logic on timer is complete
              clearInterval(this.myInterval);
              this.sendTheWinnerDetails();
            } else {
              this.setState(({ minutes }) => ({
                minutes: minutes - 1,
                seconds: 59,
              }));
            }
          }
        }
      }, 1000);
    }
  }

  sendTheWinnerDetails() {
    this.socket.emit("playerwins", this.state.piece);
    console.log("Winner Details Sent");
  }

  setMessage() {
    const message = this.state.turn
      ? "Your Turn"
      : `${this.state.opponentPlayer[0]}'s Turn`;
    this.setState({ statusMessage: message });
  }

  setTurn(turn) {
    if (this.state.piece === turn) {
      this.setState({ turn: true });
    } else {
      this.setState({ turn: false });
    }
  }

  setBoard(gameState) {
    this.setState({ game: gameState });
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.state.game[i]}
        player={this.state.piece}
        end={this.state.end}
        id={i}
        onClick={this.handleClick}
        turn={this.state.turn}
      />
    );
  }

  render() {
    if (this.state.joinError) {
      return <Redirect to={`/`} />;
    } else {
      const squareArray = [];
      for (let i = 0; i < 9; i++) {
        const newSquare = this.renderSquare(i);
        squareArray.push(newSquare);
      }
      return (
        <>
          <Wait display={this.state.waiting} room={this.state.room} />
          <Status message={this.state.statusMessage} />
          {this.state.minutes === 0 && this.state.seconds === 0 ? (
            <h1>Game Over</h1>
          ) : (
            <h1>
              Time Remaining: {this.state.minutes}:
              {this.state.seconds < 10
                ? `0${this.state.seconds}`
                : this.state.seconds}
            </h1>
          )}
          <div className="board">{squareArray}</div>
          <ScoreBoard
            data={{
              player1: ["You", this.state.currentPlayerScore],
              player2: [
                this.state.opponentPlayer[0],
                this.state.opponentPlayer[1],
              ],
            }}
          />
          {!this.state.bet && (
            <PlayAgain end={this.state.end} onClick={this.playAgainRequest} />
          )}
        </>
      );
    }
  }
}

export default Board;
