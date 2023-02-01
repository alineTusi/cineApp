import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieInfo.css";
import { useParams } from "react-router-dom";
import starIcon from "../../assets/icons/starMovieInfo.svg";
import clockIcon from "../../assets/icons/clock.svg";

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  let { movieId } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3004/movies/${movieId}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(function (response) {
      setMovie(response.data);
    });
  }, []);

  return (
    <div className="movie-info-container">
      <div className="movie-info-content">
        <div className="movie-info">
          <div className="movie-info-img-wrapper">
            <img className="movie-info-img" src={movie.img_url} />
          </div>
          <div className="movie-info-description-wrapper">
            <h1 className="movie-info-description-title">{movie.title}</h1>
            <ul className="movie-info-list">
              <li className="movie-info-list-item">
                <img className="movie-info-icon" src={starIcon} alt="star icon" />
                {movie.rating}
              </li>
              <li className="movie-info-list-item">
                <img className="movie-info-icon" src={clockIcon}  />
                {movie.movie_length} min
              </li>
              <li className="movie-info-list-item">{movie.genre}</li>
            </ul>
            <p className="movie-info-description"> {movie.description}</p>
          </div>
        </div>

        <div className="video">
          <iframe
            className="video-iframe"
            src={movie.video_url}
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
