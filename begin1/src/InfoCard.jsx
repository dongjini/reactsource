import React from "react";
import styles from "./Card.module.css";

// const InfoCard = (props) => {
//   console.log("styles ", styles);

//   return (
//     <div className={styles.card}>
//       <h2>{props.title}</h2>
//       <p>{props.content}</p>
//       <p>Author : {props.author}</p>
//     </div>
//   );
// };
const InfoCard = ({ title = "No Title", content, author = "Anonymous" }) => {
  console.log("styles ", styles);

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author : {author}</p>
    </div>
  );
};

export default InfoCard;
