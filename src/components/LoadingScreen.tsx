import { useEffect, useState } from "react";

const welcomes = ["Welcome", "Bienvenido"];

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    let wordIndex = 0;
    let letterIndex = 0;
    let pauseCounter = 0;
    const TICK_MS = 90;
    const PAUSE_TICKS = 5;

    const interval = setInterval(() => {
      const currentWord = welcomes[wordIndex];

      if (letterIndex <= currentWord.length) {
        setDisplayText(currentWord.substring(0, letterIndex));
        letterIndex++;
      } else {
        pauseCounter++;

        if (pauseCounter >= PAUSE_TICKS) {
          if (wordIndex < welcomes.length - 1) {
            wordIndex++;
            letterIndex = 0;
            pauseCounter = 0;
          } else {
            clearInterval(interval);
            setTimeout(() => onComplete(), 50);
          }
        }
      }
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-400 flex flex-col items-center justify-center flex-shrink-0">
      <div className="mb-4 text-xl font-mono font-bold h-8 leading-none">
        <span className=" bg-gradient-to-l from-cyan-400 to-red-400 via-amber-300 z-30 p-2 text-transparent inline-block bg-clip-text">
          {displayText}
        </span>
        <span className="animate-blink ml-1"> | </span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-400 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
