// imgs de proyectos en HOME


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
    title: "Sistema de Rifas - Viaje a Londres",
    desc: "Plataforma Full-Stack para la gestión y venta de números de rifa, con panel administrativo y pasarela de visualización.",
    fullDesc:
      "Este proyecto fue desarrollado para gestionar la recaudación de fondos para un viaje académico a Londres en 2027. La solución incluye un sistema de reserva de números, validación de estados de pago y un robusto panel de administración. El administrador puede visualizar en tiempo real qué números han sido vendidos, cuáles están pendientes de pago y gestionar la base de datos de compradores. Se priorizó la seguridad y la integridad de los datos, utilizando una arquitectura MVC para separar la lógica de negocio de la interfaz de usuario.",
    tech: [
      ".NET MVC",
      "C#",
      "SQL Server",
      "Azure Cloud",
      "Entity Framework",
      "Bootstrap",
    ],
    img: imgRifasHome,
    gallery: [
      {
        url: imgRifasAdminLogin,
        caption: "Login seguro para el administrador",
      },
      {
        url: imgRifasAdminDatos,
        caption:
          "Panel de control administrativo para la gestión de estados de pago y auditoría de números.",
      },
      {
        url: imgRifasEleccion,
        caption:
          "Interfaz de usuario reactiva para la reserva de números disponibles",
      },
      {
        url: imgRifasUsuarioPrimerModal,
        caption:
          "Modal para los datos del comprador, necesario para completar la compra.",
      },
      // {
      //   url: imgRifasAzure,
      //   caption: "Persistencia de datos en la nube mediante Azure SQL Database y consultas optimizadas.",
      // },
      {
        url: imgRifasCelInicio,
        caption:
          "Diseño responsivo optimizado para una experiencia fluida en dispositivos móviles.",
      },
      {
        url: imgRifasCelRifas,
        caption:
          "Diseño responsivo optimizado para una experiencia fluida en dispositivos móviles.",
      },
    ],
    link: "https://sorteolondres-h6g6h7a4hqf7b3ep.brazilsouth-01.azurewebsites.net/",
    github: "https://github.com/AgusCarretto/RifasPage",
  },

  // --MK3 HIERROS PROJECT-- //
  {
    id: "mk3-hierros",
    title: "MK3 Hierros - Ecosistema Full-Stack",
    desc: "Sistema de gestión para herrería. Incluye App móvil administrativa (Android) para carga de trabajos y Landing Page.",
    fullDesc:
      "Ecosistema digital integral diseñado para la transformación tecnológica de una empresa de herrería. El proyecto resuelve la desconexión entre el taller y el cliente final mediante una arquitectura de dos frentes: una Web Pública y una Aplicación Móvil Android (gestión interna). El sistema cuenta con un backend robusto en NestJS que sincroniza el inventario, los pedidos y los presupuestos en tiempo real. La App permite a los operarios actualizar estados de producción desde el taller, mientras que la base de datos PostgreSQL asegura la información crítica del negocio.",
    tech: [
      "React Native",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "React",
      "TypeScript",
      "AndroidStudio",
    ],
    img: imgMk3,
    gallery: [

      { 
      url: imgMK3Home, 
      caption: "Web Pública para poder mostrar los trabajos realizados y tener una red de clientes mayor" 
    },
    { 
      url: imgMK3Category, 
      caption: "Categorias disponibles para poder ver los trabajos de cada una para una facilidad del posible nuevo cliente" 
    },
    { 
      url: imgMK3Contact, 
      caption: "Formulario de contacto de la web publica" 
    },
    { 
      url: imgMK3CelHome, 
      caption: "Interfaz del Home de la apk del celular" 
    },
    { 
      url: imgMK3CelNewWork, 
      caption: "Creacion de un nuevo trabajo, con cotizaciones, prioirdad, fechas estimativas y posibles fotos" 
    },
    { 
      url: imgMK3CelState, 
      caption: "Cambio de estados de los trabajos realizados por el administrador" 
    },

    ],
    link: "https://aguscarretto.github.io/MK3_Hierros/",
    github: "https://github.com/AgusCarretto/MK3_Hierros",
  },

  // --ENFERMERIA PROJECT-- //
  {
    id: "sistema-enfermeria",
    title: "Gestión de Enfermería",
    desc: "Plataforma web que muestra los servicios de una enfermeria domiciliaria.",
    fullDesc:
      "Desarrollo de identidad digital y plataforma web para un servicio profesional de enfermería domiciliaria. El objetivo principal fue crear una interfaz minimalista y empática que transmitiera confianza a los pacientes. La solución se centró en la optimización de la experiencia de usuario (UX), implementando WhatsApp API para agilizar las consultas. A nivel técnico, se priorizó el rendimiento y el SEO local para maximizar la visibilidad del servicio.",
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion", "Vercel"],
    img: imgEnfermeria,
    gallery: [],
    link: "https://enfermeria-domiciliaria.vercel.app/",
    github: "https://github.com/AgusCarretto/enfermeria-page",
  },

  // --NEXT PROJECT-- //
  {
    id: "next-project",
    title: "Próximo Proyecto",
    desc: "Explorando soluciones innovadoras para el sector educativo.",
    fullDesc: "",
    tech: ["Vue.js", "GraphQL"],
    img: "https://placehold.jp/24/0f172a/22d3ee/800x450.png?text=En desarrollo...",
    gallery: [],
    link: "#",
    github: "",
  },

  {
    id: "next-project",
    title: "Proyecto en desarrollo",
    desc: "Ecommerce para un supermercado local",
    fullDesc: "",
    tech: ["Vue.js", "GraphQL"],
    img: "https://placehold.jp/24/0f172a/22d3ee/800x450.png?text=En desarrollo...",
    gallery: [],
    link: "#",
    github: "",
  },
];
