import HeroCenter from "./HeroCenter"
import HeroHeader from "./HeroHeader"
import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"

const HeroSection = () => {
  return (
    <div>
      <HeroHeader />
      <div className="flex justify-between">
        <HeroLeft />
        <HeroCenter />
        <HeroRight />
      </div>
    </div>
  )
}

export default HeroSection