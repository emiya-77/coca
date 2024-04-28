import GreenButton from "../Button/GreenButton";

const NavLogin = () => {
  return (
    <div className="hidden md:flex justify-center items-center gap-4 xl:gap-6">
      <div>
        <h1 className="font-medium text-white text-sm xl:text-base cursor-pointer">Login</h1>
      </div>
      <GreenButton content="Sign Up free" color="#23F0A9" />
    </div>
  )
}

export default NavLogin;