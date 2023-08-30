import React from "react";
import Card from "../card/Card";
import style from "./cards.module.css";

function Cards({ gridv, products }) {
  return (
    <div className={`${style.card_holder} + ${gridv && gridv}`}>
      {products.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Cards;
