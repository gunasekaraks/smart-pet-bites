
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Never Miss a Feeding with{" "}
                <span className="bg-gradient-to-r from-petfeeder-600 to-petfeeder-800 bg-clip-text text-transparent">
                  SmartPetBites
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The automated pet feeder that ensures your pets are fed on time, every time, even when you're not home.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/signup">
                <Button className="pet-feeder-button px-8 py-6 text-lg">Get Started</Button>
              </Link>
              <Link to="#features">
                <Button variant="outline" className="px-8 py-6 text-lg">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[400px]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-petfeeder-200 to-petfeeder-400 rounded-lg opacity-30 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-xl shadow-xl flex items-center justify-center">
                  <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-petfeeder-500 to-petfeeder-700 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-white rounded flex items-center justify-center">
                      <span className="text-2xl font-bold text-petfeeder-700">PetFeeder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
