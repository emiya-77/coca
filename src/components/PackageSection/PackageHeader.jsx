
const PackageHeader = ({setIsMonthly}) => {

    const handleToggleChange = () => {
        setIsMonthly(prevState => !prevState);
    };

    return (
        <div className="p-2 w-full flex flex-col mb-24">
            <h1 className="p-4 text-3xl font-medium md:text-5xl xl:text-6xl text-center mb-10 md:mb-16 xl:mb-20">
                An ideal match no matter your <br className="hidden xl:flex" /> budget constraints.
            </h1>
            <div className="relative inline-block mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 font-medium">
                    <h1 className="p-1">Per Month</h1>
                    {/* <div className="p-1 flex items-center justify-center">
                        <input type="checkbox" className="toggle" checked />
                    </div> */}
                    <label htmlFor="check" className="bg-gray-200 cursor-pointer relative w-[50px] h-[24px] rounded-full">
                        <input type="checkbox" id="check" className="sr-only peer" onChange={handleToggleChange}/>
                        <span className="w-2/5 h-4/5 bg-blue-400 absolute rounded-full left-[3px] top-[2px] peer-checked:bg-green-500 peer-checked:left-[27px] transition-all duration-500"></span>
                    </label>
                    <h1 className="p-1">Per Year</h1>
                    <img className="absolute -right-20 md:-right-32 top-7 md:-top-7" src="/public/discount.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default PackageHeader