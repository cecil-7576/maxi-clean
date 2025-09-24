import React from 'react';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import About from "../Components/About";
import ServiceCard from "../Components/ServiceCard";
import Services from "../Components/Services";
import Location from "../Components/Location";
import Pricing from "../Components/Pricing";
import Contact from "../Components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <ServiceCard />
      <Services />
      <Location />
      <Pricing />
      <Contact />
    </>
  )
}

export default Home