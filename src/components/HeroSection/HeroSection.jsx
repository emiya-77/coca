import HeroCenter from "./HeroCenter"
import HeroHeader from "./HeroHeader"
import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"

const HeroSection = () => {
  return (
    <div>
      <HeroHeader />
      <div className="p-2 gap-2 flex flex-col md:flex-row justify-between items-center md:items-start">
        <HeroLeft />
        <HeroCenter />
        <HeroRight />
      </div>
    </div>
  )
}

export default HeroSection