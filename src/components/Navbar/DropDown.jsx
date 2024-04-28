import { FaBars } from "react-icons/fa6";
const DropDown = () => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
                <FaBars className="text-4xl mx-4 text-white" />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-200 rounded-box w-52">
                <li className="font-bold"><a href="">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#price">Pricing</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#contact">Login</a></li>
                <li className="bg-green-500 rounded-full"><a href="#contact">Sign Up</a></li>
            </ul>
        </div>
    )
}

export default DropDown