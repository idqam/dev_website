export const HomeSec = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black flex  items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-red-300 via-purple-300 bg-clip-text text-transparent leading-right">
          Hi! Im Owen
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I am a full-stack developer with a passion for building robust backend
          systems, intuitive frontend interfaces, and overall clean & scalable
          web apps. I make it a priority to continuously learn new technologies
          and refine my skills to remain dynamic, adaptable, and ready to take
          on any technical challenge. Outside of work, I dedicate time to
          painting, learning a language, and writing, which allow me to stay
          creative and balanced.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className=" bg-blue-400 text-black hover:text-pink-900 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_5px_rgba(59,130,246,0.2)] hover:bg-violet-400"
          >
            {" "}
            View Projects
          </a>
          <a
            href="#contact"
            className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duation-200 hover:text-pink-900  hover:-translate-y-0.5 hover:shadow-[0_0_0_5px_rgba(59,130,246,0.2)] hover:bg-pink-300"
          >
            {" "}
            Contact Me{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
