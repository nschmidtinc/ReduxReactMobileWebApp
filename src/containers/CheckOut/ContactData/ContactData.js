import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "axios";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "nathan",
        age: "45",
        imageURL: this.state.imageURL
      }
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false, burgerBought: false });
      })
      .catch(error => this.setState({ loading: false, burgerBought: false }));
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          {" "}
          <input
            input={classes.Input}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            input={classes.Input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            input={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            input={classes.Input}
            type="text"
            name="postal"
            placeholder="Postal Code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
