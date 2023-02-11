import styled from "@emotion/styled";
import BackgroundImg from "../../assets/icons/loginbckgr.jpg";

export const MainContainer = styled.div`
  background-image: url(${BackgroundImg});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2em;
  margin-left: 3em;
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

export const SignInContainer = styled.div`
  padding-top: 2em;
  background-color: black;
  width: 30%;
  margin: auto;
  padding-bottom: 1em;
  opacity: 0.9;
  border-radius: 0.8em;
  box-shadow: 0px 12px 15px black;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #ffffff;
    font-size: 35px;
    font-weight: 600;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

  & input {
    width: 300px;
    height: 40px;
    margin-top: 1em;
    padding-left: 1em;
    font-size: 15px;
    border: none;
    border-radius: 0.4em;
    box-shadow: 0px 15px 5px black;
    margin-bottom: 1em;
  }

  & a {
    color: #ffffff;
    text-decoration: none;
    margin: auto;
    margin-top: 1em;
    text-shadow: 0px 3px 2px black;
  }

  & a:hover {
    color: red;
    text-decoration: underline;
    text-shadow: 0px 1px 2px #151515;
  }

  & button {
    width: 200px;
    height: 40px;
    background-color: red;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    border: none;
    border-radius: 0.4em;
    margin-top: 1em;
    box-shadow: 0px 5px 2px black;
  }

  & button:hover {
    opacity: 0.8;
    transition: all 0.7s;
  }
`;


export const ModalContainer = styled.div`
     position: absolute;
     background-color: black;
     width: 400px;
     height: 200px;
     padding-top: 3em;
     padding-left: 3em;
     padding-bottom: 2em;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 0.5em;
      opacity: 0.9;
      border-radius: 0.8em;
      box-shadow: 0px 12px 15px black;
`;


export const ModalInput = styled.div`
      display: flex;
      flex-direction: column;
      width: 150px;
      



   & label {
      color: red;
      font-size: 18px;
      padding-bottom:1em;
     }

  & input {
    width: 300px;
    height: 40px;
    font-size: 15px;
    border: none;
    border-radius: 0.4em;
    box-shadow: 0px 15px 5px black;
    margin-bottom: 1em;
    padding-left: 1em;
  }

  & button {
    width: 200px;
    height: 40px;
    background-color: red;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    border: none;
    border-radius: 0.4em;
    margin-top: 1em;
    box-shadow: 0px 5px 2px black;
  }

  & button:hover {
    opacity: 0.8;
    transition: all 0.7s;
  }
`;

