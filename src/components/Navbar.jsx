import { useState } from "react";
import logo from "../assets/images/logo.svg";
import iconClose from "../assets/images/icon-close.svg";
import iconMenu from "../assets/images/icon-hamburger.svg";
import Button from "./Button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div
        className={`${
          menu &&
          "bg-gradient-to-t from-blue-50 to-black  opacity-50 absolute h-screen w-full top-0 left-0  z-[100] md:hidden"
        } `}
      ></div>
      <nav className="flex  justify-between items-center p-4 relative max-w-[1100px] m-auto md:p-2 z-[700] bg-gray-50">
        <div>
          <img src={logo} alt="Logo de la empresa" />
        </div>
        <button
          onClick={() => setMenu(!menu)}
          className="static z-[500] md:hidden"
        >
          {menu ? <img src={iconClose} alt="menu close" /> : <img src={iconMenu} alt="menu open"/>}
        </button>
        <div
          className={`${!menu && "hidden "} 
          absolute bg-gray-50  flex flex-col items-center justify-center  top-12 right-0 left-0 m-6 rounded-md p-6   md:static md:flex md:bg-transparent md:m-0 md:p-0 `}
        >
          <ul className="flex flex-col items-center gap-6 text-lg md:flex-row ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className={`hidden md:block`}>
          <Button text="Request Invite" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
