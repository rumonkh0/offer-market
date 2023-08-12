import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

// Import Swiper styles
import style from "./slider.module.css";

const images = [
  "https://sgi1.offerscdn.net/i/production/published/92/image/3605.h312.w1248.flpad.v2.bffffff.jpg",
  "https://sgi1.offerscdn.net/i/production/published/92/image/3606.h312.w1248.flpad.v2.bffffff.jpg",
  "https://sgi2.offerscdn.net/i/production/published/92/image/3588.h312.w1248.flpad.v4.bffffff.jpg",
];

const sliderConfiguration = {
  gap: 20,
  startAt: 0,
  type: "carousel",
  perView: 1,
};

function Slider() {
  const slider = new Glide(".glide", sliderConfiguration);

  useEffect(() => {
    slider.mount();
    return () => slider.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={"glide"}>
      <div
        className={"glide__track " + style.glide__track}
        data-glide-el="track"
      >
        <ul className="glide__slides">
          {images.map((img, index) => (
            <li className="glide__slide slider" key={index}>
              <img className={style.rounded} src={img} alt={img} />
            </li>
          ))}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button
          className={
            "glide__arrow glide__arrow--left " + style.glide__arrow__left
          }
          data-glide-dir="<"
        >
          <svg
            className={style.svg}
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            ></path>
          </svg>
        </button>
        <button
          className={
            "glide__arrow glide__arrow--right " + style.glide__arrow__right
          }
          data-glide-dir=">"
        >
          <svg width="12" height="12" fill="none" viewBox="0 0 320 512">
            <path
              fill="currentColor"
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Slider;
