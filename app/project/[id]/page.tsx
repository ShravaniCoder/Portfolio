


import { projectsData } from "@/Data/data";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectProps = {
  params: {
    id: string;
  };
};

const ProjectDetailsPage = ({ params }: ProjectProps) => {
  const project = projectsData.find((p) => p.id === Number(params.id));

  if (!project) {
    notFound(); 
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded mb-6"
      />
      <p className="text-lg text-gray-700">
       {project.description}
      </p>
      <Link
        href={project.previewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-emerald-500 underline"
      >
        Visit Live Project
      </Link>
    </div>
  );
};

export default ProjectDetailsPage;
