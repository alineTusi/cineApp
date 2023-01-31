import { upcomingMovies } from "./mock.js";

// GET Upcoming movies
export const getUpcomingSchedule = (req, res) => {
  res.status(200).send(upcomingMovies);
};
