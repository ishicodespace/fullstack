import { useState } from "react";
import "./Lottery.css";
import Ticket from "./Ticket.jsx";

//app.jsx will pass n and winningSum as props
export default function Lottery({ n, winningSum }) {
  let [lotteryTicket, setLotteryTicket] = useState(generateArray(n));
  let isWinner = sum(lotteryTicket) === winningSum;

  function generateArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
  }

  function sum(lotteryTicket) {
    return lotteryTicket.reduce((sum, curr) => sum + curr, 0);
  }

  function buyTicket() {
    setLotteryTicket(generateArray(n));
  }

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticketArray={lotteryTicket} />
      <button onClick={buyTicket}>Buy new ticket</button>
      <h3>{isWinner ? "You win!" : " "}</h3>
    </div>
  );
}
