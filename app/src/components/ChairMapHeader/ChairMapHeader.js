import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import {
  ChairMapHeaderContainer,
  ChairMapHeaderImg,
  ChairMapHeaderInfo,
} from "./ChairMapHeader.style.js";

const ChairMapHeader = () => {
  const [schedule, setSchedule] = useState({});
  const [movie, setMovie] = useState({});
  let { scheduleId } = useParams();

  useEffect(() => {
    if (scheduleId) {
      axios({
        method: "get",
        url: `https://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/schedule/${scheduleId}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }).then(function (response) {
        setSchedule(response.data);
      });
    }
  }, [scheduleId]);

  useEffect(() => {
    if (schedule.movie_id) {
      axios({
        method: "get",
        url: `https://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/movies/${schedule.movie_id}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }).then(function (response) {
        setMovie(response.data);
      });
    }
  }, [schedule]);

  const formatDate = (date) => {
    if (!date) {
      return "";
    }
    return format(new Date(date), "dd-MM-yyyy");
  };

  return (
    <>
      <ChairMapHeaderContainer>
        <ChairMapHeaderImg>
          <img src={movie.img_url} alt="movie cover" />
        </ChairMapHeaderImg>
        <ChairMapHeaderInfo>
          <h3>{movie.title}</h3>
          <h3>
            {formatDate(schedule.date)} | {schedule.time}
          </h3>
          <h3>Room {schedule.room}</h3>
        </ChairMapHeaderInfo>
      </ChairMapHeaderContainer>
    </>
  );
};
export default ChairMapHeader;
