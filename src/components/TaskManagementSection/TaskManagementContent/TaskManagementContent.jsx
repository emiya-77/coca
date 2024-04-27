
const TaskManagementContent = () => {
    return (
        <div className="flex gap-16">

            {/* Card 1 */}
            <div className="w-[370px] border-[1px] px-8 py-5 rounded-lg">
                <div className="pb-7">
                    <div className="flex items-center justify-between">
                        <h1 className="font-medium text-lg">Top Clients</h1>
                        <div className="px-3 py-2 text-white inline-block rounded-full bg-gradient-to-br from-[#426AE4] via-[#7190ea] to-[#23F0A9]">
                            <h1 className="font-medium">Active</h1>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4 items-center">
                        <div className="w-[71px] h-[71px] rounded-md bg-gray-300">

                        </div>
                        <div>
                            <h1 className="font-bold">Jonatan Cristy</h1>
                            <p className="text-gray-500 text-sm mt-[6px]">New York</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <h1 className="text-xl font-bold mt-8">
                        Manage customer <br /> relationships
                    </h1>
                    <p className="text-gray-500 mt-4">
                        Improve Customer Satisfaction <br /> with Effective Relationship <br /> Management
                    </p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="w-[370px] border-[1px] px-8 py-4 rounded-lg flex flex-col justify-between">
                <div className="pb-7">
                    <div className="flex gap-4 mt-4 items-center pb-7">
                        <div className="w-[71px] h-[71px] rounded-md bg-gray-300">

                        </div>
                        <div>
                            <h1 className="font-bold">Jonatan Cristy</h1>
                            <p className="text-gray-500 text-sm mt-[6px]">Utilizing Feedback Insights</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div>
                    <h1 className="text-xl font-bold mt-8">
                        Get insights from <br /> feedback to improve
                    </h1>
                    <p className="text-gray-500 mt-4">
                        Utilizing Feedback Insights to <br /> Enhance Your Performance and <br /> Achieve Your Goals
                    </p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="w-[370px] border-[1px] px-8 py-4 rounded-lg">
                <div className="mt-2">
                    <h1 className="font-medium text-lg mb-3">Task Progress</h1>
                    <img src="Frame 1171277178.png" alt="" />
                </div>
                <div>
                    <h1 className="text-xl font-bold mt-8">
                        Review your hard <br /> work&apos;s outcome
                    </h1>
                    <p className="text-gray-500 mt-4">
                        Analyzing Your Hard Work&apos;s <br /> Outcome: The Key to Continued <br /> Growth and Success
                    </p>
                </div>
            </div>
        </div >
    )
}

export default TaskManagementContent