import React from "react";
import Input from "./Input.js";
import ChoiceButton from "./ChoiceButtons";

const InputForm = (props) => {
  const { stepBack, onSubmit, onTyping, newGame, name, room } = props;

  if (newGame === "newFree") {
    return (
      <div className="input-container">
        <h1>Free Game</h1>
        <Input
          name="name"
          placeholder="Your Name..."
          onChange={onTyping}
          value={name}
        />
        <div className="nav-container">
          <ChoiceButton
            type="nav-back"
            choice="back"
            onChoice={stepBack}
            label="Back"
          />
          <ChoiceButton
            type="nav-forward"
            choice="submit"
            onChoice={onSubmit}
            label="Let's Go"
          />
        </div>
      </div>
    );
  } else if (newGame === "newBet") {
    return( <div className="input-container">
      <h1>Bet Game</h1>
      <Input
        name="name"
        placeholder="Your Name..."
        onChange={onTyping}
        value={name}
      />
      <div className="nav-container">
        <ChoiceButton
          type="nav-back"
          choice="back"
          onChoice={stepBack}
          label="Back"
        />
        <ChoiceButton
          type="nav-forward"
          choice="submit"
          onChoice={onSubmit}
          label="Let's Go"
        />
      </div>
    </div>)
  }else if(newGame==='joinBet')
  {
   return (<div className="input-container">
         <h1>Join Bet Game</h1>
    <Input
      name="name"
      placeholder="Your Name..."
      onChange={onTyping}
      value={name}
    />
    <Input
      name="room"
      placeholder="Room ID..."
      onChange={onTyping}
      value={room}
    />
    <div className="nav-container">
      <ChoiceButton
        type="nav-back"
        choice="back"
        onChoice={stepBack}
        label="Back"
      />
      <ChoiceButton
        type="nav-forward"
        choice="submit"
        onChoice={onSubmit}
        label="Let's Go"
      />
    </div>
  </div>)
  } 
  else{
   return( <div className="input-container">
    <h1>Join Free Game</h1>
    <Input
      name="name"
      placeholder="Your Name..."
      onChange={onTyping}
      value={name}
    />
    <Input
      name="room"
      placeholder="Room ID..."
      onChange={onTyping}
      value={room}
    />
    <div className="nav-container">
      <ChoiceButton
        type="nav-back"
        choice="back"
        onChoice={stepBack}
        label="Back"
      />
      <ChoiceButton
        type="nav-forward"
        choice="submit"
        onChoice={onSubmit}
        label="Let's Go"
      />
    </div>
  </div>)
  }
}

export default InputForm;
