import React, { useState } from "react";
import bg from "../assets/images/MAINBG.png";
import actor from "../assets/images/actor.png";
import head from "../assets/images/head.png";
import btn from "../assets/images/actionbutton.png";
const Game = () => {
  const [score1, useScore1] = useState(5);
  const [score2, useScore2] = useState(4);
  const Increment = () => {};
  return (
    <div>
      <h1>Team  1: {score1}</h1>
      <h1>Team  2: {score2}</h1>

      <button onClick={Increment}>Click Here</button>
    </div>
  );
};

export default Game;
