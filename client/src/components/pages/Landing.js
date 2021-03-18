import React from "react";
import socketIOClient from "socket.io-client";

import { Redirect } from "react-router-dom";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      code: "",
      name: "",
      newGame: null,
      room: "",
      loading: false,
      serverConfirmed: false,
      error: false,
      errorMessage: "",
      rules: true,
    };
  }
  componentDidMount() {
    // Connecting to Socket.
    const ENDPOINT = "http://localhost:4000";
    this.socket = socketIOClient(ENDPOINT);
    console.log(this.socket);

    // Listening to Free Game Creation
    this.socket.on("newFreeGameCreated", (room) => {
      this.setState({ serverConfirmed: true, room: room });
      console.log(room);
    });
  }

  stepUp = () => {
    this.setState({ step: this.state.step + 1 });
  };
  toggleRules = () => {
    this.setState({ rules: !this.state.rules });
  };
  createFreeGame = () => {
    this.setState({ loading: true });
    console.log("FREE+Game");
    this.socket.emit("newFreeGame");
    console.log(this.state.room);
  };
  createBetGame = () => {
    this.setState({ loading: true });
    console.log("BET+Game");
    this.socket.emit("newBetGame");
    console.log(this.state.room);
  };
  ChooseJoinFreeGame = () => {
    this.setState({ step: 2 });
  };
  ChooseJoinBetGame = () => {
    this.setState({ step: 3 });
  };
  JoiningBetGame = () => {};
  JoiningFreeGame = () => {};
  render() {
    if (this.state.serverConfirmed) {
      return <Redirect to={`/game`} />;
    } else {
      switch (this.state.step) {
        case 0:
          return (
            <>
              <button onClick={this.stepUp}>Play Game</button>
              <br />
              <br />
              <button onClick={this.toggleRules}>Rules</button>
              <br />
              <br />
              {!this.state.rules && <>The Rules Component Goes here</>}
            </>
          );
        case 1:
          return (
            <div className="ChoiceScreen">
              <div className="FreeGame">
                <h2>Free Game</h2>
                <button onClick={this.createFreeGame}>Start Game</button>
                <br />
                <br />
                <button onClick={this.ChooseJoinFreeGame}>Join Game</button>
              </div>
              <br />
              <br />

              <div className="BetGame">
                <h2>Bet Game</h2>
                <button onClick={this.createBetGame}>Start Game</button>
                <br />
                <br />
                <button onClick={this.ChooseJoinBetGame}>Join Game</button>
              </div>
            </div>
          );
        case 2: //For Free Game Join
          return (
            <>
              <h2>Free Game</h2>
              Name:{" "}
              <input value={this.state.name} type="textfield" label="name" />
              <br />
              <br />
              Token{" "}
              <input value={this.state.room} type="textfield" label="token" />
              <br />
              <br />
              <button onClick={this.JoiningFreeGame}>Join Game</button>
            </>
          );
        case 3: //For Bet Game Join
          return (
            <>
              <h2>Betting for 0.001 Ether</h2>
              Name:{" "}
              <input value={this.state.name} type="textfield" label="name" />
              <br />
              <br />
              Token{" "}
              <input value={this.state.room} type="textfield" label="token" />
              <br />
              <br />
              <button onClick={this.JoiningBetGame}>Join Game</button>
            </>
          );
      }
    }
  }
}

export default LandingPage;
