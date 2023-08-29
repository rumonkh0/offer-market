import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import Cards from "../cards/Cards";
import style from "./Categories.module.css";
import Card from "../card/Card";

function Categories() {
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
        <>
          <Swiper
            centeredSlides={false}
            grabCursor={true}
            freeMode={true}
            keyboard={{
              enabled: true,
            }}
            // breakpoints={{
            //   269: {
            //     // slidesPerView: 3,
            //     slidesPerGroup: 3,
            //   },
            // }}
            scrollbar={true}
            navigation={true}
            
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className={"mySwiper "+style.sw}
          >
            <SwiperSlide>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </SwiperSlide>
            {/* <SwiperSlide>
              <Card/>
            </SwiperSlide>
            <SwiperSlide>
              <Card/>
            </SwiperSlide>
            <SwiperSlide>
              <Card/>
            </SwiperSlide>
            <SwiperSlide>
              <Card/>
            </SwiperSlide>
            <SwiperSlide>
              <Card/>
            </SwiperSlide>
            <SwiperSlide>
              <Card/>
            </SwiperSlide>
            <SwiperSlide>
              <Card/>
            </SwiperSlide>
            <SwiperSlide>
              <Card/>
            </SwiperSlide> */}
          </Swiper>
        </>
        <div className={style.category}>
          <p>
            Fashion <a href="/#">view more</a>
          </p>
          <Cards />
        </div>
        <div className={style.category}>
          <p>
            Beauty & Glamour <a href="/#">view more</a>
          </p>
          <Cards />
        </div>
        <div className={style.category}>
          <p>
            Electronics <a href="/#">view more</a>
          </p>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Categories;
