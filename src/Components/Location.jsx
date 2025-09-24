import React from 'react';
import locationImg from '../assets/cleanliness.jpg'


function Location() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#F5F5F5]" id='location'>
            <div className='w-50 h-0.5 bg-gray-200 mb-10'></div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Text Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#013BC7] mb-7">
                Laundromat Location
              </h2>
              
            
              <p className="text-gray-600 text-2xl leading-relaxed">
                We offers both full service and self service laundry options. If you’re looking for a place to do the laundry at, or a person to do it for you, we’ve got you covered!

                We are located at No. 18a Uruan Street,off Uyo-Oron Uyo, Akwa-Ibom, Nigeria. We're equipped with FREE, super-fast wifi and washers.
              </p>
            </div>
    
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src={locationImg}
                alt="Laundry illustration"
                className="w-full max-w-md md:max-w-lg object-contain"
              />
            </div>
          </div>
        </section>
  )
}

export default Location