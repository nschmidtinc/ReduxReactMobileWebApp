import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl";
import ProfilePage from "../../../containers/ProfilePage";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" }
];
const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        {" "}
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.buyBurger}
        onClick={props.bought}
      >
        Order Now
      </button>
      <ProfilePage />
    </div>
  );
};

export default buildControls;
