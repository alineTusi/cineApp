import styled from "@emotion/styled";

export const Background = styled.main``;

export const CameraBackroundPic = styled.div`
  width: 100%;
  height: 450px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  span {
    color: #de1002;
  }
`;

export const AboutUsTitle = styled.h1`
  margin-top: 80px;

  @media only screen and (max-width: 1020px) {
     {
      margin-top: 80px;
    }
  }
`;

export const AboutUsText = styled.p`
  @media only screen and (max-width: 1020px) {
     {
      margin-top: 0px;
    }
  }
`;

export const LearnMore = styled.div`
  display: flex;
  justify-content: center;
`;

export const LearnMoreButton = styled.button`
  margin-top: 30px;
  width: 100px;
  height: 50px;
  background: none;
  color: white;
  border-radius: red;
  border-color: #de1002;

  @media only screen and (max-width: 1020px) {
     {
      margin: auto;
    }
  }
`;
