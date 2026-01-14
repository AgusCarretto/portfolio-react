import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se activa el fondo oscuro al bajar 20px
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para volver al inicio suavemente
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Nombre con peso equilibrado y link al inicio */}
        <button 
          onClick={scrollToTop}
          className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"
        >
          <span className="text-white">Agustín</span>
          <span className="text-cyan-400"> Carretto</span>
        </button>
        
        <div className="hidden md:flex items-center space-x-8 text-[13px] font-medium tracking-widest">
          <a href="#proyectos" className="text-slate-400 hover:text-white transition-colors">PROYECTOS</a>
          <a href="#servicios" className="text-slate-400 hover:text-white transition-colors">SERVICIOS</a>
          <a href="#sobre-mi" className="text-slate-400 hover:text-white transition-colors">SOBRE MÍ</a>
          
          <a href="#contacto" className="ml-4 px-5 py-2 border border-cyan-500/50 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300">
            CONTACTO
          </a>
        </div>
      </div>
    </nav>
  );
};