import React from "react";
import { Link } from "react-router-dom";
import BackgroundPic from "../../assets/icons/Stars2.jpg";
import AboutSwiper from "../../components/AboutInfo/AboutSwiper";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import ContactButton from "../../components/ContactForm/ContactButton";
import Footer from "../../components/Footer/Footer";

import {
  AboutBackground,
  StarsBackround,
  AboutInfoPart,
  AboutLeft,
  AboutTitleLeft,
  AboutTitlesRight,
  YouAre,
  Slash1,
  Home,
  Slash2,
  AboutRight,
} from "./About.style";

export default function About() {
  return (
    <AboutBackground>
      <StarsBackround
        style={{
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

      <Footer />

      <ContactButton />
    </AboutBackground>
  );
}
