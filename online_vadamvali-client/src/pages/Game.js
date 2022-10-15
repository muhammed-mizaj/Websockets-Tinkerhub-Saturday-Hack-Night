import React, { useState, useEffect } from "react";
import bg from "../assets/images/MAINBG.png";
import actor from "../assets/images/actor.png";
import head from "../assets/images/head.png";
import btn from "../assets/images/actionbutton.png";
import { io } from "socket.io-client";
const Game = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const team_id = 1;
  let socket = io("ws://localhost:3000", { transports: ["websocket"] });
  const Increment = () => {
    socket.emit("click", team_id);
  };
  const updateStates = (team1Score, team2Score) => {
    console.log(team1Score, team2Score);
    setScore1(team1Score);
    setScore2(team2Score);
  };
  socket.on("score", (team1Score, team2Score) => {
    updateStates(team1Score, team2Score);
  });
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
      className="w-full h-full flex flex-row justify-center overflow-hidden  "
    >
      <h1>Team 1: {score1}</h1>
      <h1>Team 2: {score2}</h1>

      <button onClick={Increment}>Click Here</button>
    </div>
  );
};

export default Game;
