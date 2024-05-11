
const NavLinks = () => {
  return (
    <div>
      <ul className="hidden md:flex text-white tracking-wide justify-center items-center md:gap-3 xl:gap-8 text-base md:text-xs xl:text-base">
        <li className="font-bold"><a href="">Home</a></li>
        <li><a className="nav" href="#about">About Us</a></li>
        <li className="z-10 space-x-6 rounded-full overflow-hidden py-[6px]"><a className="nav2" href="#team">Our Team</a></li>
        <li><a className="nav" href="#price">Pricing</a></li>
        <li><a className="nav" href="#blog">Blog</a></li>
        <li><a className="nav" href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default NavLinks