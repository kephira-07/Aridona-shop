import React, { useState, useEffect,useCallback } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';
import Collection from './Collection';
import logoAridona from '../assets/logoAridonaC.svg';
import logo2 from '../assets/logo2.svg';
import im1 from '../assets/im1.jpg'; 
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

 import img5 from '../assets/img5.jpg';
  import img6 from '../assets/img6.jpg';
 import img7 from '../assets/img7.jpg';
 import img8 from '../assets/img8.jpg'; 
// Import des styles de Swiper
import 'swiper/css';
import 'swiper/css/autoplay'; // Nécessaire pour le défilement automatique



function useWindowSize() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export default function Navbar() {

  const isMobile = useWindowSize();
  
   

  
  return (
    <div>
      
     <div >
             {isMobile ?<MobileHeader/> : <PCHeader />}
              
                   
     </div> 
          
    </div>
    
  )
}
const PCHeader = () => {
      const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return(
    <div>
      <nav 
      className={`transition-all  duration-800 ease-initial ${
        isScrolled 
          ? 'fixed top-0 left-0 border-0 right-0 z-100 bg-white/80  h-20 backdrop-blur-sm' 
          : ' bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 h-full flex items-center justify-between">
        
        {/* LOGO IMAGE : Taille et position dynamiques */}
        <div className="flex items-center justify-self-start cursor-pointer">
          <img 
            src={logoAridona} 
            alt="Logo" 
            className={`transition-all duration-1000 ease-in-out object-contain overflow-hidden ${
              isScrolled 
                ? 'h-30 w-auto' // Taille réduite au scroll
                : 'h-60 w-auto' // Taille imposante au début
            }`}
          />
        </div>

       
        <div className={`md:flex flex-1 max-w-md mx-8 transition-all duration-600 transform opacity-100 translate-y-0 visible ${
          isScrolled 
            ? 'flex-1 max-w-md mx-8' 
            : 'flex-1 w-full mx-8'
        }`}>
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Rechercher un produit..." 
              className="w-full h-10 bg-gray-100 border-dashed border-2 border-amber-500 rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-amber-500 transition-all outline-none text-sm"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
        </div>

        {/* ACTIONS : Panier, Compte, etc. */}
        <div className="flex items-center gap-4">
          {!isScrolled && (
            <div className="hidden lg:flex items-center gap-6 mr-6 text-lg font-Roboto text-black">
              <a href="#" className="hover:text-amber-600 transition-colors">Accueil</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Collections</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Offres</a>
            </div>
          )}

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-7 h-7" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-amber-500 text-white text-[10px] flex items-center justify-center rounded-full"></span>
            </button>
            <button className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-7 h-7" />
            </button>
             <button className='p-2 text-black hover:bg-gray-100 rounded-full transition-colors  col-span-1'>
                  <Heart className='w-7 h-7'/>
                </button>
            
            <button 
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div className={`absolute top-full left-0 right-0 bg-white border-t transition-all duration-600 shadow-xl overflow-hidden ${
        isMobileMenuOpen ? 'max-h-36' : 'max-h-0'
      }`}>
        <div className="p-6 flex flex-col gap-4">
          <a href="#" className="py-2 text-gray-800 font-medium">Accueil</a>
          <a href="#" className="py-2 text-gray-800 font-medium">Collections</a>
          <a href="#" className="py-2 text-gray-800 font-medium">Mon Compte</a>
        </div>
      </div>
    </nav>
      <div className='bg-[#fffaf5] m-0 p-0 h-screen flex items-center justify-center'>
       {/* Grille Principale */}
                <div className="grid grid-cols-3 grid-rows-3 sm:grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-1 h-full w-full">
                 <div className=' md:col-span-1 md:row-span-2 overflow-hidden'><img src={im1} alt="Gallery item" className="h-full w-full object-cover cursor-pointer transition-transform duration-300   hover:scale-110 "/></div>
                 <div className='md:row-span-2 overflow-hidden'> <img src={img2} alt="Gallery item" className="h-full w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110 "/></div> 
                <div className='md:col-span-1 overflow-hidden'> <img src={img5} alt="Gallery item" className="h-full w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110 "/></div>
                <div className='md:col-span-1 overflow-hidden'> <img src={img6} alt="Gallery item" className="h-full w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110 "/></div>
                
                <div className='md:col-span-1 overflow-hidden'> <img src={img7} alt="Gallery item" className="h-full w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110 "/></div>
                <div className='md:col-span-1 md:row-span-2 overflow-hidden'> <img src={img3} alt="Gallery item" className="h-full w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-black-50 "/></div>
                
                
                <div className='md:col-span-1 overflow-hidden'> <img src={img8} alt="Gallery item" className="h-full w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110 "/></div>
                <div className='md:col-span-2 flex justify-center items-center '> <a href="/Collection" className='w-100 h-12 rounded-3xl bg-white text-amber-500 border-2 border-amber-500 hover:bg-amber-500 hover:text-white cursor-pointer text-2xl font-Lato'>Notre boutique </a></div>
                   </div >
                
                   </div>
    </div>

  )
}

const ITEMS = [
  { id: 1, type: 'image', src: img2, title: 'Bague Éclat Éternel' },
  { id: 2, type: 'image', src: img3, title: 'Alliance Or Pur' },
  { id: 3, type: 'image', src: img5, title: 'Collier Signature Arilona' },
  { id: 4, type: 'image', src: img6, title: 'Bracelet Jonc Fin' },
];

const MobileHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour passer à l'image suivante (mémorisée)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ITEMS.length);
  }, []);

  // Effet pour le défilement automatique
  useEffect(() => {
    if (isPaused) return; // Ne pas lancer l'intervalle si en pause
    const intervalId = setInterval(nextSlide, 4000); // Change toutes les 4 secondes
    return () => clearInterval(intervalId); // Nettoyage à la désactivation
  }, [isPaused, nextSlide]);

  // Gestionnaires de pause (souris + tactile)
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  return (
    <div>
      <nav className={`transition-all  p-2  duration-800 ease-initial ${
        isScrolled 
          ? 'fixed top-0 left-0 border-0 right-0 z-100 bg-white/80  h-25 backdrop-blur-sm' 
          : ' bg-white h-30'
      }`}
    >
      <div className=" h-full grid grid-rows-2 grid-cols-5 gap-2 cursor-pointer  justify-between items-center   ">         
              <img 
                src={logo2} 
                alt="Logo" 
                className="object-contain overflow-hidden h-50 w-50 col-span-2"
              />
              <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors relative  col-span-1">
                  <ShoppingCart className="w-7 h-7" />
                  <span className="absolute top-0 right-0 w-4 h-4 bg-amber-500 text-white text-[10px] flex items-center justify-center rounded-full"></span>
                </button>
                <button className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors  col-span-1">
                  <User className="w-7 h-7" />
                </button>
                <button className='p-2 text-black hover:bg-gray-100 rounded-full transition-colors  col-span-1'>
                  <Heart className='w-7 h-7'/>
                </button>
         
         
             <button 
                  className=" p-2 text-black w-1/3 col-span-1"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
             <div className="relative w-full col-span-4">
                <input 
              type="text" 
              placeholder="Rechercher un produit..." 
              className="w-full h-10 bg-gray-100 border-dashed border-2 border-amber-500 rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-amber-500 transition-all outline-none text-sm"
              />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
          </div>
     
       
      </nav>
      <div className="bg-[#fffaf5] m-0 p-0 h-150 ">
      {/* Conteneur principal centré */}
      <div className=" w-full h-full flex items-center  flex-col  font-sans overflow-hidden ">
        
        {/* Zone du carrousel */}
        <div
          className="relative overflow-hidden rounded-2rem   bg-gray-50 w-full h-auto shadow-lg border border-gray-100 touch-none cursor-pointer"
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
            {ITEMS.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-full h-150  relative">
               <img src={item.src} alt={item.title}  className={`w-full h-full object-cover transition-transform duration-[4000ms] ${isPaused ? 'scale-105' : 'scale-100'}`}  draggable="false" /> )  

                {/* Overlay avec titre */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-center text-xs uppercase tracking-widest font-light">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reflet vitré (effet décoratif) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
        </div>

        </div>
      </div>
    </div>
    

      
  );
};

