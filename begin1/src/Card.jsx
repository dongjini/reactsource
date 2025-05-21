import React from "react";
import InfoCard from "./InfoCard";

const cards = [
  { idx: 1, title: "Props in React", content: "Props pass data from one component to another", author: "Christopher" },
  {
    idx: 2,
    title: "React Composition",
    content: "Composition makes your components more reusable",
    author: "Rapahael",
  },
  { idx: 3, content: "Composition makes your components more reusable" },
];

const Card = () => {
  return (
    <div>
      {cards.map((card) => (
        <InfoCard key={card.id} title={card.title} content={card.content} author={card.author} />
      ))}
    </div>
  );
};

export default Card;
