/* eslint-disable react/no-unescaped-entities */
"use client";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import Image from "next/image";

export const Aboutme = () => {
  return (
    <section className="flex flex-col md:flex-row items-start gap-10">
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold">Building thoughtful experiences.</h2>

        <p className="text-zinc-500">
          I build intuitive, user-centered products that prioritize clarity,
          performance, and simplicity — always with a focus on thoughtful,
          customer-first design. My work is grounded in full-stack development
          and system design, and shaped by a broader curiosity about computer
          science, cybernetics, and aesthetics. I care deeply not just about how
          things work, but why they feel right.
        </p>

        <p className="text-zinc-500">
          I graduated from the University of Rochester in 2024, and since then
          I’ve been focused on building full-stack products using tools like
          Next.js, TypeScript, Tailwind CSS, Python, Go, and OpenAI APIs. I'm
          especially drawn to projects that value clean architecture, strong
          design systems, and long-term maintainability.
        </p>

        <p className="text-zinc-500">
          Outside of work, I enjoy reading critical theory — particularly around
          cybernetics and aesthetics — as well as painting, working out, and
          rollerblading. These practices help keep me creatively engaged and
          grounded, both mentally and physically.
        </p>

        <p className="text-zinc-500">
          I care deeply about the intersection of technology, art, and
          philosophy. I believe that great digital experiences come from more
          than just technical skill — they require curiosity, empathy, and a
          willingness to ask better questions. I also love building for fun and
          learning to create content in the space of software engineer and tech.
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Main Skills:</p>
          <ul className="list-disc list-inside text-m text-zinc-300 ">
            <li className="m-0 ">
              <p className="hover:text-red-300  hover:underline inline">
                Full-Stack Web Development (Next.js, React, Node.js, FastAPI,
                Go, Python, Java)
              </p>
            </li>
            <li className="">
              <p className="hover:text-red-300  hover:underline inline">
                Tools: Git, CI/CD, AWS ecosystem, Docker
              </p>
            </li>
            <li className="">
              <p className="hover:text-red-300  hover:underline inline">
                TypeScript, Tailwind CSS, PostgreSQL
              </p>
            </li>
            <li className="">
              <p className="hover:text-red-300  hover:underline inline">
                AI Tooling: OpenAI, LangChain, Vercel AI SDK
              </p>
            </li>
            <li className=" ">
              <p className="hover:text-red-300  hover:underline inline">
                Clean Architecture, Testing (Jest, RTL), Agile Development
              </p>
            </li>
            <li className="">
              <p className="hover:text-red-300  hover:underline inline">
                Writing, Documentation, and Developer Experience
              </p>
            </li>
            <li className=" ">
              <p className="hover:text-red-300  hover:underline inline">
                English (Native), Spanish (Native), French (Professional)
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-1/3 space-y-6">
        <div className="rounded-xl overflow-hidden rotate-2 shadow-xl">
          {/* Uncomment and insert your profile image */}
          {/* <Image
            src="/your-profile.jpg"
            alt="Profile photo"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          /> */}
        </div>

        <div className="space-y-2 text-sm text-zinc-300">
          <p>
            <a
              href="https://github.com/idqam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Follow on GitHub
            </a>
          </p>
          <p>
            <a
              href="https://linkedin.com/in/villarealowen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Connect on LinkedIn
            </a>
          </p>
          <p>
            <a
              href="mailto:villarealowen1@gmail.com"
              className="hover:underline"
            >
              villarealowen1@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://github.com/idqam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              My resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
