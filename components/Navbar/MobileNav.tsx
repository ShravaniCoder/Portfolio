import Link from 'next/link';
import React from 'react'
import { RxCross2 } from 'react-icons/rx';

type Props = {
  showNav: boolean,
  closeNav: () => void
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-full';
  return (
    <>
      <ul
        className={`flex ${navOpen} md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-orange-50 transform transition duration-500`}
      >
        <div>
          <RxCross2
            onClick={closeNav}
            className="text-2xl absolute top-6 right-6"
          />
        </div>
        <li>
          <Link onClick={closeNav} href="#home">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={closeNav} href="#about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={closeNav} href="#projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={closeNav} href="#experience">
            Experience
          </Link>
        </li>{" "}
        <li>
          <Link onClick={closeNav} href="#contact">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default MobileNav;