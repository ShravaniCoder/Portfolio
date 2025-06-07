"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/public/logoo.png";
import { LuMoon } from "react-icons/lu";
import { BiMenuAltRight } from "react-icons/bi";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMounted, setIsMounted] = useState(false); 
  useEffect(() => {
    setIsMounted(true); 
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    
  }, []);

  return (
    <nav
      className={`flex items-center justify-between w-full fixed px-5 py-4 lg:px-9 xl:px-[9%] z-50 transition-all duration-300 ${
        isMounted && isScroll
          ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
          : ""
      }`}
    >
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
          height={50}
          width={50}
          className="w-16 rounded-full"
        />
      </Link>

      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
          !isScroll
            ? "bg-white shadow-sm bg-opacity-50 bg-gradient-to-r from-orange-50 via-emerald-50 to-purple-50"
            : ""
        }`}
      >
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <button>
          <LuMoon className="text-2xl" />
        </button>
        <button>
          <BiMenuAltRight
            onClick={openNav}
            className="block md:hidden text-2xl"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
