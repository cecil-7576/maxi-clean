import React from 'react';
import aboutImg from '../assets/aboutpix.jpg'

function About() {
  return (
     <section className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-500" id='about'>
        <div className='w-50 h-0.5 bg-gray-200 mb-10'></div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#013BC7] mb-7 dark:text-indigo-200">
            About Us
          </h2>
          <p className="text-gray-600 text-xl mb-4 dark:text-gray-300">
            <span className="font-semibold ml-2">
                ✨ Maxi-Clean Laundromat: Laundry Made Easy! ✨
            </span>
            <br />
            <br />
            At <span className="font-semibold ml-2">Maxi-Clean Laundromat,</span> we believe laundry shouldn’t be stressful — it should simply get 
            <span className="font-semibold ml-2">DONE ✅.</span>
          </p>
        
          <p className="text-gray-600 text-xl leading-relaxed">
            Our mission is clear: to be<span className="font-semibold ml-2">Uyo’s first-choice laundry service provider.</span>
            <br />
            How? By combining<span className="font-semibold ml-2">innovation</span> with a<span className="font-semibold ml-2">customer-centric approach</span> that guarantees:
            <br />
            1. Seamless service 💨
            <br />
            2. Efficient delivery ⏱️
            <br />
            3. A fresh, stress-free experience every time 👕
            <br />
            <br />
            Trust us to handle your laundry, while you focus on what matters most. 🌟
            <br />
            📍 Visit us today & experience the<span className="font-semibold ml-2" >Maxi-Clean difference!</span>
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Laundry illustration"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default About;