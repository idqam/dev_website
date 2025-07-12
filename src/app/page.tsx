"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { SecContainer } from "@/components/SecContainer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("alreadyVisited");

    if (alreadyVisited) {
      setIsLoaded(true);
    }
  }, []);

  const handleComplete = () => {
    setIsLoaded(true);
    sessionStorage.setItem("alreadyVisited", "true");
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleComplete} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }  text-white`}
      >
        <SecContainer>
          <Hero />
        </SecContainer>
      </div>
    </>
  );
}
