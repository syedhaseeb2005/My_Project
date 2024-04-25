import "./App.css";
import HeroSection from "./Component/HeroSection";
import HeroSection2 from "./Component/HeroSection2";
import HeroSection3 from "./Component/HeroSection3";
import Navbar from "./Component/Navbar";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img4 from "./assets/4.png";


function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="relative">
      <img src={img1} className="absolute w-[600px] left-80 -top-44 rotate-12" alt="" />
      <img src={img2} className="absolute w-[650px] left-8 rotate-1" alt="" />
      <img src={img4} className="absolute w-[950px] top-38 -right-96" alt="" />
      </div>
      <div className="container mx-auto">
        <HeroSection />
        <HeroSection2 />
        <HeroSection3 />
      </div>
    </div>
  );
}

export default App;
