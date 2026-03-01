import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  taskText: {
    type: String,
    required: true,
  },
});

const taskModel = new mongoose.model("Task", taskSchema);

export default taskModel;
