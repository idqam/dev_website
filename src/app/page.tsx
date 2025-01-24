"use client";
import { IconList } from "@/components/IconList";
import { NavEntry } from "@/components/NavEntry";
import { NavMain } from "@/components/NavMain";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <div className="mb-10">
          <NavMain>
            <NavEntry link="#home" name="Home" />

            <NavEntry link="#projects" name="Projects" />
            <NavEntry link="#contact" name="Contact" />
          </NavMain>
        </div>
        <div
          id="main-container"
          className="relative w-full h-full z-10 scroll-smooth"
        >
          <Section id="home">
            <div className="flex flex-col space-y-7">
              <div className="flex items-center justify-center">
                <h1 className="text-6xl font-bold fade-in-heading mt-10">
                  WELCOME
                </h1>
              </div>
              <div
                id="About-Blurb"
                className="flex flex-col items-center justify-center text-center"
              >
                <p className="mt-6 max-w-2xl text-gray-300 text-justify leading-relaxed font-sans fade-in-paragraph text-l">
                  I am a full-stack developer with a passion for building robust
                  backend systems, intuitive frontend interfaces, and
                  AI-integrated solutions for modern web development. My skill
                  set spans a wide range of technologies, and I am constantly
                  striving to expand my knowledge to deliver innovative and
                  impactful applications. Beyond my technical abilities, I am
                  deeply passionate about combining the fundamentals of computer
                  science with cutting-edge tools to simplify and enhance the
                  complexities of the web. Outside of work, I dedicate time to
                  painting, practicing Muay Thai, and writing, which allow me to
                  stay creative and balanced. I also make it a priority to
                  continuously learn new technologies and refine my skills to
                  remain dynamic, adaptable, and ready to take on any challenge.
                  Whether it&apos;s exploring a new framework, solving complex
                  problems, or crafting seamless user experiences, I am always
                  eager to grow and create meaningful solutions.
                </p>
              </div>
              <div
                id="icons"
                className="flex flex-col justify-center items-center mt-10 space-y-10"
              >
                <h1 className="font-bold text-5xl  fade-in-heading">SKILLS</h1>
                <IconList />
              </div>
            </div>
          </Section>

          <Section id="projects">
            <h1 className="text-5xl font-bold fade-in-heading">PROJECTS</h1>
            <Projects />
          </Section>
        </div>
      </div>
    </>
  );
}
