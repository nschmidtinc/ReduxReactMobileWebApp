import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/BackDrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../HOC/Aux";

const sideDrawer = props => {
  console.log(props);
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.close} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
