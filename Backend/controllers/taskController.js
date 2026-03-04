import taskModel from "../models/tasks.js";

export const getAllTask = async (req, res) => {
  try {
    const allTasks = await taskModel.find();
    console.log(allTasks);
    res.json(allTasks);
  } catch (error) {
    console.log(error);
    console.log("Error getting all tasks");
  }
};

export const createTask = async (req, res) => {
  try {
    const { user, category, taskText } = req.body;
    const newTask = new taskModel({
      user: user,
      category: category,
      taskText: taskText,
    });
    await newTask.save();
    res.status(200).json({ message: "New Task created" });
  } catch (error) {
    console.log(error);
    console.log("Error creating task");
    res.json({ message: "Error creating task" });
  }
};

export const updateTask = async (req, res) => {};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.body._id;
    const foundTask = await taskModel.find({ _id: taskId });
    if (foundTask[0] == null) {
      console.log("Task not found");
      res.json({ message: "Task not found" });
      return;
    }
    await taskModel.deleteOne({ _id: foundTask[0]._id });
    res.json({ message: "Task successfully deleted" });
  } catch (error) {
    console.log(error);
    console.log("Error deleting task");
    res.json({ message: "Error deleting task" });
  }
};
