import PackageCard from "./PackageCard"
import PackageHeader from "./PackageHeader"

const PackageSection = () => {
    return (
        <div className="px-[100px] mb-28">
            <PackageHeader />
            <div className="flex justify-center gap-20">
                <PackageCard title="Basic" price="10" subTitle="Our most popular plan." />
                <PackageCard title="Basic" price="10" subTitle="Our most popular plan." />
                <PackageCard title="Basic" price="10" subTitle="Our most popular plan." />
            </div>
        </div>
    )
}

export default PackageSection