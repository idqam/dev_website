import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectsList: React.FC = () => {
  const projects = [
    {
      image: "/assets/ArbiChat.jpg",
      title: "Project 1",
      description:
        "Full stack RAG chatbot, built with React, Node.js, Typescript, OpenAi Edge functions, and Upstash KV store. Chat with Arbitrum documents.",
      liveLink: "https://arbichats.vercel.app/",
      learnMoreLink: "https://github.com/idqam/arbichat",
    },
    {
      image: "/assets/test1.png",
      title: "Project 2",
      description:
        "Another amazing project with detailed description goes here.",
      liveLink: "#",
      learnMoreLink: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          liveLink={project.liveLink}
          learnMoreLink={project.learnMoreLink}
        />
      ))}
    </div>
  );
};
