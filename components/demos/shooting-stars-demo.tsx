import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/design.svg",
    title: " Customized Strategies",
    description:
      "Our tailored solutions align with your unique business goals, ensuring personalized success.",
  },
  {
    icon: "/icons/money.svg",
    title: " ROI-Focused Campaigns",
    description:
      "We design campaigns that deliver measurable results, directly improving your profitability.",
  },
  {
    icon: "/icons/fast.svg",
    title: " Timely Deliverables ",
    description: " Stay ahead of deadlines with projects completed efficiently without compromising quality.",
  },
  {
    icon: "/icons/flexible.svg",
    title: "Transparent Reporting",
    description: "Receive regular, detailed insights into campaign performance and key metrics.",
  },
  {
    icon: "/icons/team.svg",
    title: "Experienced Team",
    description:
      " Collaborate with industry-certified experts skilled in the latest digital marketing trends and tools.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Scalable Solutions",
    description: " Our services evolve with your business, supporting growth and new challenges seamlessly.",
  },

  {
    icon: "/icons/star.svg",
    title: " Data-Driven Insights",
    description: " Informed decisions based on analytics maximize impact and optimize your investment.",
  },
  {
    icon: "/icons/support.svg",
    title: "Dedicated Support",
    description:
      "Our team is available to guide and assist you at every step of your marketing journey.",
  },
  {
    icon: "/icons/safe.svg",
    title: " Guaranteed Quality",
    description: " We deliver top-notch services, ensuring excellence in every project to exceed expectations.  ",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Our guarantees to you.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}