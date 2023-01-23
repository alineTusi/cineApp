export const listMovieQuery = "SELECT * FROM movies";
export const listMovieBannerQuery = `SELECT * FROM movies where banner_url IS NOT NULL AND banner_url !='';`;
export const getMovieByIdQuery = "SELECT * FROM movies WHERE id = $1";
export const createMovieQuery = `INSERT INTO movies (
  title,
  description,
  rating,
  start_date,
  end_date,
  genre,
  img_url,
  banner_url
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 )`;
export const updateMovieQuery = "UPDATE movies SET title = $1, description = $2, rating = $3, start_date = $4, end_date = $5, genre = $6, img_url = $7 , banner_url = $8 where id = $9";
export const deleteMovieQuery = "DELETE FROM movies where id = $1";