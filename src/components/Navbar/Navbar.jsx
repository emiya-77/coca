import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavLogin from "./NavLogin";

const Navbar = () => {
  return (
    <div>
        <div className="mb-6 flex justify-between items-center">
            <Logo/>
            <NavLinks/>
            <NavLogin/>
        </div>
        <hr />
    </div>
  )
}

export default Navbar;