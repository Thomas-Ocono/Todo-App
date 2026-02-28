import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskText: {
    type: String,
    required: true,
  },
});

const taskModel = new mongoose.model("Task", taskSchema);
export default taskModel;
