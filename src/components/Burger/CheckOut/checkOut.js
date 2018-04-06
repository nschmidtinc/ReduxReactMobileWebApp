import React from "react";
import Burger from "../Burger";
import Button from "../../UI/Button/Button";
import checkOutSummary from "./CheckOutSummary.css";
const checkoutCanceledHandler = () => {
  this.props.history.goBack();
};
const checkoutContinuedHandler = () => {
  this.props.history.replace("/checkout/contact-data");
};

const checkOut = props => {
  return (
    <div className={checkOutSummary}>
      <h1>Thank you for shopping at Nate Burger!</h1>

      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType={"Danger"} clicked={props.checkoutCanceled}>
        CANCEL
      </Button>
      <Button btnType={"Success"} clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkOut;
