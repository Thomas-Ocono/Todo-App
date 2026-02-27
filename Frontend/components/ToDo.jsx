import "./ToDo.css";
import Task from "./Task.jsx";

const exampleTasks = ["Laundry", "Walk the Dog", "Exercise"];

function ToDo() {
  return (
    <div className="todo">
      <input type="text" id="task-input" />
      <button id="addTaskBtn">Add Task</button>
      <Task taskText={"Yeet"} />
    </div>
  );
}

export default ToDo;
