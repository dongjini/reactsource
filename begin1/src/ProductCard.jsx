import React from "react";
import styles from "./Card.module.css";

const ProductCard = ({ name, price, formatPrice }) => {
  const disPrice = formatPrice(price);

  return (
    <div className={styles.card}>
      <h2>상품명 : {name}</h2>
      <p>가격 : {disPrice}</p>
    </div>
  );
};

export default ProductCard;
