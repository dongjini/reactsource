import React from "react";
import styles from "./Card.module.css";

const CardLayout = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default CardLayout;
