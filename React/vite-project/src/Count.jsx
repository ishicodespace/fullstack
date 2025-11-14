import { useState } from "react";
export default function Count(){
    let [count,setcount]=useState(0);
    function increment(){
        setcount(count + 1);
        console.log(count);
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}