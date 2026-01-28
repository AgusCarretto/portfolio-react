import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { projectData } from "../data/projectData";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    // CALCULO DE EJE X PARA SABER SI MUEVE A LA IZQ O DERECHA
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      showNext();
    }
    if (isRightSwipe) {
      showPrev();
    }
  };

  // FUNCIONES PARA ADELANTAR O ATRASAR LA FOTO
  const showNext = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % project.gallery.length);
  }, [project]);

  const showPrev = useCallback(() => {
    setSelectedIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.gallery.length) % project.gallery.length,
    );
  }, [project]);

  //  MANEJO DEL TECLADO
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, showNext, showPrev]);

  if (!project) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl text-white">Proyecto no encontrado</h2>
        <Link to="/" className="text-cyan-400 mt-4 inline-block">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-12 group w-fit"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Volver a Proyectos</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono rounded-md"
                  >
                    {t}{" "}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {project.fullDesc}
              </p>

              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <ExternalLink size={18} /> Ver Deploy
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
                  >
                    <Github size={18} /> Código
                  </a>
                )}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-950 group hover:-translate-y-1 transition-transform duration-500">
              <div className="h-9 bg-slate-800 border-b border-slate-700 flex items-center px-4 justify-between select-none">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/20"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/20"></div>
                </div>
                {/* Esto es para que el flex deje a la derecha los puntitos */}
                <div className="w-12"></div>
              </div>

              <div className="relative aspect-video bg-slate-900">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
               
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0"></div>
            </div> */}
          </div>

          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Análisis de Implementación
              </h2>
              <p className="text-slate-400">
                Hacé clic en las imágenes para ver los detalles de la
                arquitectura.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.gallery.map((item, index) => (
                <div key={index} className="flex flex-col group">
                  <div
                    onClick={() => setSelectedIndex(index)}
                    className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg hover:border-cyan-500/50 transition-all duration-500 cursor-pointer relative"
                  >
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-64 object-cover object-top group-hover:scale-100 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="text-white" />
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-slate-400 italic leading-snug border-l-2 border-cyan-500/30 pl-3">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        // Fondo oscuro que cubre toda la pantalla
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 bg-slate-800/50 rounded-full z-10"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 text-slate-400 hover:text-white transition-colors p-3 bg-slate-800/50 hover:bg-cyan-500/20 rounded-full hidden md:block z-10"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={project.gallery[selectedIndex].url}
              alt={project.gallery[selectedIndex].caption}
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl border border-slate-800"
            />

            <p className="text-slate-300 mt-4 text-center text-lg bg-slate-900/80 px-6 py-2 rounded-full inline-block">
              {project.gallery[selectedIndex].caption}
            </p>

            <p className="text-slate-500 text-sm mt-2">
              {selectedIndex + 1} / {project.gallery.length}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 text-slate-400 hover:text-white transition-colors p-3 bg-slate-800/50 hover:bg-cyan-500/20 rounded-full hidden md:block z-10"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
};
