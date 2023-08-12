import React from "react";
import style from "./tips.module.css";
function Tips() {
  var loop = [];
  for (let i = 0; i < 10; i++) {
    loop.push(i);
  }
  return (
    <div>
      <div className={style.tips}>
        {loop.map(() => (
          <div className={style.tip}>
            <div className={style.image}>
              <img
                src="https://sgi2.offerscdn.net/i/production/published/65/filename/21696.h120.w120.flim.v33.bffffff.png"
                alt=""
              />
            </div>
            <div className={style.details}>
              <div className={style.title}>
                Here is Title. This should interestiong
              </div>
              <div className={style.author}>
                <p>i am author august 3 2020</p>
              </div>
              <div className={style.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, dolores!
              </div>
              <div className={style.tags}>sponsor, guide, home, saving</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;
