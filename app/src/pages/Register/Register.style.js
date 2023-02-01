import styled from "@emotion/styled";
import BackgroundImg from "../../assets/icons/loginbckgr.jpg"


export const MainRegisterContainer = styled.div` 
        background-image: url(${BackgroundImg});
        background-size: cover;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        
        
        @media (max-width: 1024px) {
           display: block;
           height: 100%;
    } 
        
        @media (max-width: 768px) {
           display: block;
           height: 100%;
           width: 100%;
           

}

            @media (max-width: 450px) {
                    display: block;
                    height: 100%;
                    width: 100%;
                    
            }

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

export const RegisterTitle = styled.main` 
    display: flex;
    justify-content: center;

    & h1 {
        color: #FFFFFF;
    }

`; 

export const InputFormContainer = styled.div` 
    display: flex;
    flex-wrap: wrap;
    background-color: black;
    width: 750px;
    height: 920px;
    margin: auto;
    margin-top: 2em;
    padding-top: 2em;
    opacity: 0.9;
    border-radius: 0.9em;

    @media (max-width: 768px) {
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           width: 100%;
           

}

`; 

