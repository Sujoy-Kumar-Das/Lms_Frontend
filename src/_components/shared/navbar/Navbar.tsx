"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Logo from "../logo/Logo";
import NavItems from "./NavItems";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="bg-background shadow-md fixed w-full z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <NavItems className="hidden md:ml-10 md:flex md:space-x-8" />
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-dark hover:text-primary font-medium">
              Login
            </a>
            <a
              href="#"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Sign Up
            </a>
          </div>
          <div className="md:hidden flex items-center">
            {!open ? (
              <button
                type="button"
                onClick={handleToggleMenu}
                className="text-dark hover:text-primary focus:outline-none"
              >
                <IoMdMenu />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleToggleMenu}
                className="text-dark hover:text-primary focus:outline-none"
              >
                <RxCross1 />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className=" md:hidden block bg-background shadow-lg">
          <NavItems
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col"
            onToggleMenu={handleToggleMenu}
          />
        </div>
      )}
    </nav>
  );
}
