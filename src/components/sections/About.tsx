import { ScrollRevel } from "../ScrollRevel";
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
    "FastAPI",
  ];
  const generalSkills = ["Jest", "React Testing Library", "CI/CD", "Git"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ScrollRevel>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-sm sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-red-300 via-purple-300  bg-clip-text text-transparent text-center ">
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
                    <strong className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-pink-200 to-cyan-200">
                      B.A. in Computer Science, Math minor
                    </strong>{" "}
                    - Universtiy of Rochester (August 2019- December 2024)
                  </li>
                  <li>
                    <strong className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-pink-200 to-cyan-200">
                      {" "}
                      Relevant Coursework
                    </strong>
                    : Data Structures & Algorithms, Machine Learning, Deep
                    Learning, Logic in AI, Linear Algebra, Database Systems,
                    Data Mining, Quantum Computing, Natural Language Processing,
                    Networks & Systems.
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Work Experience</h3>
                <ul className="list-disc list-inside">
                  {" "}
                  <li>
                    {" "}
                    <strong className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-pink-200 to-cyan-200">
                      {" "}
                      Audible SWE Intern
                    </strong>{" "}
                    - (May 2022 - August 2022){" "}
                  </li>{" "}
                  <li>
                    <strong className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-pink-200 to-cyan-200">
                      Audible Full-stack Software Engineer
                    </strong>{" "}
                    - (April 2023- April 2024){" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <strong className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-pink-200 to-cyan-200">
                      Inversiones Owen S{" "}
                    </strong>
                    - (June 2024 - December 2024 )
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevel>
    </section>
  );
};
