import React from "react";
import { Link } from "react-router-dom";
import StarsBackground from "../../assets/icons/Stars2.jpg";
import ContactMap from "../../components/ContactForm/ContactMap";
import ContactButton from "../../components/ContactForm/ContactButton";
import ContactEmail from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import {
  ContactPage,
  Stars,
  ContactInfo,
  ContactInfoLeft,
  ContactTitlesRight,
  YouAreHere,
  Slash1,
  HomeInfo,
  Slash2,
  ContactInfoRight,
  CompanyAdressPart,
  CompanyAdressInfo,
  AdressTitle,
  CompanyAdressTitle,
  CompanyAdress,
  OfficeHoursePart,
  OfficeInfo,
  OfficeHoursInfo,
  OfficeHoursTittle,
  EmailPart,
  EmailInfo,
  Emails,
  EmailTittle,
  PhoneNumbersPart,
  PhoneInfo,
  PhoneNumbers,
  PhoneNumbersTittle,
  Map,
} from "./Contact.style";

export default function Contact() {
  return (
    <ContactPage>
      <Stars
        style={{
          backgroundImage: `url(${StarsBackground})`,
          backgroundSize: "cover",
        }}
      >
        <ContactInfo>
          <div>
            <ContactInfoLeft>Contact</ContactInfoLeft>
          </div>

          <ContactTitlesRight>
            <YouAreHere>You are here:</YouAreHere>
            <Slash1>/</Slash1>
            <Link style={{ textDecoration: "none" }} to="/">
              <HomeInfo>Home</HomeInfo>
            </Link>
            <Slash2>/</Slash2>
            <ContactInfoRight>Contact</ContactInfoRight>
          </ContactTitlesRight>
        </ContactInfo>
      </Stars>

      <CompanyAdressPart>
        <CompanyAdressInfo>
          <CompanyAdressTitle>
            <AdressTitle>Company Adress</AdressTitle>
          </CompanyAdressTitle>

          <CompanyAdress>
            26 Edgefield Court
            <br></br>New Brunswick, NJ 08901
            <br></br>4463 Ash Avenue
          </CompanyAdress>
        </CompanyAdressInfo>

        <OfficeHoursePart>
          <OfficeInfo>
            <OfficeHoursTittle>Office Hours</OfficeHoursTittle>
          </OfficeInfo>

          <OfficeHoursInfo>
            Monday To Saturday - 10.00 -<br></br>07.00
            <br></br>Sunday - Closed
          </OfficeHoursInfo>
        </OfficeHoursePart>

        <EmailPart>
          <EmailInfo>
            <EmailTittle>Email</EmailTittle>
          </EmailInfo>

          <Emails>
            info@example.com
            <br></br>admin@example.com
          </Emails>
        </EmailPart>

        <PhoneNumbersPart>
          <PhoneInfo>
            <PhoneNumbersTittle>PhoneNumbers</PhoneNumbersTittle>
          </PhoneInfo>

          <PhoneNumbers>
            +90-80033-93704
            <br></br>+90-80033-96875
          </PhoneNumbers>
        </PhoneNumbersPart>
      </CompanyAdressPart>

      <div>
        <ContactEmail />
      </div>

      <Map>
        <ContactMap />
      </Map>

      <Footer />
      <ContactButton />
    </ContactPage>
  );
}
