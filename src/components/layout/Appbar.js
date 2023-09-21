// components/Navbar.js
import Logo from "@/assets/svg/Logo";
import React from "react";
import FlagImg from "@/assets/flag.png";
import Image from "next/image";
import Menu from "@/assets/svg/Menu";
console.log(FlagImg);

const Navbar = ({ openSidebar, openLogin }) => {
  return (
    <nav className="bg-darkPrimary px-8 h-16 flex items-center justify-between">
      <div className="h-9 space-x-2 flex items-center">
        <Menu onClick={openSidebar} />
        <Logo />
      </div>
      <div className="space-x-4 h-10 py-4 flex items-center">
        <button
          onClick={openLogin}
          className="px-8 font-semibold uppercase py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
        >
          Sign In
        </button>
        <button className="px-3 h-10 font-semibold py-2 uppercase rounded-md bg-red-500 hover:bg-red-600 text-white">
          Registration
        </button>
        <div className="border-l border-gray-600 h-8" />
        <Image
          src={FlagImg}
          alt="Your Image"
          className="rounded-full w-8 h-8"
        />
      </div>
    </nav>
  );
};

export default Navbar;
