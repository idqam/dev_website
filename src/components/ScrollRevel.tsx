import { ReactNode, useEffect, useRef } from "react";

export const ScrollRevel = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observe = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (ref.current) {
            ref.current.classList.add("visible");
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) {
      observe.observe(ref.current);
    }
    return () => observe.disconnect();
  });

  return (
    <div ref={ref} className="revel">
      {children}
    </div>
  );
};
