import React from "react";
import { MainContainer,TitleContainer,InputContainer, SignInContainer, Logo } from "./LogIn.style";
import PopcornIcon from "../../assets/icons/popcorn.svg"



const Login = () =>{
    return (
        <MainContainer>
            <Logo>
                <img src={PopcornIcon} alt="popcorn"/>
                <p>CineGAF</p>
            </Logo>
            <SignInContainer>
                <TitleContainer>
                    <h1>Sign In</h1>
                </TitleContainer>
                    <InputContainer>
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <button>Submit</button>
                        <a href="/">Forgot password?</a>
                        <button>Create Account</button>
                    </InputContainer>
            </SignInContainer>
        </MainContainer>
    )
}


export default Login