import React from "react";
import { Link } from "react-scroll";


function Navbar() {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <img src="assets/images/logo.png" alt="logo" width={70} />
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
      </div>
    </div>
  );
}

export default Navbar;
