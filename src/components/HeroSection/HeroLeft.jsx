
const HeroLeft = () => {
    return (
        <div className="flex flex-col justify-start relative">
            <div>
                <img src="Income vs Expenses.png" alt="" />
            </div>
            <div className="absolute bottom-24 left-16 flex justify-center gap-4 divide-x-2 text-white">
                <div>
                    <h1 className="text-4xl font-medium">15+</h1>
                    <p>Years of experience</p>
                </div>
                <div className="pl-4">
                    <h1 className="text-4xl font-medium">84k</h1>
                    <p>Customers worldwide</p>
                </div>
            </div>
        </div>
    )
}

export default HeroLeft