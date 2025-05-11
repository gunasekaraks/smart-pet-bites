
const steps = [
  {
    number: "1",
    title: "Setup Your Device",
    description:
      "Connect your SmartPetBites feeder to WiFi following the simple instructions provided with your device.",
  },
  {
    number: "2",
    title: "Create Your Account",
    description:
      "Sign up on our website and register your device to gain complete control over your pet's feeding schedule.",
  },
  {
    number: "3",
    title: "Set Feeding Schedule",
    description:
      "Create custom feeding times and portion sizes tailored to your pet's specific dietary needs.",
  },
  {
    number: "4",
    title: "Enjoy Peace of Mind",
    description:
      "Rest assured your pet will be fed on time, every time, even when you're not home.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Getting started with SmartPetBites is quick and easy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-petfeeder-600 flex items-center justify-center text-white text-2xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
