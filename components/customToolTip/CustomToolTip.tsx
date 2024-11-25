import { Info } from "lucide-react";
import { customToolTip } from "./customToolTip.type";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CustomToolTip(props: customToolTip) {
  const { content } = props;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Info strokeWidth={1} className="h-5 w-5" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
