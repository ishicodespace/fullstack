import { use, useState } from "react";
export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  function updateBlue() {
    //since blue new value depends on old value use callback form of setState
    setMoves((prevMoves) => ({
      ...prevMoves, //spread so it will re render and a change in object will be detected, new object is created
      blue: prevMoves.blue + 1,
    }));
  }

  function updateRed() {
    setMoves((prevMoves) => ({
      ...prevMoves, //spread operator to retain other colors' moves
      red: prevMoves.red + 1,
    }));
  }

  function updateYellow() {
    setMoves((prevMoves) => ({
      ...prevMoves, //spread operator to retain other colors' moves
      yellow: prevMoves.yellow + 1,
    }));
  }

  function updateGreen() {
    setMoves((prevMoves) => ({
      ...prevMoves, //spread operator to retain other colors' moves
      green: prevMoves.green + 1,
    }));
  }

  return (
    <div>
      <p>Game Begins</p>
      <div className="board"></div>
      <p>Blue Moves: {moves.blue} </p>
      <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
        +1
      </button>
      <p>Yellow Moves: {moves.yellow} </p>
      <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
        +1
      </button>
      <p>Green Moves: {moves.green} </p>
      <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
        +1
      </button>
      <p>Red Moves: {moves.red} </p>
      <button style={{ backgroundColor: "red" }} onClick={updateRed}>
        +1
      </button>
    </div>
  );
}
