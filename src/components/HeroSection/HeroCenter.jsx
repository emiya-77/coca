import GreenButton from "../Button/GreenButton"

import { FiPlayCircle } from "react-icons/fi";

const HeroCenter = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex gap-10 justify-center items-center">
                <GreenButton content="Get Trial Project" color="#23F0A9" />
                <div className="flex justify-center items-center text-white text-xl gap-2 border-2 border-transparent hover:border-white cursor-pointer rounded-full px-4 py-2 transition-all duration-300">
                    <FiPlayCircle />
                    <h1>Watch Demo</h1>
                </div>
            </div>
            <div>
                <img src="Product sales.png" alt="" />
            </div>
        </div>
    )
}

export default HeroCenter