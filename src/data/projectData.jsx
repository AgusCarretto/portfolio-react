// imgs de proyectos en HOME
import { useTranslation } from "react-i18next";

//IMG RIFAS
import imgRifasAdminDatos from "../assets/img-projects/sistema-rifas/Admin-BlurDatos.png";
import imgRifasAdminLogin from "../assets/img-projects/sistema-rifas/rifas-loginAdmin.png";
import imgRifasAzure from "../assets/img-projects/sistema-rifas/rifas-azureTop10.png";
import imgRifasCelRifas from "../assets/img-projects/sistema-rifas/rifas-celGrilla.jpeg";
import imgRifasCelInicio from "../assets/img-projects/sistema-rifas/rifas-celInicio.jpeg";
import imgRifasUsuarioPrimerModal from "../assets/img-projects/sistema-rifas/rifas-primerModal.png";
import imgRifasHome from "../assets/img-projects/sistema-rifas/rifas-home.png";
import imgRifasEleccion from "../assets/img-projects/sistema-rifas/rifas-eleccionRifas.png";


//IMG MK3 HIERROS
import imgMK3Home from "../assets/img-projects/sistema-MK3_Hierros/mk3_home.png";
import imgMK3Category from "../assets/img-projects/sistema-MK3_Hierros/mk3_category.png";
import imgMK3Contact from "../assets/img-projects/sistema-MK3_Hierros/mk3_contact.png";
import imgMK3CelHome from "../assets/img-projects/sistema-MK3_Hierros/mk3_CEL_Home.jpeg";
import imgMK3CelState from "../assets/img-projects/sistema-MK3_Hierros/mk3_CEL_estado.jpeg";
import imgMK3CelNewWork from "../assets/img-projects/sistema-MK3_Hierros/MK3_CEL_newWork.jpeg";




import imgEnfermeria from "../assets/img-projects/img-enfer.png";
import imgMk3 from "../assets/img-projects/img-mk3.png";


