import React from "react";
import socketIOClient from "socket.io-client";
// import io from 'socket.io-client'

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
  JoinFreeGame = () => {

  };
  JoinBetGame = () => {};

  render() {
    if (this.state.serverConfirmed) {
      return (
       <>Server is Created</>
      );
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
                <button>Join Game</button>
              </div>
              <br />
              <br />

              <div className="BetGame">
                <h2>Bet Game</h2>
                <button onClick={this.createBetGame}>Start Game</button>
                <br />
                <br />
                <button>Join Game</button>
              </div>
            </div>
          );
        case 2: //For Free Game Join
            return(
              <>
                <h2>Free Game</h2>
              </>
            );
        case 3: //For Bet Game Join
            return(
              <>
                <h2>Betting for 0.001 Ether</h2>
              </>
            )
      }
      }
    }
  }

export default LandingPage;
