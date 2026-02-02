# 👨‍💻 Agustín Carretto - Portfolio Profesional

> Repositorio oficial de mi portfolio personal. Una aplicación web moderna diseñada para exhibir mis proyectos, habilidades y experiencia como desarrollador Full Stack.

[![Live Demo](https://img.shields.io/badge/Ver_Portfolio_Online-0F172A?style=for-the-badge&logo=vercel&logoColor=white)](https://agustincarretto.com)

## ⚡ Sobre el Proyecto

Este portfolio fue construido con un enfoque **Performance-First**. No es solo una landing page estática, es una **Single Page Application (SPA)** escalable que utiliza enrutamiento dinámico para gestionar los detalles de cada proyecto sin recargas innecesarias.

El objetivo fue crear una experiencia de usuario fluida (UX), con animaciones sutiles y una arquitectura de código limpia que permita agregar nuevos proyectos fácilmente a través de archivos de datos centralizados.

## 🛠️ Tech Stack

El sitio está construido sobre un stack moderno para asegurar velocidad y mantenibilidad:

* ![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react) **React 18** - Biblioteca de UI.
* ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) **Vite** - Bundler de última generación.
* ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) **Tailwind CSS** - Estilizado utilitario y Responsive Design.
* ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) **React Router Dom** - Navegación dinámica SPA.
* ![Swiper](https://img.shields.io/badge/-Swiper_JS-6332F6?style=flat-square&logo=swiper&logoColor=white) **Swiper JS** - Carruseles táctiles interactivos.
* ![Lucide](https://img.shields.io/badge/-Lucide_Icons-F05032?style=flat-square) **Lucide React** - Iconografía ligera.

## ✨ Características Destacadas

* **Arquitectura de Datos Separada:** Los proyectos no están "harcodeados" en el HTML. Se cargan desde un archivo `projectData.js`, lo que facilita la escalabilidad y el mantenimiento.
* **Diseño 100% Responsive:** Optimizado para móviles, tablets y desktops grandes, con grillas adaptables.
* **Enrutamiento Dinámico:** Sistema de rutas `/proyecto/:id` que genera páginas de detalle muy rapidas.
* **Lightbox Nativo:** Galería de imágenes personalizada con soporte para navegación por teclado y Swipe para celulares.

## 📂 Estructura del Proyecto

El código sigue una organización modular para facilitar la lectura:

```text
src/
├── components/    # Piezas reusables (Navbar, Cards, Modals)
├── pages/         # Vistas principales (Home, ProjectDetail)
├── data/          # Lógica de datos (JSON de proyectos)
└── assets/        # Recursos optimizados (Imagenes)
