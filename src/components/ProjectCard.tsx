import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  liveLink: string;
  learnMoreLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  liveLink,
  learnMoreLink,
}) => {
  return (
    <div className="project-card bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden max-w-2xl shadow-3d-hover ">
      <div
        className="h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 mb-4 text-wrap">{description}</p>
        <div className="flex space-x-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-600"
          >
            Live App
          </a>
          <a
            href={learnMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-800"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};
