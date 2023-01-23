import express from "express";
import {
  getMovies,
  getMoviesById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "./controllers.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMoviesById);
router.post("/", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
