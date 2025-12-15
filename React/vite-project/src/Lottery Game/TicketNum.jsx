//ticket.jsx will pass a single number as number prop
export default function TicketNum({ number }) {
    return (
        <span>{number}</span>
    );
}

//hierarchy of components: App -> Lottery -> Ticket -> TicketNum
//props can only be passed from top to bottom eg App to Lottery, Lottery to Ticket, Ticket to TicketNum