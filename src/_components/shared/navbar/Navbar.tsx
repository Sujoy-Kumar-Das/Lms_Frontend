"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Logo from "../logo/Logo";
import NavAuthButton from "./NavAuthButton";
import NavItems from "./NavItems";

export default function Navbar({ isAuth = false }: { isAuth?: boolean }) {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="bg-background shadow-md fixed w-full z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Nav */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Items */}
          <NavItems className="hidden md:ml-10 md:flex md:space-x-8" />

          {/* Desktop Auth */}
          <div className="hidden md:block">
            <NavAuthButton isAuth={isAuth} />
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={handleToggleMenu}
              className="text-dark hover:text-primary focus:outline-none text-2xl"
            >
              {open ? <RxCross1 /> : <IoMdMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-background shadow-lg transition-all duration-300 ease-in-out ${
          open
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <NavItems
          className="px-4 pt-4 pb-3 space-y-3 flex flex-col text-center"
          onToggleMenu={handleToggleMenu}
        />
        <div className="px-4 pb-6 text-center">
          <NavAuthButton isAuth={isAuth} />
        </div>
      </div>
    </nav>
  );
}
