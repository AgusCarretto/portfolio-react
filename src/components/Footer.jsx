import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* IZQUIERDA: Marca */}
          <div className="flex items-baseline gap-2">
            <h3 className="text-base font-bold text-white tracking-tight">
              Agustin<span className="text-cyan-500">Carretto</span>
            </h3>
            <span className="text-[10px] text-slate-600 uppercase tracking-widest hidden sm:inline">
              | Fullstack Dev
            </span>
          </div>

          {/* CENTRO: Copyright minimalista */}
          <div className="text-center md:-translate-x-7 transition-transform">
            <p className="text-[10px] text-slate-500 uppercase tracking-[3px]">
              © {currentYear} — Montevideo
            </p>
          </div>

          {/* DERECHA: Redes */}
          <div className="flex gap-3">
            <a
              href="https://github.com/aguscarretto"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors p-1"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/agustín-carretto-2566b6231"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors p-1"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
