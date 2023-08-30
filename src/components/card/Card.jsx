import React from "react";
import style from "./card.module.css";

function Card({ item }) {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <img src={item.image} alt={item.image} />
        {item.offer_tag && (
          <span className={`${style.abs} ${style.category}`}>
            {item.offer_tag}
          </span>
        )}
        {item.off && (
          <span className={`${style.abs} ${style.offer}`}>{item.off}</span>
        )}
      </div>
      <hr className={style.hr} />
      <div className={style.card_details}>
        <div className={style.card_footer_top}>
          <p>{item.Name}</p>
          <p>{item.details}</p>
        </div>
        <div className={style.card_footer}>
          <del>${item.regular_price}</del>
          <div>
            <p>${item.offer_price}</p>
            {item.free_shipping && <p>+ free shipping</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
