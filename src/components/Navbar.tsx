"use client";
import Link from "next/link";

export const Navbar = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
    <ul className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur">
      {["Home", "About", "Projects", "Blog", "Contact"].map((label) => (
        <li key={label}>
          <Link
            href={`/${
              label.toLowerCase() === "home" ? "" : label.toLowerCase()
            }`}
            className="relative px-3 py-2 text-black transition hover:text-amber-600"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
