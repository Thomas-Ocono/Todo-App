import "./ToDo.css";
import Task from "./Task.jsx";
import { useState, useEffect } from "react";

const exampleTasks = ["Laundry", "Walk the Dog", "Exercise"];

const yeet = async () => {
  fetch("http://localhost:5001/task")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error: " + error));
};

function ToDo() {
  return (
    <div className="todo">
      <input type="text" id="task-input" />
      <button id="addTaskBtn">Add Task</button>
      {exampleTasks.map((element) => (
        <Task taskText={element} />
      ))}
      <button onClick={yeet}>Yeet</button>
      1337
    </div>
  );
}

export default ToDo;
