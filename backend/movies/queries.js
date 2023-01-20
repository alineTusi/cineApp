export const listMovieQuery = "SELECT * FROM movies";
export const getMovieByIdQuery = "SELECT * FROM movies WHERE id = $1";
export const createMovieQuery = `INSERT INTO movies (
  title,
  description,
  rating,
  start_date,
  end_date,
  genre
) VALUES ($1, $2, $3, $4, $5, $6 )`;
export const updateMovieQuery = "UPDATE movies SET title = $1 where id = $2";
export const deleteMovieQuery = "DELETE FROM movies where id = $1";

