import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga4';
function WhatsAppButton() {
    const handleClick = () => {
    ReactGA.event({
      category: 'Interaction',
      action: 'Click',
      label: 'WhatsApp Button',
    });
  };
  return (
   <motion.a
      href="https://wa.me/+2347037953559?text=Hello%20Maxi-Clean!%20I'd%20like%20to%20inquire%20about%20your%20laundry%20services."
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center gap-2 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} />
      <span className="hidden md:inline">Chat with Us</span>
    </motion.a>
  )
}

export default WhatsAppButton