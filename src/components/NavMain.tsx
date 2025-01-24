import { ReactNode } from "react";

export const NavMain = ({ children }: { children: ReactNode }) => {
  return (
    <div
      id="nav-bar"
      className="flex gap-x-4 justify-end w-full h-fit  px-6 shadow-3d fixed top-0 z-50 hover:shadow-3d-hover active:shadow-3d-active border-b "
    >
      {children}
    </div>
  );
};
