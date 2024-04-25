import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Close, Menu } from "@mui/icons-material";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="max-w-7xl mx-auto pt-5 pb-4 px-10 top-0 sticky z-50  backdrop-blur-lg border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-6 w-full mr-2 lg:h-11 md:h-10"
              src={logo}
              alt=""
            />
          </div>
          <ul className="hidden lg:flex space-x-12">
            <li>
              <a href="">PRODUCTS</a>
            </li>
            <li>
              <a className="text-neutral-400" href="">
                UFI TOKEN
              </a>
            </li>
            <li>
              <a className="text-neutral-400" href="">
                TEAM
              </a>
            </li>
            <li>
              <a className="text-neutral-400" href="">
                BLOG
              </a>
            </li>
            <li>
              <a className="text-neutral-400" href="">
                WIKI
              </a>
            </li>
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={handleMenu} className="ease-in-out duration-1000">
              {menuOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
            <ul className="text-center">
              <li className="py-4">
                <a href="">PRODUCTS</a>
              </li>
              <li className="py-4">
                <a href="">UFI TOKEN</a>
              </li>
              <li className="py-4">
                <a href="">TEAM</a>
              </li>
              <li className="py-4">
                <a href="">BLOG</a>
              </li>
              <li className="py-4">
                <a href="">WIKI</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
