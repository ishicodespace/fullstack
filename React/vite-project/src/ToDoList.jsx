import { useState } from "react";

export default function ToDoList() {
  let [tasks, setTasks] = useState(["eat"]);
  let [newToDo, setNewToDo] = useState("");
  function addTask() {
    let updatedTasks = [...tasks, newToDo];
    setTasks(updatedTasks);
    setNewToDo("");
  }

  return (
    <div>
      <h1>TO DO LIST</h1>
      <input
        type="text"
        placeholder="enter task to add"zz
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />

      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => {
          return <li>{task}</li>;
        })}
      </ul>
    </div>
  );
}
