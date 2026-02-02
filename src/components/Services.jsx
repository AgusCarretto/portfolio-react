import React, { useState } from 'react';
import { FiLayout, FiSmartphone, FiDatabase, FiCheck } from 'react-icons/fi';
import { useTranslation } from "react-i18next"; // 1. IMPORTAR

export const Services = () => {
  const { t } = useTranslation(); // 2. INICIALIZAR
  const [activeId, setActiveId] = useState(1);

  // 3. DEFINIMOS LOS DATOS ADENTRO PARA USAR LA TRADUCCIÓN
  const services = [
    {
      id: 0,
      title: t('services.plans.0.title'),
      price: "150",
      description: t('services.plans.0.desc'),
      features: t('services.plans.0.features', { returnObjects: true }), // <--- TRUCO PARA TRAER EL ARRAY
      icon: <FiSmartphone className="text-3xl" />
    },
    {
      id: 1,
      title: t('services.plans.1.title'),
      price: "450",
      description: t('services.plans.1.desc'),
      features: t('services.plans.1.features', { returnObjects: true }),
      icon: <FiLayout className="text-3xl" />,
      popular: true
    },
    {
      id: 2,
      title: t('services.plans.2.title'),
      price: "1300",
      description: t('services.plans.2.desc'),
      features: t('services.plans.2.features', { returnObjects: true }),
      icon: <FiDatabase className="text-3xl" />
    }
  ];

  return (
    <section id="servicios" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
          {t('services.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {services.map((service) => {
          const isActive = activeId === service.id;
          
          return (
            <div 
              key={service.id}
              onClick={() => setActiveId(service.id)}
              className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                isActive 
                ? 'bg-slate-900 border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.2)] scale-105 z-10' 
                : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* ETIQUETA POPULAR TRADUCIDA */}
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                  {t('services.popular_tag')}
                </span>
              )}

              <div className={`mb-6 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                {service.icon}
              </div>
              
              <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`}>
                {service.title}
              </h3>
              
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-slate-500 text-xs">{t('services.from')}</span>
                <span className={`text-3xl font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-500'}`}>
                  USD {service.price}
                </span>
              </div>
              
              <p className="text-sm text-slate-500 mb-6 min-h-[40px] leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                    <FiCheck className={isActive ? 'text-cyan-500' : 'text-slate-700'} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contacto"
                className={`block w-full py-3 rounded-xl font-bold text-xs text-center transition-all duration-300 ${
                  isActive 
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20' 
                  : 'bg-slate-800 text-slate-400'
                }`}
              >
                {t('services.btn_consult')}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};