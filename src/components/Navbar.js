import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function Navbar() {
  const [menu, Setmenu] = useState(false);
  const handleMenu = () => {
    Setmenu(!menu);
  };
  return (
    <div className="w-full bg-white"> <div>
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <img src="assets/images/logo1.svg" alt="logo" width={80} />
        </div>
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-10 ">
          <Link
            to="crypto"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-blue-500 transition-all cursor-pointer"
          >
            Crypto Taxes
          </Link>

          <Link
            to="tools"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-blue-500 transition-all cursor-pointer"
          >
            Free Tools
          </Link>
          <Link
            to="resources"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-blue-500 transition-all cursor-pointer"
          >
            Resource Center
          </Link>
          <button className="bg-blue-500 text-white rounded-lg px-8 py-2 hover:text-blue-400 hover:bg-blue-900 ">
            Get Started
          </button>
        </nav>
        <div className="md:hidden  flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleMenu} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleMenu} />
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
