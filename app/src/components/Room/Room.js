import React from "react";
import { useParams } from "react-router-dom";
import ChairMap from "../ChairMap/ChairMap";
import ChairMapHeader from "../ChairMapHeader/ChairMapHeader";
import ResponsiveAppBar from "../NavBar/NavBar";
import { RoomContainer } from "./Room.style";

const Room = () => {
  let { scheduleId } = useParams();

  return (
    <>
      <RoomContainer>
      <ResponsiveAppBar />
        <ChairMapHeader scheduleId={scheduleId} />
        <ChairMap scheduleId={scheduleId} />
      </RoomContainer>
    </>
  );
};
export default Room;
