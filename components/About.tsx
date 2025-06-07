"use client"
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
import { GiProgression } from 'react-icons/gi';
import { TbBrandRedux } from 'react-icons/tb';

const toolboxItems = [
  { title: "Javascript", iconType: BiLogoJavascript },
  { title: "Typescript", iconType: BiLogoTypescript },
  { title: "HTML", iconType: BiSolidFileHtml },
  { title: "Tailwind.CSS", iconType: SiTailwindcss },
  { title: "React.js", iconType: FaReact },
  { title: "Next.js", iconType: RiNextjsLine },
  { title: "Redux", iconType: TbBrandRedux },
  { title: "Github", iconType: FaGithub },
];
const About = () => {
    
  return (
    <div id="about" className="w-full px-[10%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-10 my-20">
        <div className="w-full lg:w-[35%]  rounded-3xl">
          <Image
            src={AboutImg}
            alt="aboutimg"
            className=" rounded-3xl"
            width={320}
            height={400}
          />
        </div>
        <div className=" w-full lg:w-[70%]  border border-gray-300 rounded-2xl p-0 max-h-[400px]">
          <div className="flex flex-col">
            <div className="px-6 pt-6">
              

              <p className="text-base text-gray-700 flex-wrap">
                I’ve gained practical experience through an internship and
                freelance work, where I built real-world projects using
                React.js, Next.js, Tailwind CSS, Express.js, and MongoDB. I
                enjoy solving problems, turning ideas into functional websites,
                and continuously improving my skills to grow in the field of web
                development.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-6 pt-6 ">
              {" "}
              <GiProgression className="size-6 text-orange-300" />
              <h3 className="font-serif text-2xl">Tools I Use </h3>
            </div>
            <div className="px-4 w-full space-y-4 overflow-x-auto">
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-scroll-left"
                className="my-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;