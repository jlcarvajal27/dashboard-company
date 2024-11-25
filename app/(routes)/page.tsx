import CardSummary from "./components/cardSummary/CardSummary";
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/lastCustomers";
import SalesDistributor from "./components/salesDistributor/SalesDistributor";
import TotalSubscribers from "./components/totalSsubscribers/TotalSubscribers";
import ListIntegrations from "./components/listIntegrations/ListIntegrations";

export default function Home() {
  return (
    <div className="py-4 my-4">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        <CardSummary
          average={15}
          icon={UserRound}
          total="12.540"
          title="companies created"
          tooltipText="see old of the companies created"
        />
        <CardSummary
          average={80}
          icon={Waypoints}
          total="86.5$"
          title="total revenue"
          tooltipText="see all of the summary"
        />
        <CardSummary
          average={30}
          icon={BookOpenCheck}
          total="363.95$"
          title="Bounce rate"
          tooltipText="see all of the bounce rate"
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
        <LastCustomers />
        <SalesDistributor />
      </div>

      <div className="flex flex-col xl:flex-row gap-y-4 md:gap-y-o mt-12 md:gap-x-10 md:-mb-10 justify-center">
        <TotalSubscribers />
        <ListIntegrations />
      </div>
    </div>
  );
}
