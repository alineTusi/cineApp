import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import ScheduleInfo from "../ScheduleInfo/ScheduleInfo";
import "./Schedule.css";

const ScheduleRow = ({ day }) => {

  const openInfo = (item) => {
    const url = `http://localhost:3000/room/${item}`;
    window.open(url)
  }
  
  return (
    <>
      <TableRow>
      <div className="schedule-date">{day.day}</div>
        {day.schedule.map((row, i) => (
          <>
            <TableCell component="th" scope="row" className="schedule-tcell">
              <div onClick={() => openInfo(row.id)}>
                <ScheduleInfo row={row} />
              </div>
            </TableCell>
          </>
        ))}
      </TableRow>
    </>
  );
};

const Schedule = ({ movieId }) => {
  const [rows, setrows] = useState([]);
  useEffect(() => {
    console.log(rows);
  }, [rows]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/schedule/movies/${movieId}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(function (response) {
      setrows(response.data);
    }).catch(e =>{
      console.log(e)
    });
  }, [movieId]); 

  return (
  
    <div className="scheduleWrapper">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableBody>
            {rows.map((row, i) => (
              <>
                <ScheduleRow day={row}></ScheduleRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>  );
};
export default Schedule;
