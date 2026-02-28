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

app.use(express.json());

app.use("/task", taskRoutes);

app.listen(port, () => {
  console.log("Server is running on port 5001");
});
