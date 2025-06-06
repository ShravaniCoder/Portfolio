import Image from 'next/image';
import React from 'react';
import AboutImg from '@/public/About.png';
import { IoStar } from 'react-icons/io5';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { BiLogoJavascript, BiLogoTypescript, BiSolidFileCss, BiSolidFileHtml } from 'react-icons/bi';
import { FaGithub, FaReact } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { TechIcon } from './TechIcon';
import { ToolboxItems } from './ToolboxItems';

const toolboxItems = [
  { title: "Javascript", iconType: BiLogoJavascript },
  { title: "Typescript", iconType: BiLogoTypescript  },
 
  { title: "React.js", iconType: FaReact },
  { title: "Next.js", iconType: RiNextjsLine },
  { title: "Github", iconType: FaGithub },
];
const About = () => {
    
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-5 my-20">
        <div className="w-64 sm:w-80  rounded-3xl max-w-none">
          <Image src={AboutImg} alt="aboutimg" className="w-full  rounded-3xl" />
        </div>
        <div className="flex-1 border border-gray-300 rounded-2xl p-0 h-[320px]">
          <div className="flex flex-col">
            <div className="px-6 pt-6">
              <div className="inline-flex items-center gap-2 ">
                {" "}
                <IoStar className="size-6 text-emerald-300" />
                <h3 className="font-serif text-2xl">My Skills Box</h3>
              </div>

              <p className="text-base text-gray-900">
                I’ve gained practical experience through an internship and
                freelance work, where I built real-world projects using
                React.js, Next.js, Tailwind CSS, Express.js, and MongoDB. I
                enjoy solving problems, turning ideas into functional websites,
                and continuously improving my skills to grow in the field of web
                development.
              </p>
            </div>
            <div className="px-4 overflow-hidden">
              <ToolboxItems items={toolboxItems} className="mt-6" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;