import About from '@/components/About';
import Header from '@/components/Header';
import ResponsiveNav from '@/components/Navbar/ResponsiveNav';
import Projects from '@/components/Projects';
import React from 'react';


const HomePage = () => {
  return (
    <>
      <div className=''>
        <ResponsiveNav />
        <Header />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default HomePage;
