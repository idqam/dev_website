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
        I&apos;m a full-stack software engineer graduated from the University of
        Rochester as a computer science major. I&apos;m passionate about turning
        complex ideas into elegant, scalable products. I specialize in building
        and shipping modern web apps with <u>React</u>, <u>TypeScript</u>, and
        backend systems in
        <span className="text-red-500"> Python</span>,{" "}
        <span className="text-blue-500"> Go</span>, or{" "}
        <span className="text-green-500"> Java</span>.
      </p>

      <p className="max-w-3xl px-4 text-center leading-relaxed">
        My work blends clean architecture with real-world impact — whether
        that’s crafting user-focused interfaces, deploying microservices, or
        integrating AI to power smarter, more intuitive experiences. From MVP to
        production, I move fast, stay lean, and care deeply about code quality,
        performance, and shipping things that actually solve problems.
      </p>

      <span className="">-------------------</span>

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
