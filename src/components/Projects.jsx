import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { projectData } from "../data/projectData";

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 max-w-6xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
          Mis Proyectos
        </h2>
        <p className="text-slate-400 mt-2 max-w-xl mx-auto">
          Explora las soluciones que he construido. Haz clic para visitar cada
          proyecto.
        </p>
        <div className="h-1 w-20 bg-cyan-500 mt-4 mx-auto rounded-full"></div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        //esto es para la parte responsive
        breakpoints={{
          320: {
            slidesPerView: 0.85,
            spaceBetween: 50,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 0,
              depth: 50,
              modifier: 1,
            },
          },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        loop={true}
        centeredSlides={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true} //Flechas de los costados
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, //se detiene en el hover
        }}
        className="mySwiper !pb-12 !pt-4 !px-12"
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden isolation-isolate relative group hover:border-cyan-500/50 shadow-2xl max-w-[380px] w-full"
              //Cuando entra el mouse quiero que se detenga el timer del swiper. Al expandirse la targeta el pauseOnMouseEnter no funcionaba
              onMouseEnter={(e) => {
                const swiper = e.currentTarget.closest(".swiper").swiper;
                swiper.autoplay.stop();
              }}
              onMouseLeave={(e) => {
                const swiper = e.currentTarget.closest(".swiper").swiper;
                swiper.autoplay.start();
              }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-30">
                  <Link
                    to={`/proyecto/${project.id}`}
                    className="px-5 py-2 bg-white text-slate-950 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg relative z-50"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="relative">
                  <p className="text-xs text-slate-400 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out max-h-25 md:max-h-10 group-hover:max-h-40 md:group-hover:max-h-32">
                    {project.desc}
                  </p>

                  <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-slate-900 to-transparent group-hover:opacity-0 transition-opacity duration-500 md:block hidden"></div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 overflow-hidden transition-all duration-500 ease-in-out max-h-16 md:max-h-7 group-hover:max-h-32 md:group-hover:max-h-24">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] px-2 py-1 bg-slate-800/50 text-cyan-400 rounded-md border border-slate-700 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*CSS PARA ACOMODAR ALGUNAS COSAS*/}

      {/* AJUSTES DE FLECHAS Y MÓVIL */}

      <style>{`
  /* --- ESTILO GENERAL (PC) --- */
  .swiper-button-next, .swiper-button-prev {
    color: #22d3ee !important;
    transform: scale(0.6);
    
  }
  
  .swiper-button-next:hover, .swiper-button-prev:hover {
    color: #fff !important;
    transform: scale(0.8);
    transition: all 0.3s ease;
  }

  /* --- AJUSTE EXCLUSIVO PARA MÓVIL --- */
  @media (max-width: 768px) {
 
    .mySwiper {
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding-bottom: 50px !important;
  }

    .swiper-button-prev {
      
      left: -15px !important;
      
      transform: scale(0.5) !important;
    }

    .swiper-button-next {
      right: -15px !important;
      
      transform: scale(0.5) !important;
    }
  
  }
`}</style>
    </section>
  );
};
