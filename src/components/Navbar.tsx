
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full pet-feeder-gradient flex items-center justify-center">
            <span className="text-white text-lg font-bold">PF</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-petfeeder-600 to-petfeeder-800 bg-clip-text text-transparent">
            SmartPetBites
          </span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/login">
            <Button variant="outline">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button className="pet-feeder-button">Sign up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
