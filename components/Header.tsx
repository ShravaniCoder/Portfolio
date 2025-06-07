import Image from 'next/image';
import React from 'react';
import Profile from '@/public/Profile.png';
import Link from 'next/link';
import { IoDownloadOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
      <div>
        <Image
          src={Profile}
          alt=""
          height={100}
          width={100}
          className="rounded-full w-32"
        />
      </div>
      <h3 className="text-xl md:text-2xl mb-4 font-serif">
        Hi ! I'm Shravani Chendwankar{" "}
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] bg-gradient-to-r from-orange-300 via-emerald-300 to-purple-300 bg-clip-text text-transparent">
        Frontend Web Developer based in Mumbai.
      </h1>

      <p className="max-w-2xl mx-auto">
        I specialize in building responsive and dynamic web applications using
        modern technologies like React, Next.js, and Tailwind CSS, turning ideas
        and designs into real, working websites.
      </p>

      <div className="flex items-center mt-4">
        <Link
          href={"/ShravaniChendwankar_Resume.pdf"}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
          <IoDownloadOutline />
        </Link>
      </div>
    </div>
  );
}

export default Header;