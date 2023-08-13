import "./App.css";
// import Cards from "./components/cards/Cards";
import Slider from "./components/slider/Slider";
import Coupouns from "./components/coupons/Coupons";
// import Tips from "./components/tips/Tips";

function App() {
  return (
    <div className="App">
      <Slider />
      <Coupouns/>
      {/* <Tips/> */}
    </div>
  );
}

export default App;
