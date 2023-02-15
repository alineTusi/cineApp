import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import BackgroundPic from "../../assets/icons/Cinema.jpg";
import {
  Welcome,
  TextBoxes,
  LogoBoxOne,
  FirstText,
  TextBoxTwo,
  SecondText,
  TextBoxThree,
  ThirdText,
  TextBoxFour,
  FourthText,
  TextBoxFive,
  FifthText,
  TextBoxSix,
  SixText,
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
          <FirstText>We Are CineGAF</FirstText>
        </LogoBoxOne>
        <TextBoxTwo data-aos="fade-right">
          <SecondText>
            In the 1960s, CineGAF underwent a major renovation and expansion,
            adding two additional screening rooms to its original grand hall.
            The cinema became known for its wide selection of foreign films, and
            quickly gained a reputation as a hub for independent cinema.
          </SecondText>
        </TextBoxTwo>
        <TextBoxThree data-aos="fade-left">
          <ThirdText>
            In the 1970s and 1980s, the cinema's bold programming choices,
            coupled with its innovative use of technology, made it one of the
            most important cultural institutions in the city.
          </ThirdText>
        </TextBoxThree>
        <TextBoxFour data-aos="fade-right">
          <FourthText>
            In the early 2000s, CineGAF experienced a renaissance. The rise of
            independent cinema and a renewed interest in foreign films led to a
            resurgence of interest in the cinema, and it became a popular
            destination for young, adventurous filmgoers.
          </FourthText>
        </TextBoxFour>
        <TextBoxFive data-aos="fade-left">
          <FifthText>
            In the early 2010s, Cinema CineGAF continued to push the boundaries
            of what was possible in the film industry. The company invested in
            high-resolution projection systems and premium sound systems,
            offering moviegoers a truly unparalleled experience.
          </FifthText>
        </TextBoxFive>
        <TextBoxSix data-aos="flip-left">
          <SixText>
            Today, CineGAF remains a vital part of the city's cultural
            landscape. CineGAF's storied history and enduring commitment to the
            art of cinema make it one of the most beloved and respected cinemas
            in the world.
          </SixText>
        </TextBoxSix>
      </TextBoxes>
    </div>
  );
}

export default LearnMore;
