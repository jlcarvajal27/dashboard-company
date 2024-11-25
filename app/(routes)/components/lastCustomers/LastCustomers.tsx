import { CustomIcons } from "@/components/customIcons";
import { Building } from "lucide-react";
import { CustomerTable } from "../customerTable";

export function LastCustomers() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex items-center gap-x-2 ">
        <CustomIcons icon={Building} />
        <p className="text-xl">last Customer</p>
      </div>
      <div>
        <CustomerTable />
      </div>
    </div>
  );
}
