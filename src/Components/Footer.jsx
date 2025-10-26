import React, {useState} from 'react';
import logo from '../assets/images/maxiclean.webp';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Footer() {

  const [email, setEmail] = useState('');
    
      const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Add newsletter subscription logic here (e.g., API call)
        alert(`Subscribed with: ${email}`);
        setEmail('');
      };

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10" id='contact'>
        {/* Logo & Description */}
        <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                  >
          <img src={logo} alt="Maxi-Clean Logo" className="h-15 mb-4" />
          <p className="text-lg leading-relaxed">
            Washing Made Easy.
            <br />
            At Maxi-Clean, your clothes aren’t just washed,
            they’re pampered with precision,
            leaving every thread fresh, spotless,
            and ready to wear.
          </p>
        </motion.div>

        {/* Opening Hours */}
        <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-4"
                  >
          <h3 className="font-semibold text-white mb-4">OPENING HOURS</h3>
          <p className="text-lg">Mon — Sat: 8am - 8:30pm</p>
          <p className="text-lg">Sunday: Call Us </p>
        </motion.div>

        {/* Address */}
        <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-4"
                  >
          <h3 className="font-semibold text-white mb-4 text-xl">Address</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className=" items-start gap-2">
              <p className="font-medium text-lg text-gray-200">Uyo Branch:</p>
              <span className='flex mt-5 text-'><FaMapMarkerAlt className="text-4xl mr-4 text-red-400" />
              <span className='text-lg'>
                   18a Uruan Street,off Uyo-Oron Uyo, Akwa-Ibom, Nigeria.
                </span>
              </span>
                
            </li>
            <li className=" items-start gap-2">
              <span>

              </span>
            </li>
            <span className='flex '>
              <FaPhoneAlt className="text-blue-400 text-lg mb-4 mr-4" />   
              <span className='text-lg'> +234 703 795 3559</span>
            </span>
          </ul>

        </motion.div>

        {/* Contact */}
        <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-4"
                  >
          <h3 className="font-semibold text-white mb-4">CONTACT</h3>
          <span className='flex '>
              <FaPhoneAlt className="text-blue-400 text-lg mb-4 mr-4" />   
              <span className='text-lg'> +234 703 795 3559</span>
            </span>
          <span className='flex '>
              <FaEnvelope className="text-red-400 text-lg mb-4 mr-4" />   
              <span className='text-lg'> maxiclean@gmail</span>
            </span>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#00AF4F] w-full"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-blue-400 text-white p-2 rounded-full hover:bg-[#ED3338] transition"
                      >
                        <FiSend size={20} />
                      </button>
                    </form>
                    <div className="flex gap-4 mt-2">
            <a href="#" className="p-3 bg-[#1E293B] rounded-full hover:bg-blue-400 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-3 bg-[#1E293B] rounded-full hover:bg-[#ED3338] transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="p-3 bg-[#1E293B] rounded-full hover:bg-blue-400 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-3 bg-[#1E293B] rounded-full hover:bg-[#ED3338] transition">
              <FaLinkedin size={18} />
            </a>
          </div>
          <hr className="border-gray-600 mb-4" />
          <p className="text-xs text-gray-400">
            © 2025 Maxi-Clean Laundromat. <span></span>
            <span>
               | All rights reserved. | Powered by <span className="text-[#ED3338]">VirCil</span>
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer;


// maxiclean001@gmail.