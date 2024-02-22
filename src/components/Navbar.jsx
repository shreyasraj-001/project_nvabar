import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white z-9 custom-shadow w-full fixed top-0 left-0 z-20 ">
    <nav className="py-4 md:px-10 px-9 justify-between items-center navbar md:mx-auto m-0">
      <img src={logo} alt="hoobank" className=" w-16 h-10 object-contain md:w-24 md:h-8 cursor-pointer" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]  ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)
            }
          >
            {/* Login Button  */}
            {nav.id === "login" ? (
                // Use a button element for login
                <button
                  className="btn-primary rounded-md btn-grad "
                  onClick={() => handleLoginClick()} // Handle login click
                >
                  {nav.title}
                </button>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
          </li>
        ))}     
      </ul>

            
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          style={{ filter: 'grayscale(100%) invert(1)' }}
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >

                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
