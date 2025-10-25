import React from 'react';
import logo from '../assets/images/maxiclean.webp';

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10" id='contact'>
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="Maxi-Clean Logo" className="h-15 mb-4" />
          <p className="text-lg leading-relaxed">
            Washing Made Easy.
            <br />
            At Maxi-Clean, your clothes aren’t just washed,
            they’re pampered with precision,
            leaving every thread fresh, spotless,
            and ready to wear.
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="font-semibold text-white mb-4">OPENING HOURS</h3>
          <p className="text-lg">Mon — Sat: 8am - 8:30pm</p>
          <p className="text-lg">Sunday: Call Us </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-white mb-4">ADDRESS</h3>
          <p className="font-medium text-lg text-gray-200">Uyo Branch:</p>
          <p className="text-lg">
            18a Uruan Street,off Uyo-Oron Uyo, Akwa-Ibom, Nigeria.
          </p>
          <p className="text-blue-400 text-lg mb-4">+234 703 795 3559</p>

        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4">CONTACT</h3>
          <p className="text-blue-400 text-lg mb-2">+234 703 795 3559</p>
          <p className="text-lg mb-6">maxiclean001@gmail.com</p>
          <hr className="border-gray-600 mb-4" />
          <p className="text-xs text-gray-400">
            © 2025 Maxi-Clean Laundromat. <span></span>
            <span>
               | All rights reserved. | Powered by <span className="text-[#ED3338]">VirCil</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;