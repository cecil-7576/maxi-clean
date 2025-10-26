import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { GiWashingMachine, GiVacuumCleaner, GiSewingMachine } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";

import { MdLocalLaundryService, MdIron } from "react-icons/md";

function Services() {

    const services = [
    {
      icon: <GiWashingMachine className="text-9xl text-white mb-4 transition-transform duration-700 hover:animate-spin" />,
      title: "LAUNDRY SERVICES",
      description:
        "Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold and deliver back to you in one neat, easy package.",
      bg: "bg-blue-700",
    },
    {
      icon: <GiSewingMachine className="text-9xl text-white mb-4 transition-transform duration-700 hover:animate-spin" />,
      title: "ALTERATIONS & REPAIRS",
      description:
        "We have expert seamstresses and tailors on staff to ensure we meet and exceed your fitting requirements.",
      bg: "bg-[#5E5E5E]",
    },
    {
      icon: <MdIron className="text-9xl text-white mb-4 transition-transform duration-700 hover:animate-spin" />,
      title: "STEAM IRON",
      description:
        "These services are delivered by skilled professionals with extensive industry expertise.",
      bg: "bg-blue-700",
    },
    {
      icon: <GiVacuumCleaner className="text-9xl text-white mb-4 transition-transform duration-700 hover:animate-spin" />,
      title: "CARPET CLEANING",
      description:
        "To keep carpet at peak performance, we recommend professional deep cleaning your carpat every 12 t0 18 months.07047051771.",
      bg: "bg-[#5EBB60]",
    },
    {
      icon: <FaTshirt className="text-9xl text-[#F5F5F5] mb-4 transition-transform duration-700 hover:animate-spin" />,
      title: "DRY CLEANING SERVICE",
      description:
        "Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold and deliver back to you in one neat, easy package.",
      bg: "bg-[#454545]",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-20 bg-white h-full mt-10 -rounded-2xl shadow-[8px_8px_16px_#d1d1d4,-8px_-8px_16px_#ffffff] p-6">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 3 }, // desktop
        }}
      >
         {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${service.bg} p-8 flex flex-col items-center text-center shadow-md min-h-[400px]`}
            >
              {service.icon}
              <h3 className="text-2xl font-bold text-white mb-3 uppercase hover:scale-110 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="text-gray-200 text-xl  leading-relaxed hover:scale-105 transition-transform duration-300 cursor-pointer">
                {service.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20 h-40 w-full mb-10 transition-transform duration-700 hover:">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bg} p-8 flex flex-col items-center text-center shadow-md `}
          >
            {service.icon}
            <h3 className="text-lg font-bold text-xl text-white mb-3 uppercase hover:scale-110 transition-transform duration-300">
              {service.title}
            </h3>
            <p className="text-gray-200 text-xl leading-relaxed hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div></div> */}
    </section>
  )
}

export default Services;