import ChartCard from "./ChartCard"
import ChartContent from "./ChartContent"

const ChartSection = () => {
    return (
        <div className="flex justify-between px-[100px] my-32">
            <div>
                <ChartContent />
            </div>
            <div>
                <ChartCard />
            </div>
        </div>
    )
}

export default ChartSection