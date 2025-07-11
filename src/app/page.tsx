"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MobileMenu } from "@/components/MobileMenu";
import { NavMain } from "@/components/NavMain";
import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Projects } from "@/components/sections/Projects";
import { SecContainer } from "@/components/SecContainer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-gradient-to-br from-slate-900 to-gray-950 text-white`}
      >
        {/* <NavMain menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        {/* <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <div className="flex justify-center p-2 bg-transparent">
          <h1 className="text-2xl md:text-5xl">Owen Villareal</h1>
        </div>

        <main className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <SecContainer>
            <About />
          </SecContainer>

          <Projects />
          <Contact />
          <Blog />
        </main>
      </div>
    </>
  );
}
