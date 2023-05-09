import React from "react";
import styles from "./Header.module.css";
import picMEAL from "../assets/meals.jpg";
import HeaderCartbutton from "./HeaderCartbutton";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Dee Meals</h1>
        <HeaderCartbutton />
      </header>
      <div className={styles["main-image"]}>
        <img src={picMEAL} alt="foodShowCase" />
      </div>
    </>
  );
}

export default Header;
