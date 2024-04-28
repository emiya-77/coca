import GreenButton from "../Button/GreenButton"

const Contact = () => {
    return (
        <div id="contact" className="min-h-[500px] bg-gradient-to-br from-[#426AE4] via-[#7190ea] to-[#23F0A9] flex flex-col items-center pt-16 md:pt-20 pb-12 px-4">
            <h1 className="text-center text-3xl md:text-6xl text-white tracking-wide">
                Are you ready to get started? <br className="hidden xl:flex" /> Begin your free trial today
            </h1>
            <p className="mt-10 text-gray-200 text-center text-lg">
                Experience the Possibilities: Start Your Free Trial and Get Started Today
            </p>
            <div className="flex divide-x-2 gap-4 text-gray-200 text-sm md:text-lg mt-4 md:mt-2">
                <p>Ready for 30 days trial</p>
                <p className="pl-4">Exclusive support</p>
                <p className="pl-4">No fees</p>
            </div>
            <div className="flex flex-col md:flex-row mt-10 justify-center items-center gap-4">
                <input className="w-72 md:w-96 h-12 rounded-full bg-white focus:outline-none px-5" placeholder="Enter Email" />
                <GreenButton content="Request Trial" color="#23F0A9" />
            </div>
        </div>
    )
}

export default Contact