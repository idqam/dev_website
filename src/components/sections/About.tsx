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
          <div className="grid grid-cols-2 overflow-auto ">
            <SkillPills name="Frontend" skills={frontendSkills} />
            <SkillPills name="Backend" skills={backendSkills} />
            <SkillPills name="General" skills={generalSkills} />
          </div>

          <div className="grid grid-cols-2 mg:grid-cols-3 gap-6 mt-8 ">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.A. in Computer Science, Math minor</strong> -
                  Universtiy of Rochester (2019-2025)
                </li>
                <li>
                  <strong> Relevant Coursework</strong>: Data Structures &
                  Algorithms, Machine Learning, Deep Learning, Logic in AI,
                  Linear Algebra, Database Systems, Data Mining, Quantum
                  Computing, Natural Language Processing, Networks & Systems.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Work Experience</h3>
              <ul className="list-disc list-inside">
                {" "}
                <li>
                  {" "}
                  <strong> Audible SWE Intern</strong> - (2022-2022){" "}
                </li>{" "}
                <li>
                  <strong>Full-stack software engineer Audible</strong> -
                  (2023-2024){" "}
                </li>{" "}
                <li> BAF Network Volunteer - 2024</li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
