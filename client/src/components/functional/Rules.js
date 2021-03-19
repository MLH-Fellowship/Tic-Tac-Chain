// The game rules will go on this page
import React, { Component } from "react";

import LandingButton from "./LandingButton";

const Rules = ({ onChoice }) => {
  return (
    <div className="rules">
      <h1>Rules:</h1>
      <p>The rules for the game will come here.</p>
      1. The game is played on a grid that's 3 squares by 3 squares. 2. You are
      X, your friend (or the computer in this case) is O. Players take turns
      putting their marks in empty squares. 3. The first player to get 3 of her
      marks in a row (up, down, across, or diagonally) is the winner. 4. When
      all 9 squares are full, the game is over. If no player has 3 marks in a
      row, the game ends in a tie. 5. There are two modes in the game: free mode
      and bet mode. 6. In the bet mode, each player places a bet of 0.001 ETH
      (total 0.002 ETH). There is a 10 minute time limit to the game. The one to
      win in the 10 minute time duration gets to take all the betted ETH. 7. In
      case no one wins the game in 10 mins, the betted amount is sent back to
      the players' wallets.
    </div>
  );
};

export default Rules;
