
const GreenButton = ({ content, color }) => {
    return (
        <div className={`inline-block px-[24px] py-[12px] rounded-full bg-[${color}] cursor-pointer hover:bg-opacity-80 transition-all duration-300`}>
            <h1 className="font-medium text-center">{content}</h1>
        </div>
    )
}

export default GreenButton