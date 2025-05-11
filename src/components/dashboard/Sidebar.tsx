
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar, Settings, Plus } from "lucide-react";

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

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className="h-screen w-64 border-r hidden md:block">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <Link to="/" className="flex items-center px-2 mb-6">
          <div className="w-10 h-10 rounded-full pet-feeder-gradient flex items-center justify-center">
            <span className="text-white text-lg font-bold">PF</span>
          </div>
          <span className="ml-3 text-xl font-bold">SmartPetBites</span>
        </Link>
        <ul className="space-y-2 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center p-2 rounded-lg group hover:bg-petfeeder-100",
                  pathname === item.href
                    ? "bg-petfeeder-100 text-petfeeder-700"
                    : "text-gray-700 hover:text-petfeeder-700"
                )}
              >
                <span className={cn(
                  pathname === item.href 
                    ? "text-petfeeder-700" 
                    : "text-gray-500 group-hover:text-petfeeder-700"
                )}>
                  {item.icon}
                </span>
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
