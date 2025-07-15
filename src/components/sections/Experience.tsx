"use client";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Audible (Amazon)",
      time: "April 2023 – April 2024",
      description:
        "Worked as a full-time software engineer building high-scale systems and user-focused features in Audible’s web platform. Collaborated cross-functionally with product and design teams. Technologies included React, TypeScript, AWS, and Java.",
    },
    {
      title: "Software Engineering Intern",
      company: "Audible (Amazon)",
      time: "May 2022 – August 2022",
      description:
        "Built a serverless web application using AWS Lambda, DynamoDB, and a React frontend as part of an Audible-sponsored community art initiative with Newark, NJ. Although the project is no longer live, the experience was deeply formative — I learned to architect cloud-native systems, collaborate across disciplines, and grow into a more confident software engineer.",
    },
  ];

  return (
    <section className="space-y-8 mt-16">
      <h2 className="text-3xl font-bold">Professional Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-zinc-800 p-6 rounded-lg border border-zinc-700"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold text-white">
                {exp.title}{" "}
                <span className="text-cyan-400 font-medium">
                  @ {exp.company}
                </span>
              </h3>
              <span className="text-sm text-zinc-400 mt-1 sm:mt-0">
                {exp.time}
              </span>
            </div>
            <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
