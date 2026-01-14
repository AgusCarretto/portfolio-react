import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa6';

export const Contact = () => {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pbo34rl', 
      'template_si85vs9', 
      form.current, 
      'rYU9Rc6rDsoJCgYxK'
    )
    .then((result) => {
        console.log(result.text);
        setEnviado(true);
        form.current.reset(); // Limpia el formulario
        setTimeout(() => setEnviado(false), 5000); // Saca el mensaje de éxito tras 5 seg
    }, (error) => {
        console.log(error.text);
        alert("Hubo un error al enviar el mensaje, por favor intentá por WhatsApp.");
    });
  };

  return (
    <section id="contacto" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LADO IZQUIERDO */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Tenés un proyecto <span className="text-cyan-400">en mente?</span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Ya sea para una consulta sobre los planes o para una propuesta laboral, estoy disponible para hablar.
          </p>

          <div className="space-y-6">
            
            <a href="https://wa.me/59892114480" target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <FaWhatsapp size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm text-left">WhatsApp</h4>
                <p className="text-xs text-slate-500 italic">Respuesta inmediata</p>
              </div>
            </a>

            <a href="mailto:tu@email.com" className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm text-left">Email</h4>
                <p className="text-xs text-slate-500 italic text-left">agus.carretto@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* LADO DERECHO: FORMULARIO */}
        <div className="relative">
          <form ref={form} onSubmit={sendEmail} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 space-y-4 shadow-2xl backdrop-blur-sm text-left">
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-1 tracking-widest">Nombre</label>
              <input 
                type="text" name="user_name" required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors mt-1"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-1 tracking-widest">Email</label>
              <input 
                type="email" name="user_email" required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors mt-1"
                placeholder="email@ejemplo.com"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-1 tracking-widest">Mensaje</label>
              <textarea 
                name="message" required rows="4"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none mt-1"
                placeholder="Contame brevemente qué necesitás..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-cyan-500 text-slate-950 font-bold py-4 rounded-xl hover:bg-cyan-400 transition-all active:scale-95 shadow-lg shadow-cyan-500/20"
            >
              Enviar Mensaje
            </button>

            {enviado && (
              <p className="text-cyan-400 text-xs font-bold mt-4 text-center animate-pulse">
                ¡Mensaje enviado con éxito! Te responderé pronto.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};