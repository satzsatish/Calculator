import React from "react";
import Styles from "./buttons.module.css";
const Buttons = () => {
  return (
    <div className={Styles.gridContainer}>
      <div className={Styles.gridItem} onClick={() => setValue()}>
        1
      </div>
      <div className={Styles.gridItem}>2</div>
      <div className={Styles.gridItem}>3</div>
      <div className={Styles.gridItem}>+</div>
      <div className={Styles.gridItem}>4</div>
      <div className={Styles.gridItem}>5</div>
      <div className={Styles.gridItem}>6</div>
      <div className={Styles.gridItem}>-</div>
      <div className={Styles.gridItem}>7</div>
      <div className={Styles.gridItem}>8</div>
      <div className={Styles.gridItem}>9</div>
      <div className={Styles.gridItem}>/</div>
      <div className={Styles.gridItem}>*</div>
      <div className={Styles.gridItem}>0</div>
      <div className={Styles.gridItem}>.</div>
      <div className={Styles.gridItem}>=</div>
    </div>
  );
};

export default Buttons;
