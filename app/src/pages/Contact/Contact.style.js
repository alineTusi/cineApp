import styled from "@emotion/styled";

export const ContactPage = styled.main`
  background-color: black;
  height: 100%;
  margin: 0%;
  padding: 0%;
`;

export const Stars = styled.div`
  width: 100%;
  height: 250px;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: rgba(37, 34, 34, 0.5);
  margin-top: 90px;
  height: 95px;
  position: absolute;

  @media only screen and (max-width: 1020px) {
    {
     display: block;
     margin-top: 80px;
     width: 97%;
    }

`;

export const ContactInfoLeft = styled.h3`
  color: white;
  font-family: "Roboto Serif", serif;
  font-size: 30px;
  
@media only screen and (max-width: 1020px) {
  {
    text-align: center;

     }
`;

export const ContactTitlesRight = styled.div`
  display: flex;
  justify-content: center;
`;

export const YouAreHere = styled.h4`
  color: white;
  font-family: "Roboto Serif", serif;
  font-size: 20px;
  padding: 13px 0px 0px 10px;
`;

export const Slash1 = styled.p`
  color: white;
  padding: 27px 0px 0px 10px;
`;

export const HomeInfo = styled.h4`
  color: red;
  font-family: "Roboto Serif", serif;
  font-size: 20px;
  text-decoration: none;
  padding: 15px 0px 0px 10px;
`;

export const Slash2 = styled.p`
  color: white;
  padding: 28px 0px 0px 10px;
`;

export const ContactInfoRight = styled.h4`
  color: white;
  font-family: "Roboto Serif", serif;
  font-size: 20px;

  padding: 15px 0px 0px 10px;
`;

export const CompanyAdressPart = styled.div`
display: flex;
background-color: #181818; 
margin: 30px auto;
height: 180px;
width: 67%;
color:white;


@media only screen and (max-width: 1020px) {
    {
      width: 0%;
      height: 0%;
      margin:0px;
      color: none;
    }
`;

export const CompanyAdressInfo = styled.div`
margin-left:65px;

@media only screen and (max-width: 1020px) {
    {
     margin: 0px;
      }
      
`;

export const CompanyAdressTitle = styled.div`
display: flex; 
margin: 20px 0px 0px 20px;

@media only screen and (max-width: 1020px) {
     {
     margin-left: 0px;
      
    }

`;

export const AdressTitle = styled.h3`
margin-left: 20px;
font-family: "Roboto Serif", serif;
font-size: 18px;
color: #de1002;

@media only screen and (max-width: 1020px) {
     {
      width: 0%;
      margin-left: 0px;
      font-size: 0px;
      font-family:none;
      
    }

`;

export const CompanyAdress = styled.p`
margin-left: 40px;
font-family: "Roboto Serif", serif;

@media only screen and (max-width: 1020px) {
    {
     margin:0px;
      width: 0%;
      font-size: 0px;
    }

`;

export const OfficeHoursePart = styled.div``;

export const OfficeInfo = styled.div`
display: flex; 
margin: 20px 0px 0px 20px;

@media only screen and (max-width: 1020px) {
            {
                margin: 0px;
              }
`;

export const OfficeHoursTittle = styled.h3`

margin-left: 30px;
font-family: "Roboto Serif", serif;
font-size: 18px;
color:#de1002;

@media only screen and (max-width: 1020px) {
    {
      width: 0%;
      margin-left: 0px;
      font-size: 0px;
      font-family:none;
    }
`;

export const OfficeHoursInfo = styled.p`

margin-left: 50px;
font-family: "Roboto Serif", serif;

@media only screen and (max-width: 1020px) {
    {
        margin:0px;
        width: 0%;
        font-size: 0px;
      }
`;

export const EmailPart = styled.div``;

export const EmailInfo = styled.div`
display: flex; 
margin: 20px 0px 0px 20px;

@media only screen and (max-width: 1020px) {
    {
        margin:0px;
    }
`;

export const EmailTittle = styled.h3`
margin-left: 30px;
font-family: "Roboto Serif", serif;
font-size: 18px;
color: #de1002;

@media only screen and (max-width: 1020px) {
    {
        margin:0px;
        width: 0%;
        font-size: 0px;
      }
`;

export const Emails = styled.p`
margin-left: 50px;
font-family: "Roboto Serif", serif;

@media only screen and (max-width: 1020px) {
    {
        margin:0px;
        width: 0%;
        font-size: 0px;
      }
`;

export const PhoneNumbersPart = styled.div``;

export const PhoneInfo = styled.div`
display: flex; 
margin: 20px 0px 0px 20px;

@media only screen and (max-width: 1020px) {
    {
        margin:0px;
    }
`;

export const PhoneNumbersTittle = styled.h3`
margin-left: 30px;
font-family: "Roboto Serif", serif;
font-size: 18px;
color: #de1002;

@media only screen and (max-width: 1020px) {
    {
        margin:0px;
        width: 0%;
        font-size: 0px;
      }
`;

export const PhoneNumbers = styled.p`
margin-left: 50px;

@media only screen and (max-width: 1020px) {
    {
        margin:0px;
        width: 0%;
        font-size: 0px;
    }
`;

export const Map = styled.div`
  margin-top: 50px;
`;
