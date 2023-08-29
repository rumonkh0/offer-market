import React, { useEffect } from "react";

import Cards from "../cards/Cards";
import style from "./Categories.module.css";
import Card from "../card/Card";
import useScript from "../../utils/useScript";

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
          <div className={"hor " + style.hor}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className={style.category}>
          <p>
            Beauty & Glamour <a href="/#">view more</a>
          </p>
          <div className={"hor " + style.hor}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className={style.category}>
          <p>
            Electronics <a href="/#">view more</a>
          </p>
          <div className={"hor " + style.hor}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
