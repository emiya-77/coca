import GreenButton from "../Button/GreenButton"

import { FiPlayCircle } from "react-icons/fi";

const HeroCenter = () => {
    return (
        <div className="flex flex-col items-center justify-center order-1 md:order-2">
            <div className="flex flex-col md:flex-row gap-4 xl:gap-10 justify-center items-center mb-4 xl:mb-0">
                <GreenButton content="Get Trial Project" color="#23F0A9" />
                <div className="flex justify-center items-center text-white text-xl gap-2 border-2 border-transparent hover:border-white cursor-pointer rounded-full px-4 py-2 transition-all duration-300">
                    <FiPlayCircle />
                    <h1 className="text-xs xl:text-base">Watch Demo</h1>
                </div>
            </div>
            <div>
                <img src="Product sales.png" alt="" />
            </div>
        </div>
    )
}

export default HeroCenter