import { useState } from "react";
import Header from "./common/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Frame from "./common/Frame";
import Home from "./common/Home";
import FrameBottom from "./common/FrameBottom";
// import CarouselDemo from "./pages/Carousel";
import Carousel from "./pages/Carousel";
import CustomCarousel from "./components/CustomCarousel";
import { Frame } from "lucide-react";
import New3dCarousel from "./components/New3dCarousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      {/* <CustomCarousel>
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="absolute transition-opacity duration-500 ease-in-out top-10 bg-purple-300 w-6xl h-90 rounded-lg flex items-center justify-center text-black text-2xl font-bold">
            Slide {n}
          </div>
        ))}
        
      </CustomCarousel> */}
      <div className="relative top-30">
        <New3dCarousel />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <FrameBottom />
    </BrowserRouter>
  );
}

export default App;
