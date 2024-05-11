
const GreenButton = ({ content, color }) => {
    return (
        <div className={`hoverBtn hover:scale-105 inline-block px-[20px] xl:px-[24px] py-[12px] rounded-full bg-[${color}] cursor-pointer hover:bg-opacity-80 transition-all duration-300`}>
            <h1 className="text-xs xl:text-base font-medium text-center">{content}</h1>
        </div>
    )
}

export default GreenButton