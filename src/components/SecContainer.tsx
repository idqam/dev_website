import { ReactNode } from "react";

export const SecContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="group relative rounded-2xl p-[3px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover-animate-border">
      <div className="absolute inset-0 z-0 rounded-2xl bg-white group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-yellow-500 group-hover:to-purple-500 transition-all duration-300" />

      <div className="relative z-10 rounded-[calc(1rem-3px)] bg-white p-6">
        {children}
      </div>
    </div>
  );
};
