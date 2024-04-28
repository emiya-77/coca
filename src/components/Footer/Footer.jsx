import GreenButton from "../Button/GreenButton"

const Footer = () => {
    return (
        <div className="h-[600px] bg-[#111111] px-4 md:px-20 xl:px-[140px] py-16 flex flex-col justify-between">
            <div className="flex flex-col md:flex-row items-start">
                <div className="w-full md:w-3/5">
                    <h1 className="text-3xl md:text-5xl xl:text-7xl text-white font-medium">Are you prepared to <br className="hidden xl:flex" /> collaborate with us?</h1>
                    <div className="flex flex-col xl:flex-row justify-center xl:justify-start gap-4 xl:gap-16 mt-10 md:mt-20">
                        <div className="flex gap-4 text-gray-200 items-center">
                            <img src="f1.png" alt="" />
                            <p>1929, Bancangan, Sambit, <br className="hidden md:flex" />
                                Suroboyo, Wakanda</p>
                        </div>
                        <div className="flex gap-4 text-gray-200 items-center">
                            <img src="f2.png" alt="" />
                            <p>hello@cocapay.co</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center md:items-start mt-20">
                    <GreenButton content="Get Start a Project" color="#23F0A9" />
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