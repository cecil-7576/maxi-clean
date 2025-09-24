import React from 'react';
import { FaWallet, FaTruck, FaWifi } from "react-icons/fa";
import { GiWashingMachine, GiSparkles } from "react-icons/gi";
import { BsShieldCheck } from "react-icons/bs";

function Features() {

    const features = [
    {
      icon: <FaWallet className="text-9xl text-[#013BC7]" />,
      title: "Low Cost",
      desc: "Wash & Fold service starting at an amazing price! We're proud to be Uyo's most affordable laundry service.",
    },
    {
      icon: <FaTruck className="text-9xl text-[#013BC7]" />,
      title: "Pick-up & Delivery",
      desc: "Laundry service right at your front door! Our service spans the whole Uyo area, so we've got you covered.",
    },
    {
      icon: <GiWashingMachine className="text-9xl text-[#013BC7]" />,
      title: "New Machines",
      desc: "You won’t find outdated equipment at our laundromats. Our washers and dryers are up to date for optimal cleaning in minimal time.",
    },
    {
      icon: <GiSparkles className="text-9xl text-[#013BC7]" />,
      title: "Very Clean",
      desc: "From our machines to our folding counters, we make sure all our locations are well kept and clean.",
    },
    {
      icon: <BsShieldCheck className="text-9xl text-[#013BC7]" />,
      title: "Safe & Secure",
      desc: "All our laundromat locations are operated with your safety/security in mind.",
    },
    {
      icon: <FaWifi className="text-9xl md:text-8xl lg:text-10xl text-[#013BC7]" />,
      title: "Free Wifi",
      desc: "While you're waiting for loads to finish, enjoy our free wifi.",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              {feature.icon}
              <h3 className="text-2xl font-bold text-black">{feature.title}</h3>
              <p className="text-gray-600 text-xl">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full h-0.5 bg-gray-200 mt-20'></div>
    </section>
  )
}

export default Features