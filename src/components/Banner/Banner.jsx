import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";


const Banner = () => {
  return (
    <div className="w-full min-h-[1200px] md:min-h-[700px] xl:h-[1050px] px-4 md:px-8 xl:px-[100px] py-[27px] bg-gradient-to-br from-[#426AE4] via-[#3890d1] to-[#23F0A9]">
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default Banner;
