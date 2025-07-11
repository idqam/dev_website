import { SkillPills } from "../SkillPills";
import { useState } from "react";

const skillSections = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Figma",
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "Python",
      "Go",
      "Java",
      "Spring Boot",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AWS",
      "CI/CD",
    ],
  },
  {
    title: "AI & ML Integration",
    skills: ["OpenAI API", "Hugging Face", "LangChain", "AI Integration"],
  },
  {
    title: "Testing & Tooling",
    skills: [
      "Jest",
      "React Testing Library",
      "Git",
      "GitHub Actions",
      "ESLint",
      "Prettier",
    ],
  },
  {
    title: "Architecture & Workflow",
    skills: ["System Design", "Agile", "Scrum", "Code Reviews"],
  },
];

export const About = () => {
  const [index, setIndex] = useState(0);
  const { title, skills } = skillSections[index];

  const next = () => setIndex((prev) => (prev + 1) % skillSections.length);
  const prev = () =>
    setIndex(
      (prev: number) => (prev - 1 + skillSections.length) % skillSections.length
    );

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold">Who am I?</h1>

      <p className="max-w-3xl px-4 text-center leading-relaxed">
        I&apos;m a full-stack software engineer and recent CS graduate from the
        University of Rochester. I focus on building thoughtful tools and
        systems — often backend-heavy — that blend clean architecture with
        real-world impact. I care deeply about solving actual problems with
        well-structured code.
      </p>

      <p className="max-w-3xl px-4 text-center leading-relaxed">
        My experience includes an internship along with a ~year of full-time SWE
        at <u>Audible</u> and building several full-stack MVPs independently. I
        work comfortably across the stack, using technologies like <u>React</u>,{" "}
        <u>TypeScript</u>, <span className="text-red-500">Python</span>,{" "}
        <span className="text-blue-500">Go</span>, and{" "}
        <span className="text-green-500">Java</span>, along with modern tools
        like Supabase, Firebase, and OpenAI APIs.
      </p>

      <p className="max-w-3xl px-4 text-center leading-relaxed">
        I’m especially interested in backend systems, API design, and the
        intersection of language and computation. I enjoy thinking about how
        systems can be expressive, efficient, and human-aware. Outside of tech,
        I spend time reading about aesthetics and cybernetics 📖, skating 🛹
        when I can, and building Magic: The Gathering decks that occasionally
        win 🎴.
      </p>

      <span className="mt-2">-------------------</span>

      <div className="border-2 rounded-xl p-4 w-full max-w-4xl bg-white space-y-4">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">{title}</h2>
          <SkillPills skills={skills} />
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={prev}
            className="text-blue-500 hover:text-blue-700 transition font-semibold"
          >
            ← Prev
          </button>
          <div className="flex gap-1">
            {skillSections.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="text-blue-500 hover:text-blue-700 transition font-semibold"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};
