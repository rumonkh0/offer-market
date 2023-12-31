import React from "react";
import style from "./coupons.module.css";
import Cards from "../cards/Cards";
import products from "../../__data/product";
// import Tips from "../tips/Tips";

function Coupons() {
  return (
    <div className={style.coupons}>
      <div className={style.title}>
        <h1>Coupons and Deals From Stores You Love</h1>
        <h5>
          When you buy through links on our site, we may earn a commission.{" "}
        </h5>
      </div>
      <div className={style.section}>
        <p>Featured Deals</p>
        <Cards products={products}/>
      </div>
      <div className={style.section}>
        <p>Patio Furniture</p>
        <Cards products={products}/>
      </div>
      {/* <div className={style.section}>
        <p>Saving Tips</p>
        <Tips />
      </div> */}
    </div>
  );
}

export default Coupons;
