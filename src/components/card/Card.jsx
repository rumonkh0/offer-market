import React from "react";
import style from "./card.module.css";

function Card() {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <img
          src="images/card/pic.png"
          alt=""
        />
        <span className={`${style.abs} ${style.category}`}>category</span>
        <span className={`${style.abs} ${style.offer}`}>offer</span>
      </div>
      <hr className={style.hr}/>
      <div className={style.card_details}>
        <div className={style.card_footer_top}>
          <p>product name</p>
          <p>sample details</p>
        </div>
        <div className={style.card_footer}>
          <del>$435.45</del>
          <div>
            <p>now $34.45</p>
            <p>+ free shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
