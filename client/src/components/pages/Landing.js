import React from "react";
import socketIOClient from "socket.io-client";
import { Redirect } from "react-router-dom";
import ChoiceScreen from "./ChoiceScreen";
import InputForm from "./../functional/InputForm";
import Loading from "./../functional/Loading";
import Error from "./../functional/Error";
import Rules from './../functional/Rules'
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
     // Listening to Free Game Creation
     this.socket.on("newBetGameCreated", (room) => {
      this.setState({ serverConfirmed: true, room: room });
      console.log(room);
    });
    // When Join gets confirmed
    this.socket.on("joinConfirmed", () => {
      this.setState({ serverConfirmed: true });
    });
    // On Recieving Error 
    this.socket.on('errorMessage', (message) => this.displayError(message))
  }

  stepUp = () => {
    this.setState({ step: this.state.step + 1 });
  };

  stepBack = () => {
    this.setState({ step: this.state.step - 1 });
  };

  displayError = (message) =>{
    this.setState({error:true, errorMessage:message, loading:false})
    setTimeout(()=>{
        this.setState({error:false, errorMessage:''})
    }, 3000)
}
  toggleRules = () => {
    this.setState({ rules: !this.state.rules });
  };
  onTyping = (e) => {
    const target = e.target.name;
    const newState = { [target]: e.target.value };
    this.setState(newState);
  };

  onChoice = (choice) => {
    if (choice === "newFree") {
      this.setState({ newGame: "newFree" });
      this.stepUp();
    }
    if (choice === "newBet") {
      this.setState({ newGame: "newBet" });
      this.stepUp();
    }
    if (choice === "joinBet") {
      this.setState({ newGame: "joinBet" });
      this.stepUp();
    }
    if (choice === "joinFree") {
      this.setState({ newGame: "joinFree" });
      this.stepUp();
    }
  };
  onSubmit = () => {
    this.setState({ loading: true });
    if (this.state.newGame === "newFree") {
      this.socket.emit("newFreeGame");
    } else if (this.state.newGame === "newBet") {
      this.socket.emit("newBetGame");
    } else if (this.state.newGame === "joinFree") {
      this.socket.emit("joining", { room: this.state.room });
      console.log("Room: ", this.state.room);
    } else if (this.state.newGame === "joinBet") {
      this.socket.emit("joining", { room: this.state.room });
      console.log("Room: ", this.state.room);
    } else {
      console.error("Dont Change Game Params.");
    }
  };
  render() {
    if (this.state.serverConfirmed) {
      var bet=false;
      if(this.state.newGame==='joinBet' || this.state.newGame==='newBet')
      bet=true;
      return(
        <Redirect to={`/game?room=${this.state.room}&name=${this.state.name}&bet=${bet}`} />
    )
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
              {!this.state.rules && <><Rules/>e</>}
            </>
          );

        case 1:
          return (
            <>
              <ChoiceScreen onChoice={this.onChoice} />
            </>
          );
        case 2:
          return (
            <>
              <Loading loading={this.state.loading} />

              <Error
                display={this.state.error}
                message={this.state.errorMessage}
              />

              <InputForm
                stepBack={this.stepBack}
                onSubmit={this.onSubmit}
                onTyping={this.onTyping.bind(this)}
                newGame={this.state.newGame}
                name={this.state.name}
                room={this.state.room}
              />
            </>
          );

       
      }
    }
  }
}

export default LandingPage;
