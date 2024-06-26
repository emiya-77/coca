
const SchedulingContent = () => {
    return (
        <div className="flex flex-col items-center md:items-start">
            <div className="mt-8 md:mt-0 md:px-6 xl:px-12 md:py-2">
                <h1 className="p-2 mb-6 font-medium text-3xl text-center md:text-start xl:text-5xl">
                    Simplify scheduling <br /> processes for all tasks
                </h1>
                <p className="p-2 text-gray-500 text-center md:text-start mt-4">
                    Coca is an effortlessly intuitive, lightweight solution for tracking hours and <br className="hidden md:flex" /> projects, designed for easy adoption and daily use, with a focus on lightning-fast performance.
                </p>
            </div>
            <div className="p-2 flex flex-col items-start gap-4 xl:gap-x-8 md:px-6 xl:px-12 mt-6 xl:mt-10">
                <div className="flex justify-center items-center gap-3 hover:scale-105 hover:shadow-lg rounded-lg p-2 transition-all duration-500">
                    <img src="icon.png" alt="" />
                    <div>
                        <h1 className="font-medium text-sm md:text-base xl:text-xl">Download for free via any device</h1>
                        <p className="text-xs">Easily download the free Coca app on any device anytime</p>
                    </div>
                </div>
                <div className="p-1 flex justify-center items-center gap-3 hover:scale-105 hover:shadow-lg rounded-lg p-2 transition-all duration-500">
                    <img src="icon 2.png" alt="" />
                    <div>
                        <h1 className="font-medium text-sm md:text-base xl:text-xl">Create your account in minutes</h1>
                        <p className="text-xs">Create a secure account in minutes with essential information</p>
                    </div>
                </div>
                <div className="p-1 flex justify-center items-center gap-3 hover:scale-105 hover:shadow-lg rounded-lg p-2 transition-all duration-500">
                    <img src="icon 3.png" alt="" />
                    <div>
                        <h1 className="font-medium text-sm md:text-base xl:text-xl">Start tracking time with just one click</h1>
                        <p className="text-xs">Track time manually or automatically and monitor hours</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchedulingContent