import React from "react";
// Importa los componentes de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Importa los módulos de navegación y paginación
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

// Importa los estilos de Swiper (esenciales)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; // Para un efecto visual más cool

// Tus imágenes de proyectos
import imgEnfermeria from "../assets/img-projects/img-enfer.png";
import imgMk3 from "../assets/img-projects/img-mk3.png";


const projectData = [
  {
    title: "Gestión de Enfermería",
    desc: "Plataforma web que muestra los servicios de una enfermeria domiciliaria.",
    tech: ["React", "TailwindCSS", "Firebase"],
    img: imgEnfermeria,
    link: "https://enfermeria-domiciliaria.vercel.app/", 
  },
  {
    title: "MK3 Hierros - Ecosistema Full-Stack",
    desc: "Sistema integral de gestión para herrería. Incluye App móvil administrativa (Android) para carga de trabajos y Landing Page para visualización de catálogo en tiempo real.",
    tech: [
      "React Native", 
      "React.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM"
    ],
    img: imgMk3,
    link: "https://aguscarretto.github.io/MK3_Hierros/",
  },
  {
    title: "Dashboard SaaS",
    desc: "Panel de control administrativo con visualización de datos en tiempo real.",
    tech: ["TypeScript", "Node.js", "AWS"],
    img: "https://placehold.jp/24/0f172a/22d3ee/800x450.png?text=Próximamente...",
    link: "#", 
  },
  {
    title: "Próximo Proyecto",
    desc: "Explorando soluciones innovadoras para el sector educativo.",
    tech: ["Vue.js", "GraphQL"],
    img: "https://placehold.jp/24/0f172a/22d3ee/800x450.png?text=En desarrollo...", 
    link: "#",
  },
  {
    title: "Gestión de Enfermería",
    desc: "Plataforma web para gestión de pacientes y turnos en centros de salud.",
    tech: ["React", "TailwindCSS", "Firebase"],
    img: imgEnfermeria,
    link: "https://enfermeria-domiciliaria.vercel.app/", 
  },
   {
    title: "MK3 Hierros - Ecosistema Full-Stack",
    desc: "Sistema integral de gestión para herrería. Incluye App móvil administrativa (Android) para carga de trabajos y Landing Page para visualización de catálogo en tiempo real.",
    tech: [
      "React Native", 
      "React.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM"
    ],
    img: imgMk3,
    link: "https://aguscarretto.github.io/MK3_Hierros/",
  },
  {
    title: "Dashboard SaaS",
    desc: "Panel de control administrativo con visualización de datos en tiempo real.",
    tech: ["TypeScript", "Node.js", "AWS"],
    img: "https://placehold.jp/24/0f172a/22d3ee/800x450.png?text=Próximamente...",
    link: "#", 
  },
  {
    title: "Próximo Proyecto",
    desc: "Explorando soluciones innovadoras para el sector educativo.",
    tech: ["Vue.js", "GraphQL"],
    img: "https://placehold.jp/24/0f172a/22d3ee/800x450.png?text=En desarrollo...", 
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 max-w-6xl mx-auto px-6">
      {/* Título de la sección */}
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

      {/* SWIPER CONTAINER */}
      <Swiper
        // Módulos que vamos a usar
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        // Configuración responsive para mostrar 1, 2 o 3 slides
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0, // Quitamos el espacio para que no asomen los costados
            centeredSlides: true,
          },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        loop={true} // Para que el slider sea infinito
        centeredSlides={true} // Para que el slide activo esté en el centro
        effect={"coverflow"} // Un efecto visual muy atractivo
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true} // Flechas de navegación
        //pagination={{ clickable: false }} // Puntos de paginación. No lo quiero hasta tener mas proyectos
        autoplay={{
          delay: 3000, // Cada cuánto se mueve automáticamente
          disableOnInteraction: false, // No se detiene si el usuario interactúa
        }}
        className="mySwiper !pb-12 !pt-4 !px-12" // Añadimos padding para la paginación
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden isolation-isolate relative group hover:border-cyan-500/50 shadow-2xl max-w-[380px] w-full">
              <div className="aspect-video relative overflow-hidden">
                {/* Imagen con scale */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* CAPA OSCURA CORREGIDA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20 scale-[1.01] backface-hidden"
                >
                  <span className="px-5 py-2 bg-white text-slate-950 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg">
                    Ver Proyecto
                  </span>
                </a>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5 line-clamp-2 hover:line-clamp-none">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 overflow-hidden transition-all duration-500 group-hover:h-auto mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] px-2 py-1 bg-slate-800/50 text-cyan-400 rounded-md border border-slate-700 font-mono "
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
    padding-left: 20px !important;
      padding-right: 20px !important;
     
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
