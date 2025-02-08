import { SkillPills } from "../SkillPills";

export const About = () => {
  const frontendSkills = ["React", "Next.js", "TailwindCSS", "TS/JS", "Figma"];
  const backendSkills = [
    "Node.js",
    "Postgres",
    "Docker",
    "AWS",
    "Springboot",
    "Python",
    "Go",
    "Java",
  ];
  const generalSkills = ["Jest", "React Testing Library", "CI/CD", "Git"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-red-300 via-purple-300  bg-clip-text text-transparent text-center ">
          About me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Computer science graduate from the University of Rochester in New
            York with a minor in Math, previously at Audible, currently
            building, learning, growing.
          </p>
          <SkillPills name="Frontend" skills={frontendSkills} />
          <SkillPills name="Backend" skills={backendSkills} />
          <SkillPills name="General" skills={generalSkills} />
        </div>
      </div>
    </section>
  );
};
