import { Logo } from "@/components/logo";
import React from "react";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <Logo />
      <h1 className="text-3xl my-2">Welcome to Dashboard</h1>
      {children}
    </div>
  );
}
