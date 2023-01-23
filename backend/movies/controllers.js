import {
  createMovieQuery,
  deleteMovieQuery,
  getMovieByIdQuery,
  listMovieQuery,
  updateMovieQuery,
} from "../movies/queries.js";
import { pool } from "../db.js";

// GET simple
export const getMovies = (req, res) => {
  pool.query(listMovieQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// GET using ID
export const getMoviesById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getMovieByIdQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//POST
export const createMovie = (req, res) => {
  const { title, description, rating, start_date, end_date, genre } = req.body;
  pool.query(
    createMovieQuery,
    [title, description, rating, start_date, end_date, genre],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("The Movie was created.");
    }
  );
};

//UPDATE
export const updateMovie = (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;
  pool.query(updateMovieQuery, [title, id], (error, results) => {
    if (error) throw error;
    res.status(200).send("The Movie was updated.");
  });
};

//DELETE
export const deleteMovie = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(deleteMovieQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send("The Movie was deleted.");
  });
};
