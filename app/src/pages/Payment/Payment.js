import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import "./Payment.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    error: "",
    success: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      !this.state.number ||
      !this.state.name ||
      !this.state.expiry ||
      !this.state.cvc
    ) {
      this.setState({ error: "All fields are required." });
      return;
    }
    this.setState({
      error: "",
      success: "Payment Successful!",
    });

    fetch("http://localhost:3006/paymentcard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        number: this.state.number,
        expiry: this.state.expiry,
        cvc: this.state.cvc,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="PaymentContainer">
        <div id="PaymentForm" className="PaymentForm">
          {this.state.error && <div className="error">{this.state.error}</div>}
          {this.state.success && (
            <div className="success">{this.state.success}</div>
          )}
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form onSubmit={this.handleSubmit} className="">
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="text"
              name="expiry"
              placeholder="Valid Thru"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
