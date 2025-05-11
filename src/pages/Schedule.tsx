
import Sidebar from "@/components/dashboard/Sidebar";
import MobileNav from "@/components/dashboard/MobileNav";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ScheduleForm from "@/components/dashboard/ScheduleForm";

const Schedule = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1">
        <MobileNav />
        <div className="container px-4 py-6">
          <DashboardHeader 
            title="Feeding Schedule" 
            description="Set up and manage your pet's feeding times"
          />
          <ScheduleForm />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
