
const HeroLeft = () => {
    return (
        <div className="flex flex-col justify-start relative order-2 md:order-1">
            <div>
                <img src="Income vs Expenses.png" alt="" />
            </div>
            <div className="absolute bottom-0 left-6 md:-bottom-10 xl:bottom-24 xl:left-16 flex justify-center gap-2 md:gap-4 divide-x-2 text-white">
                <div>
                    <h1 className="text-2xl xl:text-4xl font-medium">15+</h1>
                    <p className="text-xs xl:text-base">Years of experience</p>
                </div>
                <div className="pl-2 md:pl-4">
                    <h1 className="text-2xl xl:text-4xl font-medium">84k</h1>
                    <p className="text-xs xl:text-base">Customers worldwide</p>
                </div>
            </div>
        </div>
    )
}

export default HeroLeft