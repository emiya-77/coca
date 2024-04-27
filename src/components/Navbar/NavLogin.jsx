import GreenButton from "../Button/GreenButton";

const NavLogin = () => {
  return (
    <div className="flex justify-center items-center gap-6">
      <div>
        <h1 className="font-medium text-white">Login</h1>
      </div>
      <GreenButton content="Sign Up free" color="#23F0A9" />
    </div>
  )
}

export default NavLogin;