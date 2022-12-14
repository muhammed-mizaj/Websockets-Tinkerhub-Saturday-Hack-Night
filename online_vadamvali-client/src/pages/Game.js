import React, { useState, useEffect } from "react";
import bg from "../assets/images/MAINBG.png";
import actor from "../assets/images/actor.png";
import head from "../assets/images/head.png";
import btn from "../assets/images/actionbutton.png";
import { io } from "socket.io-client";
const Game = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [team_id, setTeamid] = useState(0);
  const [winner, setWinner] = useState('');

  let socket = io("ws://localhost:3000", { transports: ["websocket"] });

  const updateStates = (team1Score, team2Score) => {
    // console.log(team1Score, team2Score);
    setScore1(team1Score);
    setScore2(team2Score);
  };
  const [right, setRight] = useState(50);

  socket.on("score", (team1Score, team2Score) => {
    updateStates(team1Score, team2Score);
    setRight((right) => team1Score - team2Score + 50);
    if (team1Score - team2Score > 10) 
      setWinner("Team 1");
    else if (team1Score - team2Score < -10) 
      setWinner("Team2");
  });

  const handleUserClick = () => {
    // emit 2
    socket.emit("click", team_id);
    console.log(team_id);
  };
  const handleChangeTeamID = (event) => {
    setTeamid(event.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,

        backgroundSize: "cover",
      }}
      className="w-screen h-full flex flex-row justify-center overflow-hidden  "
    >
      <div className="flex flex-col justify-center items-center">
        <div className="justify-center items-center">
          {(winner==''?(<img src={head} alt="" className="scale-75 mt-14 mb-5" />):(<h1 className="text-green-900 bold text-6xl">{winner}Wins</h1>))}
          
        </div>
        <div className="flex flex-row ">
          <div className="mr-2 mt-3">
            <h1>Choose Your Team </h1>
          </div>
          <div>
            <input
              type="text"
              className="h-12 p-[5px] w-12"
              onChange={handleChangeTeamID}
            ></input>
          </div>
        </div>
        <div className="">
          <h1>Team 1: {score1}</h1>
          <h1>Team 2: {score2}</h1>
        </div>
        <div>
          <div>
            <div className="w-screen flex flex-col items-center h-screen">
              <div className="bg-white w-2/4 h-2/4 p-2 px-[95px]">
                {/* ee divinde porthek vannal win cheyum */}
                <div className="w-full bg-white h-full relative border-x-4 border-red-500 ">
                  {/* <div className="bg-green-500 h-1 "></div> */}
                  <div
                    style={{
                      right: `${right}%`,
                      transition: "right 200ms ease-in-out",
                    }}
                    className="border-2 p-1 w-2 bg-black border-black h-full absolute right-[50%]"
                  ></div>
                </div>
              </div>
              <button
                onClick={handleUserClick}
                className="bg-white rounded-lg px-4 mt-2 w-[100px] h-[100px] "
              >
                <img src={btn} className=""></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
