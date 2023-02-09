import styled from "@emotion/styled";

export const ChairMapHeaderContainer = styled.div`
  background-color: #000f2e;
  opacity: 0.9;
  border-bottom: 2px solid darkred;
  width: 100%;
  display: flex;
  padding: 16px;
  box-sizing: border-box;
  @media (max-width: 400px) {
    flex-direction: column;
    flex-shrink: 0;
  }
`;

export const ChairMapHeaderImg = styled.div`
  width: 200px;
  padding-right: 16px;
  padding-bottom: 16px;
  & img {
    width: 100%;
  }
  @media (max-width: 600px) {
    max-width: 80%;
    flex-shrink: 0;
  }
`;

export const ChairMapHeaderInfo = styled.div`
  width: 100%;
  & h3 {
    width: 100%;
    color: white;
    font-family: "Roboto", serif;
  }
  @media (min-width: 600px) {
    font-size: 22px;
  }
`;
