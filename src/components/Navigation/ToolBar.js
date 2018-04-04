import React from "react";
import classes from "./ToolBar.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import DrawerToggle from "./SideDrawer/DrawerToggle";
const ToolBar = props => (
  <header className={classes.ToolBar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div>Menu</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <NavigationItems />
  </header>
);

export default ToolBar;
