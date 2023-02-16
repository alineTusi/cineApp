import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieInfo.css";
import { useParams } from "react-router-dom";
import starIcon from "../../assets/icons/starMovieInfo.svg";
import clockIcon from "../../assets/icons/clock.svg";
import Schedule from "../Schedule/Schedule";
import ResponsiveAppBar from "../NavBar/NavBar";

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  let { movieId } = useParams();

  useEffect(() => {

    axios({
      method: "get",
      url: `https://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/movies/${movieId}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(function (response) {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div key={movie.id} className="movie-info-container">
       <ResponsiveAppBar />
      <div className="movie-info-content">
        <div className="movie-info">
          <div className="movie-info-img-wrapper">


            <img className="movie-info-img" src={movie.img_url} alt="movie img"/>

          </div>
          <div className="movie-info-description-wrapper">
            <h1 className="movie-info-description-title">{movie.title}</h1>
            <ul className="movie-info-list">
              <li className="movie-info-list-item">
                <img
                  className="movie-info-icon"
                  src={starIcon}
                  alt="star icon"
                />
                {movie.rating}
              </li>
              <li className="movie-info-list-item">



                <img className="movie-info-icon" src={clockIcon} alt="clock icon" />

                {movie.movie_length} min
              </li>
              <li className="movie-info-list-item">{movie.genre}</li>
            </ul>
            <p className="movie-info-description"> {movie.description}</p>
          </div>
        </div>
        <Schedule movieId={movieId}/>
        <div className="video">
          <iframe
            className="video-iframe"
            src={movie.video_url}
            title="video"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
