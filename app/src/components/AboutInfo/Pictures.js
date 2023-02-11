import React from "react";
import {
  CinemaPhotos,
  Photos,
  PhotoImage4,
  PhotoImage5,
  PhotoImage7,
} from "./Pictures.style";

import Picture4 from "../../assets/icons/Movie4.jpg";
import Picture5 from "../../assets/icons/Movie5.jpg";
import Picture7 from "../../assets/icons/Movie7.jpg";

export default function Icons() {
  return (
    <CinemaPhotos>
      <Photos>
        <PhotoImage4 src={Picture4} alt="" />
        <PhotoImage5 src={Picture5} alt="" />
        <PhotoImage7 src={Picture7} alt="" />
      </Photos>
    </CinemaPhotos>
  );
}
