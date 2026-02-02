import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (lng) => i18n.resolvedLanguage === lng || i18n.language.startsWith(lng);

  return (
    <div className="flex gap-4 items-center bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700 shadow-sm">
      
      <button 
        onClick={() => changeLanguage('es')}
        className={`w-8 h-8 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${ 
          isActive('es') 
            ? 'scale-110 opacity-100 grayscale-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]' 
            : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105'
        }`}
        title="Español"
      >
        <img src="https://flagcdn.com/w80/es.png" alt="ES" className="w-full h-full object-cover" />
      </button>

      <div className="w-px h-4 bg-slate-600"></div>

      <button 
        onClick={() => changeLanguage('en')}
        className={`w-8 h-8 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${ 
          isActive('en') 
            ? 'scale-110 opacity-100 grayscale-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]' 
            : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105'
        }`}
        title="English"
      >
        <img src="https://flagcdn.com/w80/gb.png" alt="EN" className="w-full h-full object-cover" />
      </button>

    </div>
  );
};