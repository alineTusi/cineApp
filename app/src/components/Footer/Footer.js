import React from "react";
import { MainFooterContainer,FooterContainerLeft, Logo,FooterParagraph, LocationContainer, MailContainer, PhoneContainer,FooterContainerRight, CopyrightContainer, IconsContainer, NavContainer, FooterContainerLeftAndRight } from "./Footer.style";
import PopcornIcon from "../../assets/icons/popcorn.svg"
import Location from "../../assets/icons/places.svg"
import Mail from "../../assets/icons/mail.svg"
import Phone from "../../assets/icons/phone.svg"
import FacebookIcon from "../../assets/icons/facebook.svg"
import InstagramIcon from "../../assets/icons/instagram.svg"
import TwitterIcon from "../../assets/icons/twitter.svg"


const Footer = () => {
return (
    <MainFooterContainer>
        <FooterContainerLeftAndRight>

                 <FooterContainerLeft>
                    <Logo>
                        <img src={PopcornIcon} alt="popcorn"/>
                        <p>CineGAF</p>
                    </Logo>
                    <FooterParagraph>
                        <p>
                        Lorem ipsum dolor sit amet consect etur adi pisicing elit sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet consect etur. 
                        </p>
                    </FooterParagraph>
                    <LocationContainer>
                        <img src={Location} alt="location"/> 
                        <p>7934 Beaver Ridge Rd. Oakland, CA 94603</p>
                    </LocationContainer>
                    <MailContainer>
                        <img src={Mail} alt="mail"/> 
                        <p>mail@example.com</p>
                    </MailContainer>
                    <PhoneContainer>
                        <img src={Phone} alt="phone"/> 
                        <p>+1 800 9123 456 78</p>
                    </PhoneContainer>
                </FooterContainerLeft>

                    <FooterContainerRight>
                        <h4>Sign  <span>NewsLetter</span></h4>
                        <p>Subscribe to our newsletter list to get latest news and updates from us</p>
                        <input type="email" placeholder="Email"></input>
                        <button>Subscribe</button>
                    </FooterContainerRight> 
                    
        </FooterContainerLeftAndRight> 
                        <IconsContainer>
                            <img src={FacebookIcon} alt="facebook"/>
                            <img src={InstagramIcon} alt="instagram"/>
                            <img src={TwitterIcon} alt="twitter"/>
                        </IconsContainer>
                        <NavContainer>
                            <a href="/">Home</a>
                            <a href="/">Contact Us</a>
                            <a href="/">About</a>
                        </NavContainer>
                        <CopyrightContainer>
                            <p>Copyright &#169; <span>CineGAF</span> All Rights Reserved </p>
                        </CopyrightContainer>
    </MainFooterContainer>
    )


}


export default Footer;