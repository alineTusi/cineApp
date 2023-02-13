import styled from "@emotion/styled";

export const BodyContainer = styled.div`
  background-color: #000f2e;
  opacity: 0.9;
  font-size: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 36px;
  margin-top: 2em;
  border-top: 1px solid darkred;

  & p {
    margin: 4px 0;
    padding: 4px 8px;
    border-radius: 5px;
  }

  & span {
    color: #ff0000;
    font-size: x-large;
  }
`;

export const Container = styled.div`
  perspective: 1000px;
  margin-bottom: 30px;

  @media (max-width: 550px) {
    width: 320px;
  }
`;

export const UlShowcase = styled.ul`
  background: rgb(53 66 98 / 26%);
  padding: 5px 10px;
  border-radius: 5px;
  list-style: none;
  display: flex;
  justify-content: space-between;

  & li {
    display: flex;
    align-items: center;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    flex-shrink: 0;
  }
`;

export const ScreenContainer = styled.div`
  background: #ffffff;
  height: 70px;
  width: 100%;
  margin: 16px 0;
  transform: rotateX(-45deg);
  box-sizing: 0 3px 10px rgba(255, 255, 255, 0.7);
`;

const getSeatBackground = (seat) => {
  switch (seat) {
    case "occupied":
      return "#ffffff";
    case "selected":
      return "#be1515";
    case "empty":
      return "#444451";
    default:
      return "#444451";
  }
};

export const Seat = styled.div`
  background: ${(props) => getSeatBackground(props.status)};
  height: 18px;
  width: 18px;
  margin: 4px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &:nth-of-type(4) {
    margin-right: 16px;
  }

  &:nth-last-of-type(5) {
    margin-right: 16px;
  }

  @media (max-width: 550px) {
    margin: 2px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const CheckoutBtn = styled.button`
  background: #be1515;
  padding: 4px 12px;
  border-radius: 5px;
  color: white;
  font-size: large;
  border: 0;
  margin: 32px 0;

  &:hover {
    cursor: pointer;
    background-color: darkred;
  }
`;
