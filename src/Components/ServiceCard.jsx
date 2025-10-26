import React from 'react';
import washFold from '../assets/bagsclothes.jpg';

function ServiceCard() {
  return (
    <section className="py-12 px-6 md:px-20 bg-[#F5F5F5]">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={washFold}
            alt="Wash and Fold"
            className="w-48 md:w-72 lg:w-96 object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#013BC7] mb-7">
            Wash & Fold
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-[#013bc7] mt-1">
            Low, Flat Rate per Bag
          </h3>
          <p className="text-gray-600 mt-3 leading-relaxed text-xl">
            💡 No Surprises. Just Clean Clothes. 💡
                <br />
            With Maxi-Clean Laundromat, you’ll never have to guess your invoice again!
            <br />
            ✅ Easy, flat-rate pricing
            <br />
            ✅ Wash, dry & fold made effortless
            <br />
            ✅ Affordable rates for every budget
            <br />

            Sit back, relax, and let us handle the dirty work while you enjoy the fresh comfort of perfectly clean clothes. 👕✨
                <br />
            📍 Laundry has never been this simple.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServiceCard;