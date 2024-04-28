
const HeroRight = () => {
    return (
        <div className="flex flex-col justify-start relative order-3 md:order-3">
            <div>
                <img src="Content.png" alt="" />
            </div>
            <div className="absolute bottom-0 left-6 md:-bottom-10 xl:bottom-24 xl:left-16 flex justify-center items-center gap-2 xl:gap-4 divide-x-2 text-white">
                <div>
                    <img className="w-20 md:w-32" src="Group 1171274759.png" alt="" />
                </div>
                <div className="pl-2 md:pl-4">
                    <h1 className="text-2xl xl:text-4xl font-medium">84k</h1>
                    <p className="text-xs xl:text-base">Customers worldwide</p>
                </div>
            </div>
        </div>
    )
}

export default HeroRight