import React from "react";
import Aux from "../../../HOC/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{
          props.ingredients[igKey]
        }
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>a delicious burger with the following ingredients: </p>
      <ul>
        {" "}
        {ingredientSummary}
        <p>continue to checkout</p>{" "}
      </ul>
      <p>
        <strong>total price: {props.price.toFixed(2)} </strong>
      </p>
      <Button btnType={"Danger"} clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType={"Success"} clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
