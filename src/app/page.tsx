"use client";

import { LoadingScreen } from "@/components/LoadingScreen";
import { MobileMenu } from "@/components/MobileMenu";
import { NavMain } from "@/components/NavMain";
import { About } from "@/components/sections/About";
import { HomeSec } from "@/components/sections/HomeSec";
import { Projects } from "@/components/sections/Projects";
import { useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen  transtion-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <NavMain menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HomeSec />
        <About />
        <Projects />
      </div>
    </>
  );
}
