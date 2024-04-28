import ChartCard from "./ChartCard"
import ChartContent from "./ChartContent"

const ChartSection = () => {
    return (
        <div id="blog" className="flex flex-col md:flex-row justify-between items-center px-4 xl:px-[100px] my-16 md:my-24 xl:my-36">
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