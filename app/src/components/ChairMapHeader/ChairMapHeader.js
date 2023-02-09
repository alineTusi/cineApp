import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const ChairMapHeader = () => {
  const [schedule, setSchedule] = useState({});
  const [movie, setMovie] = useState({});
  let { scheduleId } = useParams();
  let { movieId } = useParams();
  // let Date = schedule.date;

  useEffect(() => {
    
    if (scheduleId) {
      axios({
        method: "get",
        url: `http://localhost:3004/schedule/${scheduleId}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }).then(function (response) {
        setSchedule(response.data);
      });
    }
    console.log("scheduleId", scheduleId)
  }, [scheduleId]);


  useEffect(() => {

    if (schedule.movie_id) {
    
      axios({
        method: "get",
        url: `http://localhost:3004/movies/${schedule.movie_id}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }).then(function (response) {
        setMovie(response.data);
      });
    }
    console.log("schedule.date", schedule.date)
    console.log("schedule movie id", schedule.movie_id)
  }, [schedule]);

  return (
    <>
      <div></div>
      <div>
        <img src={movie.img_url} alt="movie cover" />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <h3>{format(new Date(), "yyyy-MM-dd kk:mm:ss")}</h3>
        <h3>{schedule.time}</h3>
        <h3>Room {schedule.room}</h3>
      </div>
    </>
  );
};
export default ChairMapHeader;
