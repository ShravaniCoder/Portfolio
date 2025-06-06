"use client";

import React, { useState } from 'react'
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  
  return (
    <div>
      <Navbar openNav={showNavHandler} />
       <MobileNav showNav={showNav} closeNav={closeNavHandler} />
      </div>
  )
}

export default ResponsiveNav;