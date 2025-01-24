import { ReactNode } from "react";

export const Section = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  return (
    <section
      id={id}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-start scroll-mt-16 space-y-10"
    >
      {children}
    </section>
  );
};
