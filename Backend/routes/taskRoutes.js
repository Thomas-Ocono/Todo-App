import express from "express";

import {
  getAllTask,
  createTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getAllTask);

router.post("/", createTask);

router.delete("/", deleteTask);

export default router;
