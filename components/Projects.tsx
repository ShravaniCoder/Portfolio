"use client";
import { projectsData } from '@/Data/data';

import React, { useState } from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "completed" | "ongoing">('all');
  const filteredProject = filter === "all" ? projectsData : projectsData.filter(project => project.status === filter)
  return (
    <div id="projects" className="w-full px-[10%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl">My Projects</h2>
      <div className="flex justify-center gap-4 my-14">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-2xl ${
            filter === "all" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          ALL
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded-2xl ${
            filter === "completed"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          COMPLETED
        </button>
        <button
          onClick={() => setFilter("ongoing")}
          className={`px-4 py-2 rounded-2xl ${
            filter === "ongoing" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          ONGOING
        </button>
      </div>
      <div className="mx-auto  mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {filteredProject.map((item) => (
          <ProjectCard
            key={item.id}
            id={item.id}
            imgUrl={item.image}
            previewUrl={item.previewUrl}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;