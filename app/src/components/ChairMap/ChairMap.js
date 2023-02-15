import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Seat,
  Row,
  Container,
  BodyContainer,
  UlShowcase,
  ScreenContainer,
  CheckoutBtn,
} from "./ChairMap.Style";

const ChairMap = ({ scheduleId }) => {
  const [seats, setSeats] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [totalSelected, setTotalSelected] = useState(0);
  const [refetch, setRefetch] = useState(0);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/chair/calendar/${scheduleId}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        setSeats(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [scheduleId, refetch]);

  useEffect(() => {
    const selectedSeats = seats.filter((s) => s.status === "selected");

    setTotalValue(selectedSeats.length * 15);
    setTotalSelected(selectedSeats.length);
  }, [seats]);

  const onSeatClick = (seat) => {
    const updatedSeats = [...seats];
    const selectedSeat = updatedSeats.find(
      (s) => s.row === seat.row && s.column === seat.column
    );

    if (selectedSeat.status === "occupied") {
      return;
    }

    if (selectedSeat.status === "selected") {
      selectedSeat.status = "empty";
    } else {
      selectedSeat.status = "selected";
    }

    setSeats(updatedSeats);
  };

  const separateSeats = (seats) => {
    let row = [];
    const rows = [];
    let rowNumber = "";

    for (const seat of seats) {
      const currentRowNumber = seat.row;
      if (rowNumber !== currentRowNumber) {
        rowNumber = currentRowNumber;
        if (row.length) {
          rows.push(row);
        }
        row = [];
      }
      row.push(seat);
    }

    return rows;
  };

  const checkout = () => {
    const selectedSeats = seats
      .filter((s) => s.status === "selected")
      .map((s) => s.id);
    console.log("selectedSeats", selectedSeats);
    axios({
      method: "put",
      url: `https://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/chair/update_seats`,
      data: {
        seat_ids: selectedSeats,
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        console.log("Seats", response.data);
        setRefetch(refetch + 1);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <BodyContainer>
      <UlShowcase>
        <li>
          <Seat />
          <p>Available</p>
        </li>
        <li>
          <Seat status={"selected"} />
          <p>Selected</p>
        </li>
        <li>
          <Seat status={"occupied"} />
          <p>Occupied</p>
        </li>
      </UlShowcase>

      <Container>
        <ScreenContainer></ScreenContainer>

        {separateSeats(seats).map((row, i) => {
          return (
            <Row key={`Row${i}`}>
              {row.map((seat, i) => {
                return (
                  <Seat
                    key={`Seat${i}`}
                    status={seat.status}
                    onClick={() => onSeatClick(seat)}
                  />
                );
              })}
            </Row>
          );
        })}
      </Container>
      <p>
        You have selected <span> {totalSelected} </span> seats for a price of
        <span> {totalValue} </span> €
      </p>

      <Link to="/checkout">
        <CheckoutBtn onClick={() => checkout()}>Checkout</CheckoutBtn>
      </Link>
    </BodyContainer>
  );
};

export default ChairMap;
