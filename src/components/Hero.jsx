import React from "react";
import Typewriter from "typewriter-effect";
import imagenMe from "../assets/me-photo.jpg";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="h-screen w-full flex flex-col justify-center relative bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* COLUMNA IZQUIERDA (Tu texto actual) */}
        <div>
          {/* Disponibilidad */}

          {/* Titular con Typewriter */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            <span className="text-white">Desarrollador </span>
            <span className="text-cyan-400 block md:inline">
              <Typewriter
                options={{
                  strings: ["Fullstack", "React", ".NET", "Freelance"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-10">
            Hola, soy{" "}
            <span className="text-white font-medium">Agustín Carretto</span>. Me
            especializo en construir aplicaciones web robustas y escalables
            desde Uruguay, enfocándome en la experiencia del usuario y el
            cleanCode.
          </p>

          {/* Botones de acción */}
          <div className="flex gap-4">
            <a
              href="#proyectos"
              className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300"
            >
              Ver Proyectos
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 border border-slate-800 text-slate-300 font-bold rounded-xl hover:bg-slate-900 transition-all duration-300"
            >
              Contactar
            </a>
          </div>

          {/* ... todo el código que ya tenemos del titular y typewriter ... */}
        </div>

        {/* COLUMNA DERECHA: La Card de CV / Perfil */}

        <div className="hidden md:flex justify-center items-center">
          <div className="relative group">
            {/* Brillo de fondo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>

            {/* La Card */}
            <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl w-90 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-30 h-30 bg-slate-800 rounded-full mb-4 flex items-center justify-center border-2 border-cyan-500/30 overflow-hidden">
                  <img
                    src={imagenMe}
                    alt="Agustín Carretto"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <h3 className="text-xl font-bold text-white">
                  Agustín Carretto
                </h3>
                <p className="text-cyan-400 text-sm mb-6">
                  Fullstack Developer
                </p>

                {/* Cambia esta parte en tu columna derecha */}
                <div className="space-y-3 w-full">
                  <a
                    href="/Agustin_Carretto_CV.pdf" // 1. AQUÍ PONES LA RUTA (debe estar en la carpeta public)
                    download="Agustin_Carretto_CV.pdf" // 2. AQUÍ EL NOMBRE con el que se guardará en la PC
                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all border border-slate-700 cursor-pointer active:scale-95"
                  >
                    <span className="font-bold text-sm">Descargar CV</span>
                    <svg
                      className="w-4 h-4 text-cyan-400" // Le puse un toquecito de color al icono
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 text-xs font-medium mt-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  Disponible para nuevos desafíos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
