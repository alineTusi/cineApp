import {
  createMovieQuery,
  deleteMovieQuery,
  getMovieByIdQuery,
  listMovieQuery,
  listMovieBannerQuery,
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

// GET simple
export const getMoviesBanner = (req, res) => {
  pool.query(listMovieBannerQuery, (error, results) => {
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
  const { title, description, rating, start_date, end_date, genre, img_url, banner_url} = req.body;
  pool.query(
    createMovieQuery,
    [title, description, rating, start_date, end_date, genre, img_url, banner_url],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("The Movie was created.");
    }
  );
};

//UPDATE
export const updateMovie = (req, res) => {
  const id = parseInt(req.params.id);
  const  { title, description, rating, start_date, end_date, genre, img_url, banner_url } = req.body;
  //UPDATE movies SET title = $1, description = $2, rating = $3, start_date = $4, end_date = $5, genre = $6, img_url = $7 , banner_url = $8 where id = $9
  pool.query(updateMovieQuery,  [title, description, rating, start_date, end_date, genre, img_url, banner_url, id], (error, results) => {
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
