import { useState } from "react";

export default function ToDoList() {
  let [tasks, setTasks] = useState(["eat"]);
  let [newToDo, setNewToDo] = useState("");

  

  return (
    <div>
      <h1>TO DO LIST</h1>
      <input type="text" placeholder="enter task to add" />
      <button>Add</button>
      <ul>
        {tasks.map((task) => {
          return <li>{task}</li>;
        })}
      </ul>
    </div>
  );
}
