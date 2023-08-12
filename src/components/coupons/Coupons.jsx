import React from "react";
import style from "./coupons.module.css";
import Cards from "../cards/Cards";

function Coupons() {
  return (
    <div className={style.coupons}>
      <div className={style.title}>
        <h1>Coupons and Deals From Stores You Love</h1>
        <h6>
          When you buy through links on our site, we may earn a commission.{" "}
        </h6>
      </div>
      <div className={style.section}>
        <p>Featured Deals</p>
        <Cards />
      </div>
      <div className={style.section}>
        <p>Patio Furniture</p>
        <Cards />
      </div>
    </div>
  );
}

export default Coupons;
