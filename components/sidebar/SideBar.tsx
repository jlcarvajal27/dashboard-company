import { Logo } from "../logo";
import { SideBarRoutes } from "../sideBarRoutes";

export function SideBar() {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col border-r">
        <Logo />
        <SideBarRoutes />
      </div>
    </div>
  );
}
