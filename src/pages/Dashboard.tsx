
import Sidebar from "@/components/dashboard/Sidebar";
import MobileNav from "@/components/dashboard/MobileNav";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import FeederCard from "@/components/dashboard/FeederCard";
import NextMealDisplay from "@/components/dashboard/NextMealDisplay";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1">
        <MobileNav />
        <div className="container px-4 py-6">
          <DashboardHeader 
            title="Dashboard" 
            description="Monitor and control your pet feeder"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FeederCard 
              name="Living Room Feeder"
              status="online"
              lastFed="Today, 8:00 AM"
              foodLevel={65}
            />
            <NextMealDisplay
              time="5:00 PM"
              amount={100}
              name="Dinner"
            />
          </div>
          
          <div className="bg-petfeeder-50 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Need to adjust the feeding schedule?</h3>
              <p className="text-muted-foreground">Customize when and how much your pet eats</p>
            </div>
            <Link to="/dashboard/schedule" className="mt-4 md:mt-0">
              <Button className="pet-feeder-button">Manage Schedule</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
