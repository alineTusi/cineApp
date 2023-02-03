import express from "express";
import {
  getUpcomingSchedule
} from "./controllers.js";

const router = express.Router();

router.get("/:id", getUpcomingSchedule);

export default router;
