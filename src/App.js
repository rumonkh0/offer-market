import "./App.css";
import Cards from "./components/cards/Cards";
import Slider from "./components/slider/Slider";
import Coupouns from "./components/coupons/Coupons";

function App() {
  return (
    <div className="App">
      <Slider />
      <Coupouns/>
    </div>
  );
}

export default App;
