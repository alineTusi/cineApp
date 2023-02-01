import styled  from "@emotion/styled";
import BackgroundImg from "../../assets/icons/loginbckgr.jpg"
import { keyframes } from "@emotion/react";



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
    padding-top:2em;
    margin-left: 3em;
    & img {
        width: 40px;
        height: 50px;
   
    }

    & p {
        color: red;
        font-family: 'Roboto Serif', serif;
        font-size: 30px;
         font-weight: 700;
         margin-left: 0.2em;
         text-align: center;
         text-shadow: 0px 1px 1px black;
    }

`;

export const SignInContainer = styled.div`
        background-color: black;
        width: 500px;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        opacity: 0.9;
        border-radius: 0.9em;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5em;
    
    & h1 {
        color: #FFFFFF;
        font-size: 35px;
        font-weight: 600;
        margin-bottom: 1em;
        
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
        color: #FFFFFF;
        text-decoration: none;
        text-align: center;
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
        color: #FFFFFF;
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

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;
export const ModalContainer = styled.div`
    position: absolute;
    background-color: black;
    width: 600px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.9em;
    animation-name: ${breatheAnimation};
    animation-duration: 2s;
    animation-iteration-count: 1ms;


`;


export const ModalInput = styled.div`
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         margin-top: 50px;
         
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

         & button {
        width: 200px;
        height: 40px;
        background-color: red;
        font-size: 16px;
        font-weight: 600;
        color: #FFFFFF;
        cursor: pointer;
        border: none;
        border-radius: 0.4em;
        margin-top: 1em;
        box-shadow: 0px 5px 2px black;

    }


`;
