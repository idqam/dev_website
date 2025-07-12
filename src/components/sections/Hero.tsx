"use client";
import { useEffect, useState } from "react";
import { SkillPills } from "../SkillPills";

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

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const forms = ["Software Engineer", "Philosopher", "Writer", "Builder"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % forms.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-5xl text-center sm:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100">
          Hi, I&apos;m Owen{" "}
          <span className="inline-block origin-[70%_70%] animate-[wave_2s_ease-in-out_infinite]">
            💮
          </span>
          <div className="text-cyan-400 transition-opacity duration-700 opacity-100 mt-2">
            {forms[index]}
          </div>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto sm:mx-0">
          I&apos;m a full-stack developer interested in thoughtful APIs, clean
          system architecture, and bringing real ideas to life through code to
          build and ship. I love to stay up to date in tech and have a general
          love for all things software engineering, computer science, philosophy
          and math. Now working with TypeScript, Go, Python, and AI tools.
        </p>
        <div>TODO GITHUB AND LINKEDIN</div>
      </div>
    </section>
  );
};
// export const Hero = () => {

//   return (
//     <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12 text-white bg-gradient-to-br from-slate-900 to-gray-950">
//       {/* Headline */}
//       <div className="max-w-4xl text-center space-y-4">
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//           Hi, I’m Owen — a Full-Stack Developer who builds with clarity, empathy, and intention.
//         </h1>
//         <p className="text-lg text-gray-300">
//           I’m a backend-leaning engineer with a deep interest in API design, language systems,
//           and building tools that solve real problems. Previously at <span className="underline">Audible</span>,
//           now creating thoughtful software with TypeScript, Go, Python, and AI.
//         </p>
//       </div>

//       {/* Skill Section */}

//     </section>
//   );
// };

//  const [index, setIndex] = useState(0);
//   const { title, skills } = skillSections[index];

//   const next = () => setIndex((prev) => (prev + 1) % skillSections.length);
//   const prev = () =>
//     setIndex((prev) => (prev - 1 + skillSections.length) % skillSections.length);
{
  /* <div className="mt-12 w-full max-w-3xl rounded-2xl p-6 bg-white text-gray-900 space-y-6 shadow-lg">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
          <SkillPills skills={skills} />
      //   </div>

      //   {/* Nav + Dots */
}
//   <div className="flex justify-between items-center">
//     <button
//       onClick={prev}
//       className="text-blue-600 hover:text-blue-800 transition font-semibold"
//     >
//       ← Prev
//     </button>
//     <div className="flex gap-2">
//       {skillSections.map((_, i) => (
//         <span
//           key={i}
//           className={`w-2 h-2 rounded-full transition ${
//             i === index ? "bg-blue-600" : "bg-gray-300"
//           }`}
//         />
//       ))}
//     </div>
//     <button
//       onClick={next}
//       className="text-blue-600 hover:text-blue-800 transition font-semibold"
//     >
//       Next →
//     </button>
//   </div>
// </div> */}
