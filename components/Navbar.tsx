"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export default function Navbar() {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", href: "" },
    { id: 2, text: "Company", href: "" },
    { id: 3, text: "Resources", href: "" },
  ];

  return (
    <div className="bg-inherit flex justify-between items-center h-20 my-2 max-w-[1240px] mx-auto px-4 text-white">
      {/* Logo */}
      <Image src={"/ace.png"} alt="ace logo" width={"60"} height={"50"}/>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-gray-950 rounded-xl m-2 cursor-pointer duration-300"
          >
            <Link href={`/${item.href}`}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-inherit ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
      <Image className="m-4" src={"/ace.png"} alt="ace logo" width={"60"} height={"50"}/>


        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-gray-950 duration-300 cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
