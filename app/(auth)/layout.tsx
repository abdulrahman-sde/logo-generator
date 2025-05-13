import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen justify-center items-center bg-slate-50">
      {children}
    </div>
  );
}
