import React from "react";

import Cards from "../cards/Cards";
import style from "./Categories.module.css";
import useScript from "../../utils/useScript";
import products from "../../__data/product";

function Categories() {
  useScript("script.js");
  return (
    <div className={style.main}>
      <div className={style.sidebar}>
        <div>
          <h3>Total count : 500</h3>
          <p>Today's offer : 300</p>
          <p>Today's best offer : 100</p>
          <p>couton : 60</p>
        </div>
        <div>
          <h3>AD section</h3>
        </div>
        <div>
          <h3>Suggested</h3>
          <p>
            <a href="/#">go to link</a>
          </p>
          <p>
            <a href="/#">go to link</a>
          </p>
          <p>
            <a href="/#">go to link</a>
          </p>
          <p>
            <a href="/#">go to link</a>
          </p>
        </div>
        <div>
          <h3>Categories</h3>
          <p>
            <a href="/#">go to link</a>
          </p>
          <p>
            <a href="/#">go to link</a>
          </p>
          <p>
            <a href="/#">go to link</a>
          </p>
          <p>
            <a href="/#">go to link</a>
          </p>
        </div>
      </div>
      <div className={style.categories}>
        <div className={style.category}>
          <p>
            Fashion <a href="/#">view more</a>
          </p>
          <Cards gridv={"horscroll " + style.hor} products={products} />
        </div>
        <div className={style.category}>
          <p>
            Beauty & Glamour <a href="/#">view more</a>
          </p>
          <Cards gridv={"horscroll " + style.hor} products={products} />
        </div>
        <div className={style.category}>
          <p>
            Electronics <a href="/#">view more</a>
          </p>
          <Cards gridv={"horscroll " + style.hor} products={products} />
        </div>
      </div>
    </div>
  );
}

export default Categories;
