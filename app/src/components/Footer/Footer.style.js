import styled from "@emotion/styled";
import backgroundImg from "../../assets/icons/black.jpg";

export const MainFooterContainer = styled.div`
  background-image: url(${backgroundImg});
  width: 80%;
  height: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  margin-top: 5em;
  opacity: 0.9;
  box-shadow: 0px 5px grey;
  border-radius: 0.4em;
`;

export const FooterContainerLeftAndRight = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const FooterContainerLeft = styled.div`
  margin-top: 2em;
  margin-left: 3em;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2em;
  & img {
    width: 40px;
    height: 50px;
  }

  & p {
    color: red;
    font-family: "Roboto Serif", serif;
    font-size: 30px;
    font-weight: 700;
    margin-left: 0.2em;
    text-align: center;
    text-shadow: 0px 1px 1px black;
  }
`;

export const FooterParagraph = styled.div`
  margin-top: 2em;

  & p {
    color: white;
    font-size: 18px;
    width: 55%;
    line-height: 1.5em;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2em;

  & img {
    width: 35px;
    height: 35px;
  }

  & p {
    color: white;
    font-size: 15px;
    width: 35%;
    margin-left: 1em;
    line-height: 1.5em;
    font-family: "Roboto Serif", serif;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const MailContainer = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;

  & img {
    width: 35px;
    height: 35px;
  }

  & p {
    color: white;
    font-size: 15px;
    width: 15%;
    margin-left: 1em;
    font-family: "Roboto Serif", serif;
  }
`;

export const PhoneContainer = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;

  & img {
    width: 35px;
    height: 35px;
  }

  & p {
    color: white;
    font-size: 15px;
    width: 25%;
    margin-left: 1em;
    font-family: "Roboto Serif", serif;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const FooterContainerRight = styled.div`
  margin-top: 6em;
  margin-left: 3em;

  @media (max-width: 768px) {
    margin-top: 3em;
  }
  & h4 {
    color: #ffffff;
    font-size: 26px;
  }
  & p {
    margin-top: 1em;
    color: #ffffff;
    font-size: 22px;
    line-height: 1.5em;
    font-family: "Roboto Serif", serif;
  }

  & span {
    color: red;
    margin-left: 0.3em;
    text-shadow: 0px 1px 1px black;
  }
  & input {
    margin-top: 2em;
    width: 200px;
    height: 30px;
    padding-left: 1em;
    font-size: 1.3em;

    @media (max-width: 768px) {
    }
  }

  & button {
    margin-left: 1em;
    width: 100px;
    height: 40px;
    cursor: pointer;
    background-color: red;
    color: #ffffff;
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: white;
    font-size: 16px;
    width: 35%;
    margin-left: 1em;
    font-family: "Roboto Serif", serif;

    @media (max-width: 768px) {
      width: 90%;
      margin-top: 1em;
    }
  }

  & span {
    color: red;
    margin-left: 0.3em;
    margin-right: 0.3em;
    font-family: "Roboto Serif", serif;
    font-size: 20px;
    font-weight: 600;
    text-shadow: 0px 1px 1px black;
  }

  & a {
    color: #ffffff;
    text-decoration: none;
    margin-left: 1em;
    font-family: "Roboto Serif", serif;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 3em;
  margin-top: 1em;

  & a {
    color: #ffffff;
    text-decoration: none;
    margin-left: 0.5em;
    font-size: 16px;
    font-weight: 600;
  }

  & a:hover {
    color: red;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3em;

  @media (max-width: 768px) {
    margin-top: 1em;
  }

  & img {
    width: 40px;
    height: 40px;
  }

  & img:hover {
    background-color: red;
    cursor: pointer;
  }
`;
