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
  SecondText,
  TextBoxFour,
  ThirdText,
  TextBoxFive,
  FourthText,
  TextBoxSix,
  FifthText,
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
            Cinema CineGAF is a renowned name in the film industry, with a
            history that has been shaped by innovation and a commitment to
            delivering an exceptional cinematic experience. <br></br>Over the
            past 16 years, the company has continued to evolve and stay ahead of
            the curve.
          </FirstText>
        </TextBoxTwo>
        <TextBoxThree data-aos="fade-left">
          {/*<h1> CineGAF the best movies</h1>*/}
          <SecondText>
            In the mid-2000s, Cinema CineGAF made a significant investment in
            digital projection systems and 3D technology, elevating the
            movie-going experience to new heights. The company also expanded its
            offerings, including alternative content such as live sports events
            and concerts in its lineup.
          </SecondText>
        </TextBoxThree>
        <TextBoxFour data-aos="fade-right">
          {/*<h1> CineGAF the best movies</h1>*/}
          <ThirdText>
            By the late 2000s, Cinema CineGAF had established itself as a leader
            in the film industry, renowned for its state-of-the-art technology,
            comfortable amenities, and sustainable practices. The company
            continued to grow, opening new locations and upgrading existing
            venues with the latest advancements.
          </ThirdText>
        </TextBoxFour>
        <TextBoxFive data-aos="fade-left">
          {/*<h1> CineGAF the best movies</h1>*/}
          <FourthText>
            In the early 2010s, Cinema CineGAF continued to push the boundaries
            of what was possible in the film industry. The company invested in
            high-resolution projection systems and premium sound systems,
            offering moviegoers a truly unparalleled experience.
          </FourthText>
        </TextBoxFive>
        <TextBoxSix data-aos="flip-left">
          {/*<h1> CineGAF the best movies</h1>*/}
          <FifthText>
            Today, Cinema CineGAF is a thriving chain of film venues with
            locations nationwide. The company remains dedicated to innovation,
            comfort, and sustainability, delivering moviegoers an exceptional
            and unforgettable experience.
          </FifthText>
        </TextBoxSix>
      </TextBoxes>
    </div>
  );
}

export default LearnMore;
