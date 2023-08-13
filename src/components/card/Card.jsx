import React from "react";
import style from "./card.module.css";

const hr = {
  background: "gray",
  border: "none",
  height: "1px",
  width: "200px",
};

function Card() {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <img
          src="https://sgi3.offerscdn.net/i/zdcs-merchants/05tf2lzUdBPXAODII4ajlkw.h300.w300.flim.v952.bffffff.png"
          alt=""
        />
        <span className={`${style.abs} ${style.category}`}>category</span>
        <span className={`${style.abs} ${style.offer}`}>offer</span>
      </div>
      <hr style={hr} />
      <div className={style.card_details}>
        <div className={style.card_footer_top}>
          <p>product name</p>
          <p>sample details</p>
        </div>
        <div className={style.card_footer}>
          <del>$435.45</del>
          <div>
            <p>$34.45</p>
            <p>free shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
