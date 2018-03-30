import React from "react";
import classes from "./ToolBar.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
const ToolBar = props => (
  <header className={classes.ToolBar}>
    <div>Menu</div>
    <Logo />
    <NavigationItems />
  </header>
);

export default ToolBar;
