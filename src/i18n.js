import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: {
          nav: {
            home: "INICIO",
            projects: "PROYECTOS",
            services: "SERVICIOS",
            about: "SOBRE MI",
            contact: "CONTACTO",
          },
          hero: {
            role_label: "Desarrollador",
            typewriter: ["Fullstack", "React", ".NET", "Freelance"],
            intro: "Hola, soy",
            bio: ". Me especializo en construir aplicaciones web robustas y escalables desde Uruguay, enfocándome en la experiencia del usuario y el cleanCode.",
            btn_projects: "Ver Proyectos",
            btn_contact: "Contactar",
            card_role: "Desarrollador Fullstack",
            card_cv: "Descargar CV",
            status: "Disponible para nuevos desafíos",
          },
          projects: {
            title: "Mis Proyectos",
            subtitle:
              "Explora las soluciones que he construido. Haz clic para visitar cada proyecto.",
            view_details: "Ver Detalles",
          },
          about: {
            title_1: "Un poco",
            title_2: "sobre mí",
            p1: "Soy un apasionado por resolver problemas mediante el código. Mi enfoque principal es construir aplicaciones que no solo se vean bien, sino que sean escalables y eficientes.",
            p2: "Me especializo en el ecosistema <0>.NET</0> para el desarrollo de Backend sólido con arquitecturas MVC y Web APIs, complementándolo con el poder de <1>React</1> para interfaces modernas.",
            p3: "Manejo bases de datos relacionales como <0>SQL Server</0>, enfocándome en el diseño de esquemas robustos para garantizar la integridad de la información.",
          },
          contact: {
            title: "¿Tenés un proyecto",
            title_highlight: "en mente?",
            desc: "Ya sea para una consulta sobre los planes o para una propuesta laboral, estoy disponible para hablar.",
            whatsapp_sub: "Respuesta inmediata",
            labels: {
              name: "Nombre",
              email: "Email",
              message: "Mensaje",
            },
            placeholders: {
              name: "Tu nombre completo",
              email: "email@ejemplo.com",
              message: "Contame brevemente qué necesitás...",
            },
            btn_send: "Enviar Mensaje",
            success: "¡Mensaje enviado con éxito! Te responderé pronto.",
          },
          services: {
            title: "Servicios y Soluciones",
            from: "Desde",
            popular_tag: "Más Popular",
            btn_consult: "Consultar Plan",
            plans: {
              // PLAN 0: Landing Page
              0: {
                title: "Landing Page",
                desc: "Ideal para captar clientes rápidamente con una oferta específica.",
                features: [
                  "Diseño 100% Responsive",
                  "Optimización SEO básica",
                  "Botón de WhatsApp directo",
                  "Carga ultra rápida",
                ],
              },
              // PLAN 1: Business Web
              1: {
                title: "Business Web",
                desc: "Tu empresa al siguiente nivel con presencia profesional y datos reales.",
                features: [
                  "Hasta 5 secciones",
                  "Google Analytics integrado",
                  "Formularios de contacto",
                  "Velocidad de carga Premium",
                ],
              },
              // PLAN 2: Custom App
              2: {
                title: "Custom App / Sistema",
                desc: "Soluciones a medida para automatizar y gestionar tu negocio.",
                features: [
                  "Base de datos en tiempo real",
                  "Gestión de usuarios / Login",
                  "Panel de administración",
                  "Soporte técnico prioritario",
                ],
              },
            },
          },
          project_detail: {
            not_found: "Proyecto no encontrado",
            back_home: "Volver al inicio",
            back_projects: "Volver a Proyectos",
            view_deploy: "Ver Deploy",
            view_code: "Código",
            analysis_title: "Análisis de Implementación",
            analysis_desc:
              "Hacé clic en las imágenes para ver los detalles de la arquitectura.",
          },
        },
      },

      en: {
        translation: {
          nav: {
            home: "Home",
            projects: "PROJECTS",
            services: "SERVICES",
            about: "ABOUT ME",
            contact: "CONTACT",
          },
          hero: {
            role_label: "Developer",
            typewriter: ["Fullstack", "React", ".NET", "Freelance"],
            intro: "Hi, I'm",
            bio: ". I specialize in building robust and scalable web applications from Uruguay, focusing on user experience and clean code.",
            btn_projects: "View Projects",
            btn_contact: "Contact Me",
            card_role: "Fullstack Developer",
            card_cv: "Download CV",
            status: "Open to new challenges",
          },
          projects: {
            title: "My Projects",
            subtitle:
              "Explore the solutions I've built. Click to visit each project.",
            view_details: "View Details",
          },
          about: {
            title_1: "A little",
            title_2: "about me",
            p1: "I am passionate about solving problems through code. My main focus is building applications that not only look good, but are scalable and efficient.",
            p2: "I specialize in the <0>.NET</0> ecosystem for solid Backend development with MVC architectures and Web APIs, complementing it with the power of <1>React</1> for modern interfaces.",
            p3: "I handle relational databases like <0>SQL Server</0>, focusing on robust schema design to ensure data integrity.",
          },
          contact: {
            title: "Have a project",
            title_highlight: "in mind?",
            desc: "Whether it's for a query about plans or a job proposal, I'm available to talk.",
            whatsapp_sub: "Immediate response",
            labels: {
              name: "Name",
              email: "Email",
              message: "Message",
            },
            placeholders: {
              name: "Your full name",
              email: "email@example.com",
              message: "Tell me briefly what you need...",
            },
            btn_send: "Send Message",
            success: "Message sent successfully! I'll reply soon.",
          },
          services: {
            title: "Services & Solutions",
            from: "From",
            popular_tag: "Most Popular",
            btn_consult: "Consult Plan",
            plans: {
              0: {
                title: "Landing Page",
                desc: "Ideal for capturing clients quickly with a specific offer.",
                features: [
                  "100% Responsive Design",
                  "Basic SEO Optimization",
                  "Direct WhatsApp Button",
                  "Ultra-fast Loading",
                ],
              },
              1: {
                title: "Business Web",
                desc: "Take your company to the next level with professional presence.",
                features: [
                  "Up to 5 sections",
                  "Integrated Google Analytics",
                  "Contact Forms",
                  "Premium Loading Speed",
                ],
              },
              2: {
                title: "Custom App / System",
                desc: "Tailored solutions to automate and manage your business.",
                features: [
                  "Real-time Database",
                  "User Management / Login",
                  "Admin Panel",
                  "Priority Technical Support",
                ],
              },
            },
          },
          project_detail: {
            not_found: "Project not found",
            back_home: "Back to Home",
            back_projects: "Back to Projects",
            view_deploy: "View Deploy",
            view_code: "Code",
            analysis_title: "Implementation Analysis",
            analysis_desc: "Click on the images to see architectural details.",
          },
        },
      },
    },
  });

export default i18n;
