import "./Task.css";
function Task({ taskText }) {
  return (
    <div className="task">
      <h1>{taskText}</h1>
      <button>Delete</button>
      <button>Update</button>
    </div>
  );
}

export default Task;
