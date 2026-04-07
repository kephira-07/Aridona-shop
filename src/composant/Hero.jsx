import React, { useState, useEffect,useCallback } from 'react';
import { Link } from 'react-router-dom';

import im1 from '../assets/im1.jpg'; 
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

 import img5 from '../assets/img5.jpg';
  import img6 from '../assets/img6.jpg';
 import img7 from '../assets/img7.jpg';
 import img8 from '../assets/img8.jpg'; 

export default function Hero() {
     const images= [
    { id: 1, src: img2, title: 'Bague Éclat Éternel' },
    { id: 2, src: img3, title: 'Alliance Or Pur' },
    { id: 3, src: img5, title: 'Collier Signature Arilona' },
    { id: 4, src: img6, title: 'Bracelet Jonc Fin' },
    { id: 5, src: img7, title: 'Joc' },
    { id: 6, src: img8, title: ' jonc Fin' },
    { id: 7, src: im1, title: 'Fin' },
    
  ];

  // --- LOGIQUE DE TON CARROUSEL MOBILE ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused) return;
    const intervalId = setInterval(nextSlide, 2000); // 4 secondes
    return () => clearInterval(intervalId);
  }, [isPaused, nextSlide]);

  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);
  return (  
    <main className=" md:pt-2 pb-12 mt-15 bg-[#fffaf5] h-[700px]">
      <div className="max-w-10xl mx-auto px-2  h-full flex flex-col justify-center">
       
        {/* --- GRILLE PC --- */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[450px]">
          <div className="col-span-2 row-span-2 relative overflow-hidden group ">
            <img src={images[0].src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Bijou" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            
          </div>
          <div className="col-span-1 row-span-1 relative overflow-hidden group ">
            <img src={images[1].src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Bijou" />
          </div>
          <div className="col-span-1 row-span-2 relative overflow-hidden group ">
            <img src={images[2].src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Bijou" />
          </div>
          <div className="col-span-1 row-span-1 relative overflow-hidden group ">
            <img src={images[3].src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Bijou" />
          </div>
        </div>

        {/* --- CARROUSEL MOBILE (Ton design avec animation) --- */}
        <div className="md:hidden w-full h-87.5 mt-25 flex items-center flex-col overflow-hidden px-2">
          <div
            className="relative overflow-hidden rounded-2xl bg-gray-50 w-full h-full shadow-lg border border-gray-100 touch-none cursor-pointer"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            {/* Bande défilante */}
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((item) => (
                <div key={item.id} className="shrink-0 w-full h-full relative">
                  <img 
                    src={item.src} 
                    alt={item.title}  
                    className={`w-full h-full object-cover transition-transform duration-[4000ms] ${isPaused ? 'scale-105' : 'scale-100'}`}  
                    draggable="false" 
                  />
                  {/* Overlay avec titre */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-center text-sm uppercase tracking-widest font-light drop-shadow-md">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bouton Global */}
        <div className="mt-5 text-center">
            <Link 
  to="/boutique" 
  className="px-20 py-2 bg-amber-500 text-white rounded-3xl font-sans hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30"
>
  Visiter la boutique
</Link>
        </div>

      </div>
       
    </main>
  );
};


