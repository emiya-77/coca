
const SchedulingContent = () => {
    return (
        <div>
            <div className="px-12">
                <h1 className="mb-6 font-medium text-5xl">
                    Simplify scheduling <br /> processes for all tasks
                </h1>
                <p className="text-gray-500 mt-4">
                    Coca is an effortlessly intuitive, lightweight solution for tracking hours and <br /> projects, designed for easy adoption and daily use, with a focus on lightning-fast performance.
                </p>
            </div>
            <div className="flex flex-col items-start gap-8 px-12 mt-10">
                <div className="flex justify-center items-center gap-3">
                    <img src="icon.png" alt="" />
                    <div>
                        <h1 className="font-medium text-xl">Download for free via any device</h1>
                        <p>Easily download the free Coca app on any device anytime</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <img src="icon 2.png" alt="" />
                    <div>
                        <h1 className="font-medium text-xl">Create your account in minutes</h1>
                        <p>Create a secure account in minutes with essential information</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <img src="icon 3.png" alt="" />
                    <div>
                        <h1 className="font-medium text-xl">Start tracking time with just one click</h1>
                        <p>Track time manually or automatically and monitor hours</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchedulingContent