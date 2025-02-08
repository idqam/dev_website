import { useEffect } from "react";

type NavMainProps = {
  setMenuOpen: (value: boolean | ((value: boolean) => boolean)) => void;
  menuOpen: boolean;
};
export const NavMain = ({ menuOpen, setMenuOpen }: NavMainProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);
  return (
    <nav
      id="nav-bar"
      className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a className="font-mono text-xl font-bold ">Owen Villareal</a>
          <div
            id="mobile"
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div id="desktop" className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-blue-300  transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-300  transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-300  transition-colors"
            >
              Contact
            </a>
            <a
              href="#blog"
              className="text-gray-300 hover:text-blue-300 transition-colors"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
