// any state update triggers a re-render of that component.
import { useState } from "react";

export default function Count() {
  //rerendered every time state changes

  let [count, setCount] = useState(0); //array destructuring because useState returns an array of two elements
  console.log("component is rendered");
  console.log(count);

  let Increment = () => {
    setCount(count + 1); // schedules an update
    console.log("inside increment " + count); // shows the old value due to closure
  };
  return (
    <div>
      <h3>Count ={count}</h3>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}
