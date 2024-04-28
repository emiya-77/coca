import DropDown from "./DropDown";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavLogin from "./NavLogin";

const Navbar = () => {
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <Logo />
        <NavLinks />
        <NavLogin />
        <div className="md:hidden">
          <DropDown />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar;