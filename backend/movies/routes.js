import express from "express";
import {
  getMovies,
  getMoviesById,
  createMovie,
  updateMovie,
  deleteMovie,
  getMoviesBanner,
} from "./controllers.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/banner", getMoviesBanner);
router.get("/:id", getMoviesById);
router.post("/", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
