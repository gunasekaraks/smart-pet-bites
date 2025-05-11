
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full pet-feeder-gradient flex items-center justify-center">
                <span className="text-white text-lg font-bold">PF</span>
              </div>
              <span className="ml-3 text-xl font-bold">SmartPetBites</span>
            </Link>
            <p className="text-muted-foreground">
              Automated pet feeding solution that gives you peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="#features" className="hover:text-petfeeder-600">Features</Link>
                </li>
                <li>
                  <a href="#" className="hover:text-petfeeder-600">Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:text-petfeeder-600">Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-petfeeder-600">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-petfeeder-600">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:text-petfeeder-600">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-right md:text-right">
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">support@smartpetbites.com</p>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center md:text-left">
          <p className="text-muted-foreground">
            © {currentYear} SmartPetBites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
