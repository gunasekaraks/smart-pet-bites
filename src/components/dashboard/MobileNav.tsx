
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar, Settings, Plus, Menu } from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "Schedule",
    href: "/dashboard/schedule",
    icon: <Plus className="h-5 w-5" />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
];

const MobileNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="md:hidden border-b py-3 px-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full pet-feeder-gradient flex items-center justify-center">
            <span className="text-white text-lg font-bold">PF</span>
          </div>
          <span className="ml-3 text-xl font-bold">SmartPetBites</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link to="/" className="flex items-center mb-10 mt-4">
              <div className="w-10 h-10 rounded-full pet-feeder-gradient flex items-center justify-center">
                <span className="text-white text-lg font-bold">PF</span>
              </div>
              <span className="ml-3 text-xl font-bold">SmartPetBites</span>
            </Link>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center p-2 rounded-lg",
                    pathname === item.href
                      ? "bg-petfeeder-100 text-petfeeder-700"
                      : "text-gray-700 hover:text-petfeeder-700 hover:bg-petfeeder-50"
                  )}
                >
                  <span className={cn(
                    pathname === item.href 
                      ? "text-petfeeder-700" 
                      : "text-gray-500"
                  )}>
                    {item.icon}
                  </span>
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
