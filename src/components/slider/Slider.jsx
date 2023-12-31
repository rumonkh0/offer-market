import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";

// Import Swiper styles
import style from "./slider.module.css";
var images;
var pcImages = [
  "https://sgi1.offerscdn.net/i/production/published/92/image/3605.h312.w1248.flpad.v2.bffffff.jpg",
  "https://sgi1.offerscdn.net/i/production/published/92/image/3606.h312.w1248.flpad.v2.bffffff.jpg",
  "https://sgi2.offerscdn.net/i/production/published/92/image/3588.h312.w1248.flpad.v4.bffffff.jpg",
];

var mobileimage = ["images/slider/1.jpg", "images/slider/2.jpg"];
const sliderConfiguration = {
  gap: 30,
  startAt: 0,
  type: "carousel",
  autoplay: 3000,
  // peek: 80,
  perView: 1,
};

function Slider() {
  const [width, setwidth] = useState([window.innerWidth, window.innerHeight]);
  if (width[0] < 768) {
    images = mobileimage;
  } else {
    images = pcImages;
  }
  if (width[0] < 1300) {
    delete sliderConfiguration.peek;
  }
  var slider;
  useEffect(() => {
    const handleWindowResize = () => {
      setwidth([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    if (width[0] < 768) {
      images = mobileimage;
    } else {
      images = pcImages;
    }
    if (width[0] < 1300) {
      delete sliderConfiguration.peek;
    }
    // eslint-disable-next-line
    slider = new Glide(".glide", sliderConfiguration);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [width]);

  useEffect(() => {
    slider.mount();
    return () => slider.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"glide " + style.glide}>
      <div
        className={"glide__track " + style.glide__track}
        data-glide-el="track"
      >
        <ul className="glide__slides">
          {images.map((img, index) => (
            <li className={"glide__slide slider " + style.slider} key={index}>
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
      <div
        className={"glide__bullets " + style.glide__bullets}
        data-glide-el="controls[nav]"
      >
        {images.map((img, index) => (
          <button
            className={"glide__bullet " + style.glide__bullet}
            data-glide-dir={`=${index}`}
            key={index}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
