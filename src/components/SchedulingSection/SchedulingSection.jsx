import SchedulingChart from "./SchedulingChart"
import SchedulingContent from "./SchedulingContent"

const SchedulingSection = () => {
    return (
        <div className="px-[100px] my-36 flex justify-between">
            <div className="pl-[80px]">
                <SchedulingChart />
            </div>
            <SchedulingContent />
        </div>
    )
}

export default SchedulingSection