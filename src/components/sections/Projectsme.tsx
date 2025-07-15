"use client";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "Conlang Generator",
    description:
      "Design and generate constructed languages (conlangs) using AI-assisted tools and NLP techniques.",
    status: "LIVE",
    link: "https://conlang.lat",
  },
  {
    name: "URL Shortener",
    description:
      "Track and manage short links with custom slugs, click analytics, and expiration settings.",
    status: "IN PROGRESS",
    link: "",
  },
  {
    name: "Phases App",
    description:
      "A second-brain assistant for busy moms — powered by AI, with task tracking and conversational support.",
    status: "IN PROGRESS",
    link: "",
  },
];

const badgeStyles = {
  LIVE: "bg-green-600/10 text-green-500",
  "IN PROGRESS": "bg-blue-600/10 text-blue-500",
  UPCOMING: "bg-yellow-600/10 text-yellow-500",
};

export const Projectsme = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">Things I’ve built.</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{proj.name}</h3>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  badgeStyles[proj.status as keyof typeof badgeStyles]
                }`}
              >
                {proj.status}
              </span>
            </div>
            <p className="text-sm text-zinc-300 mb-4">{proj.description}</p>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:underline"
              >
                Visit <FiExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
