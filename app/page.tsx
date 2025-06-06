import Header from '@/components/Header';
import ResponsiveNav from '@/components/Navbar/ResponsiveNav';
import React from 'react';


const HomePage = () => {
  return (
    <>
      <div className=''>
        <ResponsiveNav />
        <Header />
      </div>
    </>
  );
}

export default HomePage;
