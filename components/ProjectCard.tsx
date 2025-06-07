import Link from 'next/link';
import React from 'react';
import { FaCode, FaLocationArrow } from 'react-icons/fa';

interface ProjectCardProps {
    imgUrl: string;
    previewUrl: string;
  title: string;
  id: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({imgUrl,previewUrl, title, id}) => {
  return (
    <div>
      <div className=" rounded-b-xl shadow-sm">
        <div
          className="h-52 md:h-72  "
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover " }}
        ></div>
        <div className="text-black rounded-b-xl bg-white py-6 px-4 flex items-center justify-between">
          <h5 className="font-xl font-semibold mb-2">{title}</h5>
          <div className="flex items-center gap-2">
            <Link
              href={previewUrl}
              className="h-7 w-7 border-2 relative rounded-full border-[#ADB7BE] hover:border-orange-300"
              target="_blank"
            >
              <FaLocationArrow className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer hover:text-orange-300" />
            </Link>
            <Link
              href={`/projects/${id}`}
              className="h-7 w-7 border-2 relative rounded-full border-[#ADB7BE] hover:border-emerald-300"
              
            >
              <FaCode className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer hover:text-emerald-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;