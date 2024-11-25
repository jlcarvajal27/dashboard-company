import { CustomIcons } from "@/components/customIcons";
import { BarChart } from "lucide-react";
import GraphicSubscribers from "../graphicSubscribers/GraphicSubscribers";

//
export default function SalesDistributor() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex items-center gap-x-2">
        <CustomIcons icon={BarChart} />
      </div>
      <GraphicSubscribers />
    </div>
  );
}
