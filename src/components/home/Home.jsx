import React from "react";
import Slider from "../slider/Slider";
import Coupouns from "../coupons/Coupons";
import Categories from "../categories/Categories";
import Navbar from "../navbar/Navbar";
import Brands from "../brands/Brands";
import Mail from "../mail/Mail";
import Footer from "../footer/Footer"

function Home() {
  return (
    <div>
      <Navbar/>
      <Slider />
      <Coupouns />
      <Categories />
      <Mail />
      <Brands />
      <Footer />
    </div>
  );
}

export default Home;
