import { useState } from "react"
import PackageCard from "./PackageCard"
import PackageHeader from "./PackageHeader"

const packages = [
    {
        id: 1,
        title:"Basic",
        pricePerMonth:"10",
        pricePerYear:"100",
        subTitle:"Our most popular plan."
    },
    {
        id: 2,
        title:"Business",
        pricePerMonth:"20",
        pricePerYear:"200",
        subTitle:"Growing teams up to 20 users."
    },
    {
        id: 3,
        title:"Enterprise",
        pricePerMonth:"40",
        pricePerYear:"400",
        subTitle:"Advanced features + unlimited users."
    }
]

const PackageSection = () => {
    const [hovered, setHovered] = useState(0);
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <div id="price" className="px-4 md:px-[100px] mt-10 mb-20 md:mb-48">
            <PackageHeader setIsMonthly={setIsMonthly} />
            {/* <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10 xl:gap-12">
                <PackageCard hovered={hovered} setHovered={setHovered} title="Basic" price="10" subTitle="Our most popular plan." />
                <PackageCard hovered={hovered} setHovered={setHovered} title="Business" price="20" subTitle="Growing teams up to 20 users." />
                <PackageCard hovered={hovered} setHovered={setHovered} title="Enterprise" price="40" subTitle="Advanced features + unlimited users." />
            </div> */}
            <div className="p-2 flex flex-col md:flex-row flex-wrap xl:flex-nowrap justify-center items-center gap-10 xl:gap-12">
                {
                    packages.map((pack) => {
                        return <PackageCard key={pack.id} isMonthly={isMonthly} hovered={hovered} setHovered={setHovered} pack={pack} />
                    })
                }
            </div>
        </div>
    )
}

export default PackageSection