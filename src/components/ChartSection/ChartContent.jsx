import { FaArrowRightLong } from "react-icons/fa6";

const ChartContent = () => (
    <div className="flex flex-col items-center md:items-start">
        <div className="mb-4 md:mb-6 px-4 md:px-12 text-center md:text-start py-2">
            <h1 className="font-medium text-2xl md:text-4xl xl:text-6xl">
                Master the art of <br className="hidden md:flex" /> managing your work <br className="hidden md:flex" /> hours effectively
            </h1>
            <p className="font-medium text-sm xl:text-base mt-4 md:mt-8">
                Time management is essential for ensuring that you have enough <br className="hidden md:flex" /> time to complete your tasks.
            </p>
            <p className="text-gray-500 text-xs xl:text-base mt-2 md:mt-4">
                Time is a crucial element in our lives, helping us to structure and organize our <br className="hidden md:flex" /> daily activities into good habits. By understanding the value of time, we can <br className="hidden md:flex" /> gain valuable experience and develop ourselves.
            </p>
        </div>
        <div className="inline-block px-4 md:px-8 md:text-start py-2">
            <div className="px-4 py-2 rounded-full flex items-center gap-3 hover:cursor-pointer border-2 border-transparent hover:border-black transition-all duration-700 ease-in-out">
                <h1 className="font-medium">Discover More</h1>
                <FaArrowRightLong className="mt-1" />
            </div>
        </div>
    </div>
)

export default ChartContent;