import React from "react";
import Cardicon from "../Components/Cart/Carticon";
import classes from "./HeaderCartbutton.module.css";

function HeaderCartbutton(props) {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <Cardicon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartbutton;
