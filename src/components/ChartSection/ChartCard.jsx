import DoughnutChart from "./DoughnutChart"
import DoughnutJS from "./DoughnutJS"

const ChartCard = () => {
    return (
        <div className="relative">
            <div className="z-0 hidden md:flex absolute w-full md:w-[412px] h-[440px] rounded-2xl bg-gradient-to-br from-[#426AE4] via-[#7190ea] to-[#23F0A9] -left-12 -top-12">
            </div>
            <div className="relative z-10 bg-white inline-block md:px-14 py-4 rounded-2xl">
                <div className="-mb-4 flex flex-col justify-center items-center">
                    <h1 className="font-medium text-2xl mt-2">Project Scope</h1>
                    {/* <DoughnutChart /> */}
                    <div className="-mt-6 relative flex justify-center items-end">
                        <DoughnutJS/>
                        <div className="p-1 absolute flex flex-col justify-center items-center mb-24">
                            <h1 className="text-[30px] font-medium">72h 30m</h1>
                            <p className="text-[20px] text-[#504F54]">Total time</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center px-4">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                            <h1 className="md:text-xl">Branding</h1>
                        </div>
                        <h1 className="md:text-xl">17h 30m</h1>
                    </div>
                    <div className="flex justify-between items-center px-4">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                            <h1 className="md:text-xl">User Interface</h1>
                        </div>
                        <h1 className="md:text-xl">23h 30m</h1>
                    </div>
                    <div className="flex justify-between items-center px-4">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-600"></div>
                            <h1 className="md:text-xl">Illustration</h1>
                        </div>
                        <h1 className="md:text-xl">6h 30m</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartCard