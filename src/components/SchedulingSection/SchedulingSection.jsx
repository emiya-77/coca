import SchedulingChart from "./SchedulingChart"
import SchedulingContent from "./SchedulingContent"

const SchedulingSection = () => {
    return (
        <div className="px-4 xl:px-[100px] md:py-4 my-16 md:mb-40 xl:mt-52 flex flex-col md:flex-row items-center justify-between">
            <div className="md:pl-[50px] xl:pl-[80px] m-2">
                <SchedulingChart />
            </div>
            <SchedulingContent />
        </div>
    )
}

export default SchedulingSection