import { ReactNode } from "react";

// components/SecContainer.tsx
export const SecContainer = ({ children }: { children: ReactNode }) => (
  <main className="min-h-screen w-full flex items-center justify-center px-4 py-12">
    <div className="bg-slate-900 text-white rounded-xl shadow-lg max-w-5xl w-full p-8 space-y-8">
      {children}
    </div>
  </main>
);
