import React from "react";
import SkillManifest from "./SkillCard";
import { CssIcon } from "@/icons/CssIcon";

import { ReactIcon } from "@/icons/ReactIcon";
import { AWSIcon } from "@/icons/AWSIcon";
import { TypeScriptIcon } from "@/icons/TypeScriptIcon";
import { Django } from "@/icons/Django";
import { Figma } from "@/icons/Figma";
import { Go } from "@/icons/Go";
import { HtmlIcon } from "@/icons/HtmlIcon";
import { JavaIcon } from "@/icons/JavaIcon";
import { Jest } from "@/icons/Jest";
import { NextIcon } from "@/icons/NextIcon";
import { Rust } from "@/icons/Rust";
import { SpringIcon } from "@/icons/SpringIcon";
import { Node } from "@/icons/Node";
import { Postgres } from "@/icons/Postgres";
import { Tailwind } from "@/icons/Tailwind";
import { Git } from "@/icons/Git";
import { Docker } from "@/icons/Docker";
import { JS } from "@/icons/JS";

const items = [
  { svg: <AWSIcon />, title: "AWS" },
  { svg: <CssIcon />, title: "CSS" },
  { svg: <Django />, title: "Django" },
  { svg: <TypeScriptIcon />, title: "Typescript" },
  { svg: <Figma />, title: "Figma" },
  { svg: <Go />, title: "Go" },
  { svg: <HtmlIcon />, title: "HTML" },
  { svg: <JavaIcon />, title: "Java" },
  { svg: <Jest />, title: "Jest" },
  { svg: <NextIcon />, title: "NextJS" },
  { svg: <ReactIcon />, title: "React" },
  { svg: <Rust />, title: "Rust" },
  { svg: <SpringIcon />, title: "Springboot" },
  { svg: <Node />, title: "Node.js" },
  { svg: <Postgres />, title: "PostgresSQL" },
  { svg: <Tailwind />, title: "Tailwind" },
  { svg: <Git />, title: "Git" },
  { svg: <Docker />, title: "Docker" },
  { svg: <JS />, title: "Javascript" },
];

export const IconList = () => {
  return (
    <div className="mt-10 fade-in mb-20">
      <SkillManifest skills={items} delay={200} />
    </div>
  );
};
