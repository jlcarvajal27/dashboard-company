import React from "react";
import { List } from "lucide-react";
import { CustomIcons } from "@/components/customIcons";
import TableIntegrations from "../tableIntegrations/TableIntegrations";

export default function ListIntegrations() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 flex-1">
      <div className="flex gap-x-2 items-center">
        <CustomIcons icon={List} />
        <p className="text-xl"> List of integrations</p>
      </div>

      <TableIntegrations />
    </div>
  );
}
