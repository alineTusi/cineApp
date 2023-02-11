import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import BackgroundPic from "../../assets/icons/Cinema.jpg";
import {
  Welcome,
  TextBoxes,
  LogoBoxOne,
  CineGAF,
  TextBoxTwo,
  FirstText,
  TextBoxThree,
  TextBoxFour,
  TextBoxFive,
  TextBoxSix,
} from "./LearnMore.style";
function LearnMore() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundPic})`,
        backgroundSize: "100%",

        textAlign: "center",
      }}
    >
      <Welcome>Welcome</Welcome>
      <TextBoxes>
        <LogoBoxOne data-aos="flip-right">
          <CineGAF>We Are CineGAF</CineGAF>
        </LogoBoxOne>
        <TextBoxTwo data-aos="fade-right">
          <FirstText>
            rpniwrpnbnpwnrnwrn <br></br>
            rnbowrnbonbnrwwrbbron<br></br>
            rnbrwnbwnpwpibbnbpnewenb<br></br>
          </FirstText>
        </TextBoxTwo>
        <TextBoxThree data-aos="fade-left">
          <h1> CineGAF the best movies</h1>
          <p>
            nspbnrwpsnnrnpbpbpbprnnnp <br></br>
            bwpbpwnepnpwenpew<br></br>bnwpenbpnwbepbpbwpe
          </p>
        </TextBoxThree>
        <TextBoxFour data-aos="fade-right">
          <h1> CineGAF the best movies</h1>
          <p>
            nspbnrwpsnnrnpbpbpbprnnnp <br></br>
            bwpbpwnepnpwenpew<br></br>bnwpenbpnwbepbpbwpe
          </p>
        </TextBoxFour>
        <TextBoxFive data-aos="fade-left">
          <h1> CineGAF the best movies</h1>
          <p>
            nspbnrwpsnnrnpbpbpbprnnnp <br></br>
            bwpbpwnepnpwenpew<br></br>bnwpenbpnwbepbpbwpe
          </p>
        </TextBoxFive>
        <TextBoxSix data-aos="flip-left">
          <h1> CineGAF the best movies</h1>
          <p>
            nspbnrwpsnnrnpbpbpbprnnnp <br></br>
            bwpbpwnepnpwenpew<br></br>bnwpenbpnwbepbpbwpe
          </p>
        </TextBoxSix>
      </TextBoxes>
    </div>
  );
}

export default LearnMore;
