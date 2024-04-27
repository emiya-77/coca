import GreenButton from "../Button/GreenButton"

const Footer = () => {
    return (
        <div className="h-[600px] bg-[#111111] px-[140px] py-16 flex flex-col justify-between">
            <div className="flex">
                <div>
                    <h1 className="text-7xl text-white font-medium">Are you prepared to <br /> collaborate with us?</h1>
                    <div className="flex justify-center gap-16 mt-20">
                        <div className="flex gap-4 text-gray-200 items-center">
                            <img src="f1.png" alt="" />
                            <p>1929, Bancangan, Sambit, <br />
                                Suroboyo, Wakanda</p>
                        </div>
                        <div className="flex gap-4 text-gray-200 items-center">
                            <img src="f2.png" alt="" />
                            <p>hello@cocapay.co</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex justify-end items-center">
                    <GreenButton content="Get Start a Project" color="#23F0A9" />
                </div>
            </div>
            <div className="border-t-[1px] border-gray-600 h-6 flex text-gray-100 justify-between pt-8">
                <p>© Coca Pay by Sans Brothers</p>
                <div className="flex justify-center gap-16">
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer