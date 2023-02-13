import styled from "@emotion/styled";
import Backgr from "../../assets/icons/loginbckgr.jpg"



export const MainRegisterContainer = styled.div`
    background-image: url(${Backgr});
    background-size: cover;
    width: 100%;
    height: 100%;


`;

export const Logo = styled.div`
      display: flex;
    align-items: center;
    padding-top:2em;
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


export const RegisterTitle = styled.div`
        display: flex;
        justify-content: center;
       & h1 {
        color: white;
       }


`;

export const InputFormContainer = styled.div`
        background-color: black;
        opacity: 0.9;
        display: flex;
        width: 50%;
        margin: auto;
        margin-top: 3em;
        border-radius: 0.8em;


`;