import {
  BarChart4,
  Building2,
  PanelsTopLeft,
  ShieldCheck,
  CircleHelpIcon,
  Calendar,
  Settings,
} from "lucide-react";

export const dataSideBar = [
  {
    icon: PanelsTopLeft,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Building2,
    label: "Companies",
    href: "/companies",
  },
  {
    icon: Calendar,
    label: "Calendar",
    href: "/task",
  },
];

export const dataToolsSideBar = [
  {
    icon: CircleHelpIcon,
    label: "Faqs",
    href: "/faqs",
  },
  {
    icon: BarChart4,
    label: "Analytics",
    href: "/analytics",
  },
];

export const dataSupportSideBar = [
  {
    icon: Settings,
    label: "Setting",
    href: "/setting",
  },
  {
    icon: ShieldCheck,
    label: "Security",
    href: "/security",
  },
];
