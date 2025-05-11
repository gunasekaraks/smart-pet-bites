
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

const DashboardHeader = ({
  title,
  description,
  actions,
}: DashboardHeaderProps) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // This is where you would handle logout logic
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b mb-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="flex items-center mt-4 sm:mt-0 space-x-4">
        {actions}
        <Button variant="outline" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
