import React from "react";
import { ScrollRevel } from "../ScrollRevel";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ScrollRevel>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-red-300 via-purple-300 bg-clip-text text-transparent text-center">
            Recent Projects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            {/* Arbichat Project */}
            <div className="p-4 space-y-4 rounded-xl border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <div className="text-transparent border-b-2 py-2 bg-gradient-to-r from-emerald-300 to-amber-300 via-white bg-clip-text">
                <a
                  href="https://github.com/idqam/arbichat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Arbichat
                </a>
              </div>
              <p>RAG chatbot for chatting about emergent tech.</p>
              <div>
                {["React", "NextJS", "TailwindCSS", "Upstash"].map(
                  (tech, key) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                      key={key}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://arbichats.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-300 transition-colors my-4"
                >
                  View Project {">"}
                </a>
              </div>
            </div>

            {/* Conlang Generator Project */}
            <div className="p-4 space-y-4 rounded-xl border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <div className="text-transparent border-b-2 py-2 bg-gradient-to-r from-emerald-300 to-amber-300 via-white bg-clip-text">
                <a
                  href="https://github.com/YOUR_GITHUB_REPO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conlang Generator
                </a>
              </div>
              <p>
                A tool for creating structured, naturalistic grammars and words
                for constructed languages. Users can define phonology, word
                order, noun declensions, verb conjugations, and more. Built with
                Next.js, React, Python (FastAPI), and TailwindCSS for a seamless
                and interactive experience.
              </p>
              <div>
                {["Next.js", "React", "FastAPI", "TailwindCSS", "Python"].map(
                  (tech, key) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                      key={key}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://conlang.lat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-300 transition-colors my-4"
                >
                  View Project {">"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevel>
    </section>
  );
};
