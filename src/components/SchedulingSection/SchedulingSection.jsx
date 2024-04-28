import SchedulingChart from "./SchedulingChart"
import SchedulingContent from "./SchedulingContent"

const SchedulingSection = () => {
    return (
        <div className="px-4 xl:px-[100px] my-16 md:mb-40 md:mt-52 flex flex-col md:flex-row items-center justify-between">
            <div className="md:pl-[80px]">
                <SchedulingChart />
            </div>
            <SchedulingContent />
        </div>
    )
}

export default SchedulingSection