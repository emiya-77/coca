import { useEffect, useState } from "react"
import ScrollTrigger from 'react-scroll-trigger';

const TaskManagementContent = () => {
    const [filledCopy, setFilledCopy] = useState(0);
    const [filledIll, setFilledIll] = useState(0);
    const [filledUx, setFilledUx] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timerIdCopy;
        let timerIdIll;
        let timerIdUx;

        if (filledCopy < (5/10)*100 && isRunning) {
            timerIdCopy = setInterval(() => {
                setFilledCopy(prevFilled => prevFilled + 2);
            }, 50);
        }
        if (filledIll < (4/7)*100 && isRunning) {
            timerIdIll = setInterval(() => {
                setFilledIll(prevFilled => prevFilled + 2);
            }, 50);
        }
        if (filledUx < (3/8)*100 && isRunning) {
            timerIdUx = setInterval(() => {
                setFilledUx(prevFilled => prevFilled + 2);
            }, 50);
        }
    
        return () => {
            clearInterval(timerIdCopy);
            clearInterval(timerIdIll);
            clearInterval(timerIdUx);
        };
    }, [filledCopy, filledIll, filledUx, isRunning]);

    return (
        <div className="p-3 flex flex-col md:flex-row gap-6 md:gap-1 xl:gap-16">

            {/* Card 1 */}
            <div className="mx-auto w-[90%] md:w-[30%] xl:w-[370px] border-[1px] px-4 py-3 xl:px-8 xl:py-5 rounded-lg">
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
            <div className="mx-auto w-[90%] md:w-[30%] xl:w-[370px] border-[1px] px-4 py-3 xl:px-8 xl:py-5 rounded-lg flex flex-col justify-between">
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
            <div className="mx-auto w-[90%] md:w-[30%] xl:w-[370px] border-[1px] px-4 py-3 xl:px-8 xl:py-5 rounded-lg">
                <div className="mt-2">
                    <h1 className="font-medium text-lg mb-3">Task Progress</h1>
                    <ScrollTrigger onEnter={() => setIsRunning(true)} onExit={() => {
                        setFilledCopy(0);
                        setFilledIll(0);
                        setFilledUx(0);
                        setIsRunning(false);
                    }}>
                        <div>
                            <div className="mb-2">
                                <div className="flex justify-between items-center text-xs mb-1">
                                    <h1 className="font-medium">Copywriting</h1>
                                    <p className="font-medium">5/10</p>
                                </div>
                                <div>
                                    <div className="relative overflow-hidden w-full h-[8px] rounded-full bg-gray-200">
                                        <div 
                                        className={`h-full bg-[#45c646] transition-all duration-500 ease-in-out rounded-full`}
                                        style={{
                                            width: `${filledCopy}%`,
                                        }}
                                        ></div>
                                    </div>
                                </div>
                                {/* <progress className="progress progress-success w-full h-[7px]" value="5" max="10"></progress> */}
                            </div>
                            <div className="mb-2">
                                <div className="flex justify-between items-center text-xs mb-1">
                                    <h1 className="font-medium">Illustration</h1>
                                    <p className="font-medium">4/7</p>
                                </div>
                                <div>
                                    <div className="relative overflow-hidden w-full h-[8px] rounded-full bg-gray-200">
                                        <div 
                                        className={`h-full bg-[#008eff] transition-all duration-500 ease-in-out rounded-full`}
                                        style={{
                                            width: `${filledIll}%`,
                                        }}
                                        ></div>
                                    </div>
                                </div>
                                {/* <progress className="progress progress-info w-full h-[7px]" value="4" max="7"></progress> */}
                            </div>
                            <div className="mb-2">
                                <div className="flex justify-between items-center text-xs mb-1">
                                    <h1 className="font-medium">US Design</h1>
                                    <p className="font-medium">3/8</p>
                                </div>
                                <div>
                                    <div className="relative overflow-hidden w-full h-[8px] rounded-full bg-gray-200">
                                        <div 
                                        className={`h-full bg-[#ffc947] transition-all duration-500 ease-in-out rounded-full`}
                                        style={{
                                            width: `${filledUx}%`,
                                        }}
                                        ></div>
                                    </div>
                                </div>
                                {/* <progress className="progress progress-warning w-full h-[7px]" value="3" max="8"></progress> */}
                            </div>
                        </div>
                    </ScrollTrigger>
                </div>
                <div>
                    <h1 className="text-xl font-bold mt-6">
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