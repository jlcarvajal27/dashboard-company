"use client";

import {
  dataSideBar,
  dataSupportSideBar,
  dataToolsSideBar,
} from "./SideBarRoutes.data";
import { SideBarItems } from "../sideBarItems";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

export function SideBarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">GENERAL</p>
          {dataSideBar.map((item) => (
            <SideBarItems item={item} key={item.label} />
          ))}
        </div>

        <Separator />
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">TOOLS</p>
          {dataToolsSideBar.map((item) => (
            <SideBarItems key={item.label} item={item} />
          ))}
        </div>
        <Separator />

        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">SUPPORT</p>
          {dataSupportSideBar.map((item) => (
            <SideBarItems key={item.label} item={item} />
          ))}
        </div>
      </div>
      <div>
        <div className="text-center p-6">
          <Button variant="outline" className="w-full">
            Upgrade Plan
          </Button>
        </div>
        <Separator />
        <footer className="p-3 text-center mt-3">
          2024 all rights reserved
        </footer>
      </div>
    </div>
  );
}