export const projectData = [
  // --RIFAS PROJECT-- //
  {
    id: "sistema-rifas",
    // ESPAÑOL
    title: "Sistema de Rifas - Viaje a Londres",
    desc: "Plataforma Full-Stack para la gestión y venta de números de rifa, con panel administrativo y pasarela de visualización.",
    fullDesc: "Este proyecto fue desarrollado para gestionar la recaudación de fondos para un viaje académico a Londres en 2027. La solución incluye un sistema de reserva de números, validación de estados de pago y un robusto panel de administración. El administrador puede visualizar en tiempo real qué números han sido vendidos, cuáles están pendientes de pago y gestionar la base de datos de compradores. Se priorizó la seguridad y la integridad de los datos, utilizando una arquitectura MVC para separar la lógica de negocio de la interfaz de usuario.",
    
    // ENGLISH
    title_en: "Raffle System - London 2027",
    desc_en: "Full-Stack platform for raffle management and ticket sales, featuring an admin dashboard and visualization gateway.",
    fullDesc_en: "This project was developed to manage fundraising for an academic trip to London in 2027. The solution includes a ticket reservation system, payment status validation, and a robust administration panel. The administrator can view in real-time which tickets have been sold, which are pending payment, and manage the buyer database. Security and data integrity were prioritized, utilizing an MVC architecture to separate business logic from the user interface.",

    tech: [".NET MVC", "C#", "SQL Server", "Azure Cloud", "Entity Framework", "Bootstrap"],
    img: imgRifasHome,
    gallery: [
      {
        url: imgRifasAdminLogin,
        caption: "Login seguro para el administrador",
        caption_en: "Secure login for the administrator"
      },
      {
        url: imgRifasAdminDatos,
        caption: "Panel de control administrativo para la gestión de estados de pago y auditoría de números.",
        caption_en: "Admin dashboard for payment status management and ticket auditing."
      },
      {
        url: imgRifasEleccion,
        caption: "Interfaz de usuario reactiva para la reserva de números disponibles",
        caption_en: "Reactive user interface for reserving available tickets."
      },
      {
        url: imgRifasUsuarioPrimerModal,
        caption: "Modal para los datos del comprador, necesario para completar la compra.",
        caption_en: "Buyer data modal, required to complete the purchase."
      },
      {
        url: imgRifasCelInicio,
        caption: "Diseño responsivo optimizado para una experiencia fluida en dispositivos móviles.",
        caption_en: "Responsive design optimized for a fluid mobile experience."
      },
      {
        url: imgRifasCelRifas,
        caption: "Diseño responsivo optimizado para una experiencia fluida en dispositivos móviles.",
        caption_en: "Responsive design optimized for a fluid mobile experience."
      },
    ],
    link: "https://sorteolondres-h6g6h7a4hqf7b3ep.brazilsouth-01.azurewebsites.net/",
    github: "https://github.com/AgusCarretto/RifasPage",
  },

  // --MK3 HIERROS PROJECT-- //
  {
    id: "mk3-hierros",
    // ESPAÑOL
    title: "MK3 Hierros - Ecosistema Full-Stack",
    desc: "Sistema de gestión para herrería. Incluye App móvil administrativa (Android) para carga de trabajos y Landing Page.",
    fullDesc: "Ecosistema digital integral diseñado para la transformación tecnológica de una empresa de herrería. El proyecto resuelve la desconexión entre el taller y el cliente final mediante una arquitectura de dos frentes: una Web Pública y una Aplicación Móvil Android (gestión interna). El sistema cuenta con un backend robusto en NestJS que sincroniza el inventario, los pedidos y los presupuestos en tiempo real. La App permite a los operarios actualizar estados de producción desde el taller, mientras que la base de datos PostgreSQL asegura la información crítica del negocio.",
    
    // ENGLISH
    title_en: "MK3 Ironworks - Full-Stack Ecosystem",
    desc_en: "Ironworks management system. Includes administrative Mobile App (Android) for job tracking and a Landing Page.",
    fullDesc_en: "Comprehensive digital ecosystem designed for the technological transformation of an ironworks company. The project bridges the gap between the workshop and the final client through a dual-front architecture: a Public Web and an Android Mobile App (internal management). The system features a robust NestJS backend that synchronizes inventory, orders, and quotes in real-time. The App allows operators to update production statuses from the workshop, while the PostgreSQL database ensures critical business information.",

    tech: ["React Native", "NestJS", "PostgreSQL", "TypeORM", "React", "TypeScript", "AndroidStudio"],
    img: imgMk3,
    gallery: [
      { 
        url: imgMK3Home, 
        caption: "Web Pública para poder mostrar los trabajos realizados y tener una red de clientes mayor",
        caption_en: "Public Web to showcase completed work and expand the client network."
      },
      { 
        url: imgMK3Category, 
        caption: "Categorias disponibles para poder ver los trabajos de cada una para una facilidad del posible nuevo cliente",
        caption_en: "Available categories to browse specific works, easing navigation for potential clients."
      },
      { 
        url: imgMK3Contact, 
        caption: "Formulario de contacto de la web publica",
        caption_en: "Public web contact form."
      },
      { 
        url: imgMK3CelHome, 
        caption: "Interfaz del Home de la apk del celular",
        caption_en: "Mobile APK Home Interface."
      },
      { 
        url: imgMK3CelNewWork, 
        caption: "Creacion de un nuevo trabajo, con cotizaciones, prioirdad, fechas estimativas y posibles fotos",
        caption_en: "New job creation with quotes, priority, estimated dates, and photo attachments."
      },
      { 
        url: imgMK3CelState, 
        caption: "Cambio de estados de los trabajos realizados por el administrador",
        caption_en: "Job status updates performed by the administrator."
      },
    ],
    link: "https://aguscarretto.github.io/MK3_Hierros/",
    github: "https://github.com/AgusCarretto/MK3_Hierros",
  },

  // --ENFERMERIA PROJECT-- //
  {
    id: "sistema-enfermeria",
    // ESPAÑOL
    title: "Gestión de Enfermería",
    desc: "Plataforma web que muestra los servicios de una enfermeria domiciliaria.",
    fullDesc: "Desarrollo de identidad digital y plataforma web para un servicio profesional de enfermería domiciliaria. El objetivo principal fue crear una interfaz minimalista y empática que transmitiera confianza a los pacientes. La solución se centró en la optimización de la experiencia de usuario (UX), implementando WhatsApp API para agilizar las consultas. A nivel técnico, se priorizó el rendimiento y el SEO local para maximizar la visibilidad del servicio.",
    
    // ENGLISH
    title_en: "Nursing Management",
    desc_en: "Web platform showcasing home nursing services.",
    fullDesc_en: "Development of digital identity and web platform for a professional home nursing service. The main objective was to create a minimalist and empathetic interface that conveys trust to patients. The solution focused on User Experience (UX) optimization, implementing WhatsApp API to streamline inquiries. Technically, performance and local SEO were prioritized to maximize service visibility.",

    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion", "Vercel"],
    img: imgEnfermeria,
    gallery: [],
    link: "https://enfermeria-domiciliaria.vercel.app/",
    github: "https://github.com/AgusCarretto/enfermeria-page",
  },

  // --NEXT PROJECT 1-- //
  {
    id: "next-project-edu", // Cambié el ID para que no sea duplicado
    // ESPAÑOL
    title: "Próximo Proyecto",
    desc: "Explorando soluciones innovadoras para el sector educativo.",
    fullDesc: "",
    
    // ENGLISH
    title_en: "Next Project",
    desc_en: "Exploring innovative solutions for the education sector.",
    fullDesc_en: "",

    tech: ["Vue.js", "GraphQL"],
    img: "https://placehold.jp/24/0f172a/22d3ee/800x450.png?text=En desarrollo...",
    gallery: [],
    link: "#",
    github: "",
  },

  // --NEXT PROJECT 2-- //
  {
    id: "next-project-ecom", // Cambié el ID para que no sea duplicado
    // ESPAÑOL
    title: "Proyecto en desarrollo",
    desc: "Ecommerce para un supermercado local",
    fullDesc: "",
    
    // ENGLISH
    title_en: "Project in Development",
    desc_en: "E-commerce for a local supermarket",
    fullDesc_en: "",

    tech: ["NestJS", "Next.js"], // Corregí el stack basado en lo que me contaste antes
    img: "https://placehold.jp/24/0f172a/22d3ee/800x450.png?text=En desarrollo...",
    gallery: [],
    link: "#",
    github: "",
  },
];