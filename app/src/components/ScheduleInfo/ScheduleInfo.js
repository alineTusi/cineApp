import React from "react";
import { ScheduleInfoWrapper } from "./ScheduleInfo.style";

const ScheduleInfo = ({ row }) => {
  return (
    <ScheduleInfoWrapper>
      <>
        <p>{row.time}</p>
        <p>Language {row.language}</p>
        {row.imax && <p>IMAX</p>}
        {row.three_dimensional && <p>3D</p>}
        {/* {<p>Room</p> && row.room} */}
      </>
    </ScheduleInfoWrapper>
  );
};
export default ScheduleInfo;
