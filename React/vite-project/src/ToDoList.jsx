import { useState } from "react";
//uuid to assign a unique key to each task
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  //array of objects to hold tasks with their unique ids
  let [tasks, setTasks] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  //create the new task as a state variable
  let [newToDo, setNewToDo] = useState("");

  let updateToDoValue = (event) => {
    setNewToDo(event.target.value);
  };

  let updateTasks = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { task: newToDo, id: uuidv4(), isDone: false },
    ]);
    setNewToDo("");
  };

  let deleteTask = (id) => {
    //delete a value in state by filtering it out
    console.log("deleting task with id:", id);
    let copy = tasks.filter((task) => task.id != id);
    setTasks(copy);
  };

  let markAsDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: true };
        }
        return task;
      })
    );
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      {/* new todo updates when input changes */}
      <input
        type="text"
        placeholder="enter task to add"
        value={newToDo}
        onChange={updateToDoValue}
      />
      {/* tasks is updated when button is clicked  */}
      <button onClick={updateTasks}>Add</button>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <span
                style={
                  task.isDone == true ? { textDecoration: "line-through" } : {}
                }
              >
                {task.task}
              </span>
              <button onClick={() => deleteTask(task.id)}>delete</button>
              <button onClick={() => markAsDone(task.id)}>Mark as done</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
