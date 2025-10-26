import React from 'react';
import { FaTshirt } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { GiHanger } from "react-icons/gi"; // hanger icon
import tshirt from '../assets/tshirt-washing.jpg';
import laundryService from '../assets/laundry-service.jpg';
import dryClean from '../assets/hanger.webp';

function Pricing() {
    const prices = [
        {
      img: tshirt,
      price: "N750 per shirt",
      highlight: "N750",
      service: "Shirt service",
    },
    {
      img: laundryService,
      price: "N200 per item",
      highlight: "N200",
      service: "Laundry service",
    },
    {
      img: dryClean,
      price: "N400 per item",
      highlight: "N400",
      service: "Dry cleaning",
    },
    ];
  return (
    <section className="py-6 bg-white/10 h-auto text-center w-full backdrop-blur-lg rounded-2xl shadow-lg p-6" id='pricing'>
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#22ABE1] mb-7 md:text-3xl">
        AFFORDABLE PRICES
        <div className='w-24 h-1 bg-[#22ABE1] mx-auto mt-2'></div>
      </h2>
      {/* Services */}
      <div className="w-full px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {prices.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
            src={item.img} 
            alt="" 
            className='h-70 w-auto'/>
            <p className="mt-6 text-2xl text-gray-700 font-medium ">
              From{" "}
              <span className="text-green-600 font-bold">{item.highlight}</span>{" "}
              {item.price.replace(item.highlight, "")}
            </p>
            <p className="text-gray-500 mt-2 text-lg">{item.service}</p>
          </div>
        ))}
      </div>

      </div>
      
      {/* Button */}
      <div className="mt-12">
        <button className="bg-[#22ABE1] hover:bg-blue-700 text-white px-8 py-5 rounded-md font-semibold">
          SEE ALL PRICES HERE
        </button>
      </div>
    </section>
  )
}

export default Pricing;