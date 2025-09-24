import React,{ useState, useEffect } from 'react';
import logo from '../assets/images/maxiclean.webp';
import {FiMenu, FiX} from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { NavHashLink} from 'react-router-hash-link';
import { useLocation } from 'react-router-dom'; 




function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(()=>{
      document.body.style.overflow = isOpen ? 'hidden' : '';
      return ()=>{
        document.body.style.overflow ="";
      };
    }, [isOpen]);

    const linkClass = (hash) =>
  location.hash === hash || (hash === "#top" && location.hash === "")
    ? "text-yellow-400 underline font-bold px-3 py-2 transition"
    : "text-indigo-900 px-3 py-2 transition hover:text-yellow-400";

    
  return (
     
   <nav className="fixed inset-x-0 top-0 z-50 bg-white/10 backdrop-blur-sm shadow-sm border-white/20
  shadow-lg rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-25">
        {/* LOGO */}
        <NavHashLink to="/#top" className="flex items-center gap-3">
          <img src={logo} alt="Maxi-Clean Logo" className="h-20 w-auto" />
          <div className="leading-tight">
            <span className="text-[#013BC7] font-bold text-lg md:text-2xl">Maxi-Clean</span>
            <span className="block text-lg text-[#013BC7]">Laundromat</span>
          </div>
        </NavHashLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8  font-medium text-xl">
          <li><NavHashLink 
          to="/#top" 
          className={linkClass("#top")}>Home</NavHashLink></li>

          <li><NavHashLink 
          to="/#about" 
         className={linkClass("#about")}>About</NavHashLink></li>

          <li><NavHashLink 
          to="/#pricing" 
          className={linkClass("#pricing")}>Pricing</NavHashLink></li>

          <li><NavHashLink 
          to="/#location" 
          className={linkClass("#location")}>Location</NavHashLink></li>

          <li><NavHashLink 
          to="/#contact" 
          className={linkClass("#contact")}>Contact</NavHashLink></li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(v => !v)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="md:hidden text-2xl text-[#013BC7] p-2"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU (slide down) */}
      <div
        className={`md:hidden bg-[#013BC7] text-white origin-top transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg font-medium">
          <li><NavHashLink to="/#top" end onClick={() => setIsOpen(false)}>Home</NavHashLink></li>
          <li><NavHashLink to="/#about" onClick={() => setIsOpen(false)}>About</NavHashLink></li>
          <li><NavHashLink to="/#pricing" onClick={() => setIsOpen(false)}>Pricing</NavHashLink></li>
          <li><NavHashLink to="/#location" onClick={() => setIsOpen(false)}>Location</NavHashLink></li>
          <li><NavHashLink to="/#contact" onClick={() => setIsOpen(false)}>Contact</NavHashLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar