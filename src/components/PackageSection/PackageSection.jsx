import PackageCard from "./PackageCard"
import PackageHeader from "./PackageHeader"

const PackageSection = () => {
    return (
        <div id="price" className="px-4 md:px-[100px] mt-10 mb-20 md:mb-48">
            <PackageHeader />
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10 xl:gap-12">
                <PackageCard title="Basic" price="10" subTitle="Our most popular plan." />
                <PackageCard title="Business" price="20" subTitle="Growing teams up to 20 users." />
                <PackageCard title="Enterprise" price="40" subTitle="Advanced features + unlimited users." />
            </div>
        </div>
    )
}

export default PackageSection