import express from "express";

import { getAllTask, createTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getAllTask);

router.post("/", createTask);

export default router;
