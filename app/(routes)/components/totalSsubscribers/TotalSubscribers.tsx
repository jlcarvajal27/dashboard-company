"use client";

import { CustomIcons } from "@/components/customIcons";
import { Percent } from "lucide-react";
import { ResponsiveContainer, Pie, Tooltip, PieChart, Legend } from "recharts";
import { dataTotalSubscribers } from "./totalSubscribers.data";

export default function TotalSubscribers() {
  return (
    <div className="mb-4 lg:mb-0 shadow-sm rounded-lg p-5 w-full xl:w-96 bg-background hover:shadow-lg transition">
      <div className="flex gap-x-2 items-center mb-4">
        <CustomIcons icon={Percent} />
        <p className="text-xl">Total Subscribers</p>
      </div>
      <div className="w-full h-[200px] p-5">
        <ResponsiveContainer aspect={1} maxHeight={200}>
          <PieChart>
            <Pie
              dataKey="value"
              data={dataTotalSubscribers}
              outerRadius={80}
              labelLine={false}
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
