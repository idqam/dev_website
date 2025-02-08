type SkillPillsProps = {
  skills: string[];
  name: string;
};
export const SkillPills = ({ name, skills }: SkillPillsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-xl p-6 ">
        <h3 className="text-xl font-bold mb-4"> {name} </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, key) => (
            <span
              className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
              key={key}
            >
              {" "}
              {skill}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
