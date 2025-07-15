"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "About", "Projects", "Blog", "Contact"];

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ul className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur">
        {navItems.map((label) => {
          const href =
            label.toLowerCase() === "home" ? "/" : `/${label.toLowerCase()}`;
          const isActive = pathname === href;

          return (
            <li key={label}>
              <Link
                href={href}
                className={`relative px-3 py-2 transition ${
                  isActive
                    ? "text-amber-600 font-semibold"
                    : "text-black hover:text-amber-600"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
