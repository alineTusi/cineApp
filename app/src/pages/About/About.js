import React from "react";
import { Link } from "react-router-dom";
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
  YouAre,
  Slash1,
  Home,
  Slash2,
  ConTact,
} from "./About.style";

export default function About() {
  return (
    <AboutBackground>
      <StarsBackround
        style={{
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
    </AboutBackground>
  );
}
