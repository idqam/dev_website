"use client";
import React, { useState } from "react";

const projects = [
  {
    name: "Conlang Generator",
    image: "",
    tech: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "Supabase"],
    description:
      "Design and generate constructed languages (conlangs) using AI-assisted tools and NLP techniques.",
    keySkills:
      "Natural Language Processing, AI integration, Linguistic modeling",
    features: [
      "Custom language generation",
      "Grammar & phonology modeling",
      "AI-assisted vocabulary creation",
    ],
    status: "Deployed",
    repo: "https://github.com/idqam/conlangGenFrontEnd",
    demo: "https://conlang.lat",
  },
  {
    name: "URL Shortener",
    image: "",
    tech: ["Go", "React", "Next.js", "Supabase"],
    description:
      "Build, track, and analyze shortened URLs with real-time database updates and backend monitoring.",
    keySkills:
      "Full-stack engineering, backend architecture, real-time databases, production-readiness",
    features: [
      "URL shortening with custom slugs",
      "Click tracking & analytics",
      "Link expiration & management",
    ],
    status: "In Progress",
    repo: "",
    demo: "",
  },
  {
    name: "Phases App",
    image: "",
    tech: ["React Native", "Firebase", "Express.js", "OpenAI"],
    description:
      "A second brain and supportive assistant app for busy moms, powered by AI.",
    keySkills:
      "Mobile development, AI integration, user-centric design, product thinking",
    features: [
      "Task tracking and reminders",
      "Conversational AI assistant",
      "Personalized daily phase planning",
    ],
    status: "In Progress",
    repo: "",
    demo: "",
  },
];

const currentProjects = projects.filter((p) => p.status === "In Progress");
const pastProjects = projects.filter((p) => p.status === "Deployed");

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <div className="border-2 p-6 rounded-xl bg-white text-gray-800 w-full max-w-3xl space-y-4 shadow-md">
    <div className="flex justify-center">
      <h3 className="text-2xl font-semibold">{project.name}</h3>
    </div>
    <p className="text-sm text-gray-700 italic">{project.keySkills}</p>
    <p>{project.description}</p>
    <ul className="list-disc list-inside text-sm text-gray-600">
      {project.features.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, i) => (
        <span
          key={i}
          className="bg-blue-500/10 text-blue-600 px-3 py-1 text-sm rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          className="text-green-600 hover:underline"
        >
          Live Demo
        </a>
      )}
    </div>
  </div>
);

export const Projects = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [pastIndex, setPastIndex] = useState(0);

  const cycle = (dir: "next" | "prev", type: "current" | "past") => {
    if (type === "current") {
      setCurrIndex((prev) =>
        dir === "next"
          ? (prev + 1) % currentProjects.length
          : (prev - 1 + currentProjects.length) % currentProjects.length
      );
    } else {
      setPastIndex((prev) =>
        dir === "next"
          ? (prev + 1) % pastProjects.length
          : (prev - 1 + pastProjects.length) % pastProjects.length
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-800">
      {/* Current Projects */}
      {currentProjects.length > 0 && (
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Current Projects
          </h2>
          <ProjectCard project={currentProjects[currIndex]} />
          <div className="flex justify-between items-center w-full max-w-3xl px-4">
            <button
              onClick={() => cycle("prev", "current")}
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              ← Prev
            </button>
            <div className="flex gap-2">
              {currentProjects.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === currIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => cycle("next", "current")}
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {pastProjects.length > 0 && (
        <div className="w-full flex flex-col items-center gap-4 mt-10">
          <h2 className="text-xl md:text-2xl font-semibold">Past Projects</h2>
          <ProjectCard project={pastProjects[pastIndex]} />
          <div className="flex justify-between items-center w-full max-w-3xl px-4">
            <button
              onClick={() => cycle("prev", "past")}
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              ← Prev
            </button>
            <div className="flex gap-2">
              {pastProjects.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === pastIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => cycle("next", "past")}
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
