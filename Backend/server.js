import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
dotenv.config();
const port = process.env.PORT;

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to database!");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
};

connectToDB();

const testSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const testModel = new mongoose.model("test", testSchema);

const testing = async () => {
  const savingTest = new testModel({
    user: "Micheal Jackson",
    text: "Greatest musician Yeetle deetle with a beetle",
  });
  try {
    await savingTest.save();
    console.log("data added!");
  } catch (error) {
    console.log(error);
    console.log("Error saving data");
  }
};

app.use("/task", taskRoutes);

app.listen(port, () => {
  console.log("Server is running on port 5001");
});
