import React from "react";
import Card from "../card/Card";
import style from "./cards.module.css"

function Cards() {
  return (
      <div className={style.card_holder}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
  );
}

export default Cards;
