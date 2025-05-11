
import { Calendar, Settings, Plus } from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-petfeeder-600" />,
    title: "Smart Scheduling",
    description:
      "Create custom feeding schedules to ensure your pet eats on time, every time.",
  },
  {
    icon: <Plus className="h-10 w-10 text-petfeeder-600" />,
    title: "Portion Control",
    description:
      "Precisely control the amount of food dispensed for each meal to maintain your pet's health.",
  },
  {
    icon: <Settings className="h-10 w-10 text-petfeeder-600" />,
    title: "Remote Control",
    description:
      "Feed your pet from anywhere using our web application connected to your Smart Pet Feeder.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Our smart pet feeder combines innovative technology with user-friendly design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border"
            >
              <div className="mb-4 rounded-full bg-petfeeder-100 p-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
