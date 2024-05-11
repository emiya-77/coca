import GreenButton from "../Button/GreenButton"

const PackageCard = ({ pack, hovered, setHovered, isMonthly }) => {
    const {id, title, pricePerMonth, pricePerYear, subTitle} = pack || {};

    return (
        <div onMouseEnter={() => setHovered(id)} className={`cursor-pointer ${hovered == id? 'scale-110 bg-blue-50' :''} transition-all duration-500 ease-in-out w-[300px] md:w-[380px] flex flex-col justify-start items-center py-4 md:py-8 px-4 shadow-lg md:shadow-2xl rounded-2xl`}>
            <div className="flex flex-col items-center">
                <p className="py-1 px-3 bg-gray-100 font-medium mb-6 rounded-full inline-block text-xs">{title} plan</p>
                <h1 className="text-5xl font-bold mb-4">${isMonthly? pricePerMonth : pricePerYear}
                    <span className="font-light">/</span>{`${isMonthly? 'mth' : 'yr'}`}</h1>
                <p className="text-gray-600 mb-4 min-w-64 text-center">{subTitle}</p>
                <div className="flex flex-col w-full gap-3">
                    <GreenButton content="Get started" color="#23F0A9" />
                    <div className={`inline-block px-[24px] py-[12px] rounded-full cursor-pointer hover:bg-opacity-80 transition-all duration-300 border-[1px]`}>
                        <h1 className="font-medium text-center">Chat to sales</h1>
                    </div>
                </div>
            </div>
            <div className="w-[75%] h-[1px] bg-gray-300 my-4"></div>
            <div className="flex flex-col items-start gap-1">
                <div className="flex justify-center gap-3 items-center">
                    <img src="Tic.png" alt="" />
                    <p>Access to all basic features</p>
                </div>
                <div className="flex justify-center gap-3 items-center">
                    <img src="Tic.png" alt="" />
                    <p>Basic reporting and analytics</p>
                </div>
                <div className="flex justify-center gap-3 items-center">
                    <img src="Tic.png" alt="" />
                    <p>Up to 10 individual users</p>
                </div>
                <div className="flex justify-center gap-3 items-center">
                    <img src="Tic.png" alt="" />
                    <p>20GB individual data each user</p>
                </div>
                <div className="flex justify-center gap-3 items-center">
                    <img src="Tic.png" alt="" />
                    <p>Basic chat and email support</p>
                </div>
            </div>
        </div>
    )
}

export default PackageCard