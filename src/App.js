import "./App.css";
import Slider from "./components/slider/Slider";
import Coupouns from "./components/coupons/Coupons";
import Categories from "./components/categories/Categories";
import Navbar from "./components/navbar/Navbar";
import Brands from "./components/brands/Brands";
import Mail from "./components/mail/Mail";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider />
      <Coupouns />
      <Categories />
      <Mail/>
      <Brands/>
      <Footer/>
    </div>
  );
}

export default App;
