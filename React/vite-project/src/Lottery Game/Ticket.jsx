import TicketNum from "./TicketNum";

//lottery.jsx will pass an array of numbers as ticketArray prop
export default function Ticket({ ticketArray }) {
  return (
    <>
      {/* map through the ticketArray and render TicketNum for each number */}
      {ticketArray.map((num, index) => (
        <TicketNum key={index} number={num} />
      ))}
    </>
  );
}
