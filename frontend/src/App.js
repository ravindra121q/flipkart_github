import "./App.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import { AllRoutes } from "./routes/AllRoutes";
import Navbar1 from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar1 />
      <AllRoutes />
    </div>
  );
}

export default App;
