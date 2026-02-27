import express from "express";

import { getTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTask);

export default router;
