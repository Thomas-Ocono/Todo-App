import taskModel from "../models/tasks.js";

export const getTask = async (req, res) => {
  res.send("Hello dere");
};

export const createTask = async (req, res) => {
  res.send("Yee");
  console.log("Testing: " + req.body.taskText);
};

export const updateTask = async (req, res) => {};

export const deleteTask = async (req, res) => {};
