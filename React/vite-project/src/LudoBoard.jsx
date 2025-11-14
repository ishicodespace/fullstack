import { use, useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let updateBlue = () => {
        setMoves(moves.blue + 1);
        console.log(moves.blue);
    }
    return (
        <div>
            <p>Game Begins</p>
            <div className="Board">
                <p>Blue</p>
                <button>{moves.blue}</button>
                <p>Red</p>
                <button>{moves.red}</button>   <p>Yellow</p>
                <button>{moves.yellow}</button>   <p>Green</p>
                <button>{moves.green}</button>
            </div>
        </div>
    )
}
