
const SchedulingChart = () => {
    return (
        <div className="rounded-2xl relative flex justify-center items-center">
            <div className="z-0 absolute hidden md:flex md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[380px] xl:w-[412px] xl:h-[440px] 2xl:w-[500px] 2xl:h-[500px] rounded-2xl bg-gradient-to-br from-[#426AE4] via-[#7190ea] to-[#23F0A9] -left-12 -top-12">
            </div>
            <div className="relative z-10 h-[350px] w-[310px] xl:h-[500px] xl:w-[470px] bg-white inline-block px-4 xl:px-14 py-4 rounded-2xl overflow-hidden">
                <img className="h-full object-fit" src="Overal time used.png" alt="" />
            </div>
        </div>
    )
}

export default SchedulingChart