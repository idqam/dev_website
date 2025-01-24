import React from "react";
import SkillManifest from "./SkillCard";
import { CssIcon } from "@/icons/CssIcon";
import { HtmlIcon } from "@/icons/HtmlIcon";
import { NextIcon } from "@/icons/NextIcon";
import { ReactIcon } from "@/icons/ReactIcon";

const items = [
  { svg: <HtmlIcon />, title: "HTML" },
  { svg: <CssIcon />, title: "CSS" },
  { svg: <ReactIcon />, title: "React" },
  { svg: <NextIcon />, title: "Next.js" },
  { svg: <ReactIcon />, title: "Java" },
  { svg: <ReactIcon />, title: "Rust" },
  { svg: <ReactIcon />, title: "Node.js" },
  { svg: <ReactIcon />, title: "Git" },
  { svg: <ReactIcon />, title: "Docker" },
  { svg: <ReactIcon />, title: "Python" },
  { svg: <ReactIcon />, title: "Lisp" },
  { svg: <ReactIcon />, title: "Springboot" },
  { svg: <ReactIcon />, title: "AWS" },
  { svg: <ReactIcon />, title: "Typescript" },
];

export const IconList = () => {
  return (
    <div className="mt-10 fade-in">
      <SkillManifest skills={items} delay={200} />
    </div>
  );
};
