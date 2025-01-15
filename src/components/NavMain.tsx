import { ReactNode } from "react";

export const NavMain = ({ children }: { children: ReactNode }) => {
  return (
    <div
      id="nav-bar"
      className="flex gap-x-2 border-2 border-indigo-500 justify-end w-full mt-4  max-h-16 bg-slate-950 pr-10"
    >
      {children}
    </div>
  );
};
