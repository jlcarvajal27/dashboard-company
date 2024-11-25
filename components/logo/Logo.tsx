"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
  const Router = useRouter();
  return (
    <div
      className="min-h-20 h-20 flex items-center px-6 border-r cursor-pointer gap-3"
      onClick={() => Router.push("/")}
    >
      <Image
        src="/logoipsum-295.svg"
        alt="logo"
        width={30}
        height={30}
        priority
      />
      <h1 className="font-bold text-xl">Jorge Carvajal Dev</h1>
    </div>
  );
}
