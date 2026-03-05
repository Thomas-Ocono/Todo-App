import "./ToDo.css";
import Task from "./Task.jsx";
import { useState, useEffect } from "react";

const exampleTasks = ["Laundry", "Walk the Dog", "Exercise"];

function ToDo() {
  const [loading, setLoading] = useState(true);
  const [taskData, setTaskData] = useState([]);
  const test = "Hello";
  const yeet = async () => {
    console.log(taskData);
  };

  const testLoading = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    }
    let displayData = "";
    taskData.map((element) => {
      displayData = displayData + element.taskText;
    });
    return <Task taskText={displayData} />;
  };

  useEffect(() => {
    console.log("getting data");
    fetch("http://localhost:5001/task")
      .then((response) => response.json())
      .then((data) => {
        console.log("got data");
        setTaskData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error + "Error getting data"));
  }, []);

  return (
    <div className="todo">
      <input type="text" id="task-input" />
      <button id="addTaskBtn">Add Task</button>
      {testLoading()}
    </div>
  );
}

export default ToDo;
