import { getScheduleQuery } from "./queries.js";
import { pool } from "../db.js";
import dateformat from "dateformat";

const formatDate = (date) => {
  return dateformat(new Date(date), "dd-mm-yyyy");
};

// GET Upcoming movies
export const getUpcomingSchedule = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getScheduleQuery, [id], (error, results) => {
    if (error) throw error;
    const days = [];
    for (const row of results.rows) {
      const day = days.find((x) => x.day === formatDate(row.date));
      if (day) {
        day.schedule.push(row);
      } else {
        days.push({
          day: formatDate(row.date),
          schedule: [row],
        });
      }
    }
    res.status(200).json(days);
  });
};
