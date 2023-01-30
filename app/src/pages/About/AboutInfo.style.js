import styled from "@emotion/styled";

export const Background=styled.main`
background: black; 
height: auto;



`;


export const CameraBackroundPic=styled.div`
width: 100%;
height: 450px;

`;


export const Description=styled.div`
display: flex; 
flex-direction: column;
text-align: center;

color: white;
span{
    color: #de1002;
}


`;

export const AboutUsInfo=styled.h1`
margin-top: 30px;

@media only screen and (max-width: 1020px) {
    
      
      margin-top: 150px;
      
    }

`;

export const AboutUsText=styled.p`


`;

export const LearnMoreButton=styled.button`
margin:60px 0px 0px 690px;
width: 100px;
height: 50px;
background: none; 
color: white;
border-radius: red;
text-align: center;
border-color: #de1002; 


`;