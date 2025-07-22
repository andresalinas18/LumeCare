// components/Hero.jsx 

"use client";
import React, { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Video autoplay was prevented by the browser:", error);
        });
      }
    }
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-10">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay 
          loop
          muted
          playsInline
          src="/videos/Videolumecareportada.mp4"
          poster="/images/Fallback.png"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(46,46,46,0.45)] z-20" />

      {/* Contenido */}
      <div className="relative z-30 text-white text-center px-5">
        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-lora font-medium italic leading-[1.1] mb-6 text-white">
          Your Transformation,<br /> Guided with LumeCare.
        </h1>
        <p className="text-base sm:text-lg md:text-[1.3rem] max-w-[700px] mx-auto mb-8 font-lora font-medium italic opacity-95">
          Discover world-class aesthetic results with the confidence of dedicated,
          personal support. LumeCare is your trusted partner for a safe and empowering
          medical journey in Cali, Colombia.
        </p>
        <a
          href="#procedures"
          aria-label="Explore our aesthetic procedures"
          className="inline-block px-[38px] py-4 font-lato font-bold text-base text-white uppercase tracking-[1px] bg-primary rounded-[5px] no-underline transition duration-300 ease-in-out hover:bg-primary-dark hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
        >
          Explore Our Procedures
        </a>
      </div>
    </section>
  );
}