import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";


const Banner = () => {
  return (
    <div className="w-full h-[1000px] px-[100px] py-[27px] bg-gradient-to-br from-[#426AE4] via-[#7190ea] to-[#23F0A9]">
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default Banner;
