import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="h-[600px] bg-[#111111] px-4 md:px-20 xl:px-[140px] py-16 flex flex-col justify-between">
            <div className="p-2 gap-2 flex flex-col md:flex-row items-start">
                <div className="w-full md:w-3/5">
                    <h1 className="p-2 text-3xl md:text-5xl xl:text-7xl text-white font-medium">Are you prepared to <br className="hidden xl:flex" /> collaborate with us?</h1>
                    <div className="p-1 flex flex-col xl:flex-row justify-center xl:justify-start gap-4 xl:gap-16 mt-10 md:mt-20">
                        <div className="p-1 flex gap-4 text-gray-200 items-center">
                            <img src="f1.png" alt="" />
                            <p>1929, Bancangan, Sambit, <br className="hidden md:flex" />
                                Suroboyo, Wakanda</p>
                        </div>
                        <div className="p-1 flex gap-4 text-gray-200 items-center">
                            <img src="f2.png" alt="" />
                            <p>hello@cocapay.co</p>
                        </div>
                    </div>
                </div>
                <div className="p-1 w-full md:w-2/5 flex justify-center md:justify-end items-center md:items-start mt-20">
                        <div className="flex items-center gap-3 px-[20px] xl:px-[24px] py-[12px] rounded-full bg-[#23F0A9] cursor-pointer hover:bg-opacity-80 transition-all duration-300">
                            <h1 className="text-xs xl:text-base font-medium text-center">Get Start a Project</h1>
                            <FaArrowRightLong className="mt-1" />
                        </div>
                </div>
            </div>
            <div className="border-t-[1px] border-gray-600 h-6 flex flex-col md:flex-row text-gray-100 justify-between items-center pt-4 md:pt-8">
                <p className="text-sm md:text-base order-2 md:order-1">© Coca Pay by Sans Brothers</p>
                <div className="flex justify-center gap-16 mb-4 text-sm md:text-base md:mb-0 order-1 md:order-2">
                    <p className="cursor-pointer">Terms & Conditions</p>
                    <p className="cursor-pointer">Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer