import taskModel from "../models/tasks.js";

export const getAllTask = async (req, res) => {
  try {
    const allTasks = await taskModel.find();
    console.log(allTasks);
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

export const deleteTask = async (req, res) => {};
