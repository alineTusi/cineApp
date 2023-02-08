import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import BackgroundPic from "../../assets/icons/Stars2.jpg";
import AboutSwiper from "../../components/AboutInfo/AboutSwiper";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import ContactButton from "../../components/ContactForm/ContactButton";

import Icons from "../../components/AboutInfo/Logos";
import {
  AboutBackground,
  StarsBackround,
  AboutInfoPart,
  AboutLeft,
  AboutTitleLeft,
  AboutTitlesRight,
=======
// import BackgroundPic from "../../assets/icons/Stars2.jpg";
import AboutSwiper from "./AboutSwiper";
// import AboutInfo from "./AboutInfo";

// import Icons from "./Logos";
import {
  AboutBackground,
  StarsBackround,
  ContactPart,
  BoxContact,
  OverlayContact,
  ConTitle,
  ConInfo,
  ListInfo,
>>>>>>> 7da6b1d1e620517316ed67fc657b1216df295658
  YouAre,
  Slash1,
  Home,
  Slash2,
<<<<<<< HEAD
  AboutRight,
=======
  ConTact,
>>>>>>> 7da6b1d1e620517316ed67fc657b1216df295658
} from "./About.style";

export default function About() {
  return (
    <AboutBackground>
      <StarsBackround
        style={{
<<<<<<< HEAD
          backgroundImage: `url(${BackgroundPic})`,
          backgroundSize: "cover",
        }}
      >
        <AboutInfoPart>
          <AboutLeft>
            <AboutTitleLeft>About </AboutTitleLeft>
          </AboutLeft>

          <AboutTitlesRight>
            <YouAre>You are here:</YouAre>

            <Slash1>/</Slash1>

            <Link style={{ textDecoration: "none" }} to="/">
              <Home>Home</Home>
            </Link>

            <Slash2>/</Slash2>

            <AboutRight>About</AboutRight>
          </AboutTitlesRight>
        </AboutInfoPart>
      </StarsBackround>

      <div>
        <AboutInfo />
      </div>

      <div>
        <AboutSwiper />
      </div>

      <div>
        <Icons />
      </div>

      <ContactButton />
=======
          // backgroundImage: `url(${BackgroundPic})`,
          backgroundSize: "cover",
        }}
      >
        <ContactPart>
          <BoxContact></BoxContact>

          <OverlayContact>
            <ConTitle>
              <h3>About</h3>
            </ConTitle>

            <ConInfo>
              <ListInfo>
                <YouAre>You are here:</YouAre>

                <Slash1>/</Slash1>

                <Link style={{ textDecoration: "none" }} to="/">
                  <Home>Home</Home>
                </Link>

                <Slash2>/</Slash2>

                <ConTact>About</ConTact>
              </ListInfo>
            </ConInfo>
          </OverlayContact>
        </ContactPart>
      </StarsBackround>

      <div>
        {/* <AboutInfo /> */}
      </div>

      <div>
        <AboutSwiper />
      </div>

      <div>
        {/* <Icons /> */}
      </div>
>>>>>>> 7da6b1d1e620517316ed67fc657b1216df295658
    </AboutBackground>
  );
}
