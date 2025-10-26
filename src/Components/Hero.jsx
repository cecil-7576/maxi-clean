import React,{useState, useEffect, Suspense} from 'react';
import masiBg from '../assets/masi.jpeg';
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";




function Hero() {

  function ThreeDObject() {
  return (
    <mesh rotation={[0.6, 0.8, 0]}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial color="#60A5FA" metalness={0.6} roughness={0.25} />
    </mesh>
  );
}
    const texts = [
    "Washing Made Easy",
    "At Maxi-Clean, your clothes aren’t just washed",
    "they’re pampered with precision,",
    "leaving every thread fresh, spotless,",
    "and ready to wear.",
  ];

  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setIsFading(false); // fade-in new text
      }, 1000); // match fade duration
    }, 4000); // each text stays 4s

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    // <section
    // className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
    //   style={{ backgroundImage: `url(${masiBg})` }} // replace with your bg image
    // >
    
    // {/* Overlay */}
    //   <div className="absolute inset-0 bg-indigo-50 opacity-35"></div>

    //   {/* Text Content */}
    //   <h1 className="relative text-indigo-900 text-4xl md:text-6xl font-bold text-center">
    //    MaxiMum Cleanliness
    //    <br />
    //    <br />
    //     <p 
    //     key={index}
    //     className={`text-indigo-900 text-2xl md:text-4xl mt-4 transition-opacity duration-1000 ease-in-out ${
    //         isFading ? "opacity-0" : "opacity-100"
    //       }`}
    //     >
    //        {texts[index]} 
    //     </p>
    //   </h1>
    // </section>

    <section
      className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${masiBg})` }}
      id='#top'
    >
      {/* Overlay */}
      <div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2))"
  }}
></div>


      {/* Floating Glow */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-blue-400 opacity-30 blur-3xl"
        initial={{ y: 0, scale: 1 }}
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 3D Model */}
      {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 z-10 pointer-events-none ">
      <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={0.6}/>
          <mesh rotation={[0.4, 0.2, 0]}>
            <torusKnotGeometry args={[1, 0.3, 100, 16]} />
            <meshStandardMaterial
              color="#c0c0c0"
              metalness={0.6}
              roughness={0.2}
            />
          </mesh>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
      </Suspense>
        
      </div> */}

      {/* Hero Text */}
      <motion.div
        className="absolute bottom-20 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <br />
        
        <h1 className="relative text-4xl md:text-6xl font-extrabold tracking-wide text-indigo-900">
          MaxiMum-Cleanliness 
        </h1>
        <br />
        {/* Fading Text */}
        <h2
          key={index}
          className={`text-indigo-900 text-5xl md:text-3xl  transition-opacity duration-1000 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {texts[index]}
        </h2>
        <br />
        <br />
        <Link 
        to="/pickup"
        className="mt-5 rounded-xl font-semibold hover:scale-105 transition bg-[#013BC7] hover:bg-[#22ABE1] text-white px-8 py-5 rounded-md font-semibold">
          Book a Pickup 🚚
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero