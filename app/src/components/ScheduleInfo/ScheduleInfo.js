import React from "react";
import { ScheduleInfoWrapper } from "./ScheduleInfo.style";

const ScheduleInfo = ({ row }) => {
  return (
    <ScheduleInfoWrapper>
      <p>{row.time}</p>
      <p>Language {row.language}</p>
      {row.imax == 'true' && <p>IMAX</p>}
      {row.three_dimensional == 'true' && <p>3D</p>}
    </ScheduleInfoWrapper>
  );
};
export default ScheduleInfo;
