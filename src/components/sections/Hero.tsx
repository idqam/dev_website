"use client";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const forms = ["Software Engineer", "Builder", "Writer", "Content Creator"];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimate(false);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % forms.length);
          setAnimate(true);
        }, 0);
      }, 2000);

      return () => clearInterval(interval);
    }, 0);

    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-5xl text-center sm:text-left space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100">
          Hi, I&apos;m Owen{" "}
          <span className="inline-block origin-[70%_70%] animate-[wave_2s_ease-in-out_infinite]">
            💮
          </span>
          <div className="relative h-[1.5em] mt-2 text-cyan-400 z-10">
            <div
              className={`absolute transition-all duration-500 ease-out left-0 top-0 mt-4 mb-0
                ${
                  animate
                    ? "opacity-100 -translate-y-4"
                    : "opacity-100 -translate-y-4"
                }`}
            >
              {forms[index]}
            </div>
          </div>
        </h1>

        <p className="sm:text-lg text-zinc-400 max-w-2xl mx-auto sm:mx-0 text-base">
          I&apos;m a full-stack developer interested in bringing real ideas to
          life through code to build and ship quickly. I love to stay up to date
          in tech and have a general love for all things software engineering,
          philosophy and math. Now working with TypeScript, Next.js, Go, Python,
          and modern AI tools.
        </p>
        <div>TODO GITHUB AND LINKEDIN</div>
      </div>
    </section>
  );
};
