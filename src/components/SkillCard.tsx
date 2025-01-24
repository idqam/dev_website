import React, { useState, useEffect } from "react";

interface SkillCardProps {
  svg: React.ReactNode;
  title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ svg, title }) => {
  return (
    <div className="skill-card fade-in">
      <div className="flex items-center justify-center w-16 h-16">{svg}</div>
      <p className="mt-4 text-center text-sm font-semibold text-white">
        {title}
      </p>
    </div>
  );
};

interface SkillManifestProps {
  skills: { svg: React.ReactNode; title: string }[];
  delay: number;
}

const SkillManifest: React.FC<SkillManifestProps> = ({
  skills = [],
  delay,
}) => {
  const [visibleSkills, setVisibleSkills] = useState<number>(0);

  useEffect(() => {
    if (visibleSkills < skills.length) {
      const timer = setTimeout(() => {
        setVisibleSkills((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [visibleSkills, skills.length, delay]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4 ">
      {skills.slice(0, visibleSkills).map((skill, index) => (
        <SkillCard key={index} svg={skill.svg} title={skill.title} />
      ))}
    </div>
  );
};

export default SkillManifest;
