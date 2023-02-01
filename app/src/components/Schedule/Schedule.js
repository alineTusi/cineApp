import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { ScheduleWrapper } from "./Schedule.style";
import ScheduleInfo from "../ScheduleInfo/ScheduleInfo";
import "./Schedule.css";

const ScheduleRow = ({ day }) => {
  return (
    <>
      <TableRow>
        {day.schedule.map((row, i) => (
          <>
            <TableCell component="th" scope="row">
              <div>
                <ScheduleInfo row={row} />
              </div>
            </TableCell>
          </>
        ))}
      </TableRow>
    </>
  );
};

const Schedule = () => {
  const [rows, setrows] = useState([]);
  useEffect(() => {
    // console.log(rows);
  }, [rows]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3004/schedule",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(function (response) {
      setrows(response.data);
    });
  }, []);
  return (
    <ScheduleWrapper>
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
    </ScheduleWrapper>
  );
};
export default Schedule;
