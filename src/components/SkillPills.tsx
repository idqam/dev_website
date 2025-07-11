// SkillPills.tsx
import { ReactNode } from "react";

interface SkillPillsProps {
  skills: string[];
  children?: ReactNode;
}

export const SkillPills = ({ skills, children }: SkillPillsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <div
          key={skill}
          className="group relative rounded-full p-[2px] transition-transform duration-300 hover:-translate-y-0.5"
        >
          <div className="absolute inset-0 z-0 rounded-full bg-white group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:via-yellow-400 group-hover:to-green-500 transition-all duration-300" />

          <span className="relative z-10 rounded-full bg-white px-4 py-1 text-sm font-medium text-gray-800">
            {skill}
          </span>
        </div>
      ))}
      {children}
    </div>
  );
};
