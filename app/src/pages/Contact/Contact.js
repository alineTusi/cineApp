import React from "react";
import { Link } from "react-router-dom";
import StarsBackground from "../../assets/icons/Stars2.jpg";
import ContactMap from "../../components/ContactForm/ContactMap";
import ContactButton from "../../components/ContactForm/ContactButton";
import ContactEmail from "../../components/ContactForm/ContactForm";
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
  CompanyLogo,
  CompanyAdressTitle,
  CompanyAdress,
  OfficeHoursePart,
  OfficeInfo,
  LogoOffice,
  OfficeHoursInfo,
  OfficeHoursTittle,
  EmailPart,
  EmailInfo,
  LogoEmail,
  Emails,
  EmailTittle,
  PhoneNumbersPart,
  PhoneInfo,
  LogoPhone,
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

      {/*Second Section*/}

      <CompanyAdressPart>
        <CompanyAdressInfo>
          <CompanyAdressTitle>
            <CompanyLogo></CompanyLogo>

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
            <LogoOffice></LogoOffice>

            <OfficeHoursTittle>Office Hours</OfficeHoursTittle>
          </OfficeInfo>

          <OfficeHoursInfo>
            Monday To Saturday - 10.00 -<br></br>07.00
            <br></br>Sunday - Closed
          </OfficeHoursInfo>
        </OfficeHoursePart>

        <EmailPart>
          <EmailInfo>
            <LogoEmail></LogoEmail>

            <EmailTittle>Email</EmailTittle>
          </EmailInfo>

          <Emails>
            info@example.com
            <br></br>admin@example.com
          </Emails>
        </EmailPart>

        <PhoneNumbersPart>
          <PhoneInfo>
            <LogoPhone></LogoPhone>

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

      <ContactButton />
    </ContactPage>
  );
}
