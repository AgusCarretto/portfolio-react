import React from 'react';
// Usamos solo Font Awesome 6 (fa6) para evitar conflictos de módulos
import { 
  FaDatabase, 
  FaReact, 
  FaCode, 
  FaServer, 
  FaLaptopCode, 
  FaPalette 
} from 'react-icons/fa6';

export const About = () => {
  const skills = [
    { 
      name: "C# / .NET", 
      icon: <FaServer className="text-purple-500" />, 
      level: "Backend & MVC" 
    },
    { 
      name: "ASP.NET Core", 
      icon: <FaLaptopCode className="text-blue-500" />, 
      level: "Web APIs" 
    },
    { 
      name: "SQL Server", 
      icon: <FaDatabase className="text-red-500" />, 
      level: "Database Design" 
    },
    { 
      name: "React", 
      icon: <FaReact className="text-cyan-400" />, 
      level: "Frontend" 
    },
    { 
      name: "JavaScript", 
      icon: <FaCode className="text-yellow-400" />, 
      level: "Core" 
    },
    { 
      name: "Tailwind CSS", 
      icon: <FaPalette className="text-cyan-500" />, 
      level: "Design" 
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* TEXTO IZQUIERDA */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Un poco <span className="text-cyan-400">sobre mí</span>
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Soy un apasionado por resolver problemas mediante el código. Mi enfoque principal es construir aplicaciones que no solo se vean bien, sino que sean escalables y eficientes.
            </p>
            <p>
              Me especializo en el ecosistema <span className="text-white font-medium">.NET</span> para el desarrollo de Backend sólido con arquitecturas MVC y Web APIs, complementándolo con el poder de <span className="text-white font-medium">React</span> para interfaces modernas.
            </p>
            <p>
              Manejo bases de datos relacionales como <span className="text-white font-medium">SQL Server</span>, enfocándome en el diseño de esquemas robustos para garantizar la integridad de la información.
            </p>
          </div>
        </div>

        {/* GRID DE SKILLS DERECHA */}
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h4 className="text-white font-bold text-sm">{skill.name}</h4>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest">{skill.level}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};