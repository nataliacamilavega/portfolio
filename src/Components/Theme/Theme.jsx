import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

//#Componentes AboutMe
const P = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
`;
const Span = styled.span`
  color: ${(propsTheme) => propsTheme.theme.mode.colors.purple};
  font-weight: 500;
`;

//Temas
const light = {
  colors: {
    // Background
    background: `#ffffff`,
    bgNavBar: `#F2F2F2`,
    bgTransparent: ``,

    // Pink
    darkerPink: `#653939`,
    darkPink: `#BC6A69`,
    pink: `#653939`,
    lightPink: `#FFDAD9`,

    // Yellow
    darkerYellow: `#65580a`,
    darkYellow: `#EED500`,
    yellow: `#65580a`,
    lightYellow: `#FFF3B4`,
    lighterYellow: `#F9F8EE`,

    // Purple
    darkerPurple: `#583376`,
    darkPurple: `#DFB6FF`,
    purple: `#583376`,
    lightPurple: `#FAD9FF`,

    // Blue
    darkerBlue: `#1d5181`,
    darkBlue: ``,
    blue: `#1d5181`,
    lightBlue: `#C6F1FF`,

    // Green
    darkerGreen: `#1d550f`,
    darkGreen: ``,
    green: `#1d550f`,
    lightGreen: `#A9FF94`,

    // Grey
    darkerGrey: ``,
    darkGrey: ``,
    grey: `#2EE400`,
    lightGrey: `#c9c9c9`,

    // Text
    text: `#151515`,
    textInverse: `#151515`,
    error: `#FF5449`,
  },
  bgAnimated: {
    bgColor: `#e0cdf5`,
    vectorAnimated: `cvClouds.svg`,
  },
  switchStyle: {
    contenedorBgC: `#87C6FF`,
    contenedorJC: `flex-start`,
    bgURL: `/assets/custom/whiteClouds.svg`,
    msColor: `#ffc187`,
    msBS: `-3.9px 6.5px 5.2px rgba(183, 183, 183, 0.35),
    0px 0px 11.7px rgba(255, 193, 135, 0.6), inset 0px -2.6px 5.2px #ffa149,
    inset 0px 2.6px 5.2px #ffd0a5`,
    msAfterP: `relative`,
  },
  filterInvert: `invert(0)`,
  gifImg: `1`,
  loaderAnimated: {
    bgColor: `#ffffff`,
    vectorAnimated: `pinkClouds.svg`,
    text1: `#653939`,
    text2: `#bc6a69`,
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};
const dark = {
  colors: {
    // Background
    background: `#121212`,
    bgNavBar: `#323232`,
    bgTransparent: `#B09DFF`,

    // Pink
    darkerPink: `#653939`,
    darkPink: `#BC6A69`,
    pink: `#ffa3a4`,
    lightPink: `#FFDAD9`,

    // Yellow
    darkerYellow: `#65580a`,
    darkYellow: `#ffe718`,
    yellow: `#ffe03d`,
    lightYellow: `#FFF3B4`,
    lighterYellow: `#fffde947`,

    // Purple
    darkerPurple: `#583376`,
    darkPurple: `#DFB6FF`,
    purple: `#ef89ff`,
    lightPurple: `#FAD9FF`,

    // Blue
    darkerBlue: `#1d5181`,
    darkBlue: ``,
    blue: `#7bbfff`,
    lightBlue: `#C6F1FF`,

    // Green
    darkerGreen: `#1d550f`,
    darkGreen: ``,
    green: `#72ff4e`,
    lightGreen: `#A9FF94`,

    // Grey
    darkerGrey: ``,
    darkGrey: ``,
    grey: `#2EE400`,
    lightGrey: `#bfbfbf4d`,

    // Text
    text: `#FFFFFF`,
    textInverse: `#151515`,
    error: `#FF5449`,
  },
  bgAnimated: {
    bgColor: `#341b4e`,
    vectorAnimated: `cvStars.svg`,
  },
  switchStyle: {
    contenedorBgC: `#1F2533`,
    contenedorJC: `flex-end`,
    bgURL: `/assets/custom/whiteStars.svg`,
    msColor: `#ffffff`,
    msBS: `-3.9px 0px 19.5px rgba(183, 183, 183, 0.31),
    inset 0px -2.6px 5.2px #ffffff, inset 0px 2.6px 5.2px #bfbfc0`,
    msAfterP: `absolute`,
  },
  filterInvert: `invert(1)`,
  gifImg: `0`,
  loaderAnimated: {
    bgColor: `#6f3aa6`,
    vectorAnimated: `cvStars.svg`,
    text1: `#f9ebff`,
    text2: `#f1bbff`,
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

// Idiomas
const ES = {
  navBar: {
    p1: `Sobre Mi`,
    p2: `Estudios`,
    p3: `Habilidades`,
    p4: `Proyectos`,
    p5: `Contacto`,
    p6: `Freelance`,
    menuOpen: `Cerrar menú`,
    menuClose: `Abrir menú`,
    themeDark: `Activar modo oscuro`,
    themeLight: `Activar modo claro`,
    closeStudy: `Cerrar detalle de estudio`,
    skip: `Saltar al contenido`,
  },
  aboutMe: {
    h2: `Sobre Mi`,
    p1: (
      <P>
        Soy <Span>Técnica Superior en Desarrollo de Software</Span> por el
        I.F.T.S. Nº 24 (marzo 2023 – julio 2026). Estoy especializada en{" "}
        <Span>Frontend web y mobile</Span>, con base en{" "}
        <Span>diseño UX/UI</Span> y visión de producto. Me gusta involucrarme
        desde las definiciones de negocio y experiencia de usuario hasta el
        desarrollo que conecta frontend y backend.
      </P>
    ),
    p2: (
      <P>
        Desde <Span>junio de 2023</Span> formo parte de <Span>SportClub</Span>:
        empecé con landings y sistemas de gestión; desde{" "}
        <Span>febrero de 2024</Span> mi rol principal es la aplicación de socios
        en <Span>iOS</Span> y <Span>Android</Span> con <Span>React Native</Span>
        , <Span>Expo</Span> y <Span>TypeScript</Span>, y sigo en backoffices,
        CMS y landings de producto con <Span>Next.js</Span> y{" "}
        <Span>Tailwind</Span>.
      </P>
    ),
    p3: (
      <P>
        En paralelo trabajo como <Span>freelance</Span>: sitios y landings con{" "}
        <Span>React</Span>, <Span>Next.js</Span>, <Span>Vite</Span>,{" "}
        <Span>TypeScript</Span> y <Span>Tailwind</Span>. Trabajo con el cliente
        y el diseñador, cuando hay: requerimientos, SEO, dominio, hosting y
        deploy. Los trabajos publicados están en la sección Freelance.
      </P>
    ),
    p4: (
      <P>
        Disfruto <Span>trabajar en equipo</Span>, interpretar Figma, alinear
        usabilidad y resolver edge cases. Soy <Span>atenta a los detalles</Span>{" "}
        y efectiva resolviendo problemas.
      </P>
    ),
  },
  studys: {
    h2: `Estudios`,
    gradeP: `Titulación`,
    certificateP: `Certificado`,
    projectP: `Proyecto`,
    gotoP: `Ir a`,
    instituteP: `Instituto`,
    planTitle: `Plan de estudios`,
    ifts: {
      school: `I.F.T.S. Nº 24 · CABA`,
      degree: `Tecnicatura Superior en Desarrollo de Software`,
      finishDate: `Jul. 2026`,
      startDate: `Mar. 2023`,
      status: `Egresada`,
      progress: `Carrera completa · 23 materias`,
      institute: `https://www.ifts24.edu.ar/`,
      planTitle: `Plan de estudios`,
      plan: [
        `Formación específica: programación, bases de datos, orientación a objetos, modelado, mobile, testing, web front y back, ingeniería de software, redes.`,
        `Fundamentos: análisis matemático, lógica computacional, estadística, TIC y gestión de proyectos.`,
        `Formación general: inglés, taller de comunicación, trabajo, tecnología y sociedad.`,
      ],
    },
    reactCoder: {
      degree: `Certificado de React JS`,
    },
    jsNucba: {
      degree: `Certificado de JavaScript`,
    },
    uxuiAdvCoder: {
      degree: `Certificado de Diseño UX UI Avanzado`,
    },
    webdesignNucba: {
      degree: `Certificado de Diseño Web (HTML5 y CSS)`,
    },
    uxuiinitialCoder: {
      degree: `Certificado de Diseño UX UI Inicial`,
    },
    ubaOdon: {
      school: `Universidad de Buenos Aires`,
      degree: `Título de odontóloga general`,
      grade: `(44% de la carrera - Sin finalizar)`,
      finishDate: `Dic. 2021`,
    },
    bachiller: {
      school: `Colegio Nuestra Señora de Luján - Adrogué`,
      degree: `Bachiller con orientación en Ciencias naturales`,
      finishDate: `Dic. 2016`,
      startDate: `Mar. 2011`,
    },
  },
  skills: {
    techP: `Habilidades técnicas`,
    softP: `Cómo trabajo`,
    groups: {
      frontend: `Frontend`,
      mobile: `Mobile`,
      design: `Diseño`,
      transversal: `Transversal`,
    },
    soft: {
      s1: `Llevo una funcionalidad desde la definición con producto y diseño hasta que queda en producción.`,
      s2: `Interpreto Figma, alineo usabilidad y marco edge cases antes de que lleguen al usuario.`,
      s3: `Trabajo entre frontend, backend y diseño: contratos de API, estados de UI (carga, error, vacío) y textos para quien usa el producto.`,
      s4: `En web y mobile armo interfaces reutilizables y ordenadas por features, para que el equipo pueda seguir construyendo encima.`,
      s5: `En freelance cierro el ciclo con el cliente: alcance, desarrollo, SEO, dominio, hosting y entrega.`,
    },
  },
  contact: {
    h2: `Contacto`,
    p1: `¡Gracias por visitar mi portfolio!`,
    p2: `Si te interesa mi perfil o querés charlar sobre un proyecto, escribime por mail o LinkedIn.`,
  },
  freelance: {
    h2: `Freelance`,
  },
  pageTitle: {
    about: `Natalia Vega — Frontend web y mobile`,
    studys: `Estudios — Natalia Vega`,
    skills: `Habilidades — Natalia Vega`,
    freelance: `Freelance — Natalia Vega`,
    projects: `Proyectos — Natalia Vega`,
    contact: `Contacto — Natalia Vega`,
  },
  modal: {
    title: `Curriculum Vitae`,
    text: `¿Deseas ir a una pestaña nueva para ver mi curriculum en formato PDF?`,
    accept: `aceptar`,
    decline: `cancelar`,
  },
  projects: {
    h2: `Proyectos`,
    h3: `Filtrar`,
    empty: `No hay proyectos con ese filtro.`,
    according1: `Según rol ejercido`,
    according2: `Según habilidad técnica`,
    according3: `Según contexto`,
    ac1it1: `Diseño UX UI`,
    ac1it2: `Desarrollo Front-End`,
    ac1it3: `Desarrollo Back-End`,
    faculty: `Facultad`,
    courses: `Cursos`,
    personal: `Personal`,
    rank: {
      title: `.RANK — Reseñas de videojuegos`,
      subtitle: `Proyecto integrador IFTS Nº 24: plataforma de reseñas con roles, explorer y backoffice`,
      date: `Abr. 2026 – Jul. 2026`,
      text: [
        `Frontend en equipo con Next.js 16 (App Router), TypeScript y Tailwind CSS v4`,
        `Arquitectura por features, sistema de diseño propio y estado con Zustand`,
        `Formularios y validación con React Hook Form y Zod; toasts con Sonner`,
        `Auth y roles (user, moderator, admin): reseñas, explorer de juegos y backoffice`,
        `Tema claro/oscuro (next-themes) y deploy en Netlify`,
      ],
      comment: `Proyecto integrador de la tecnicatura, en equipo. Rol frontend: features, UI y design system`,
    },
    examenConducir: {
      title: `Examen de conducir CABA`,
      subtitle: `Sitio para practicar el teórico, el simulacro y entender el trámite de la licencia`,
      date: `Jul. 2026 – Actualidad`,
      text: [
        `Next.js 16 (App Router, SSG), React 19, TypeScript y Tailwind CSS v4`,
        `shadcn/ui (Radix) y modo claro/oscuro con next-themes`,
        `Simulacro, flashcards, repositorio de preguntas y guías del trámite`,
        `Arquitectura multi-licencia; progreso en localStorage, sin backend`,
        `SEO, Google Analytics, AdSense y deploy en Cloudflare`,
      ],
      comment: `Proyecto personal. Sitio informativo, no oficial`,
    },
    bookers: {
      title: `Bookers - Proyecto de Gestión de reseñas sobre libros`,
      subtitle: `Desarrollo e implementación de un proyecto backend y frontend para la universidad`,
      date: `Sep. 2024 – Nov. 2024`,
      text: [
        `API REST con Node.js, Express y MySQL (mysql2)`,
        `Auth con JWT y bcrypt; subida de archivos con Multer`,
        `CRUD de libros, géneros, reseñas, banners, roles y usuarios`,
        `Frontend con Next.js, TypeScript, Tailwind y Zustand; toasts con Sonner`,
        `Deploy de la API en Always Data y del frontend en Vercel`,
      ],
      comment: `Proyecto académico para la entrega final de la materia de backend`,
    },
    gght: {
      title: `GGHT Solutions`,
      subtitle: `Sitio web para reparación de electrodomésticos en Estados Unidos`,
      date: `Feb. 2025 – Jun. 2025`,
      text: [
        `Desarrollo con Next.js, TypeScript y Tailwind CSS`,
        `i18n EN/ES con next-intl`,
        `Formulario de contacto con Nodemailer`,
        `SEO, performance y asesoramiento en dominio, hosting y deploy en Netlify`,
      ],
      comment: `Proyecto freelance publicado`,
    },
    jrservices: {
      title: `J&R Contracting Services`,
      subtitle: `Sitio web para contratista de techos, ventanas y reparaciones en Florida`,
      date: `Nov. 2024 – Feb. 2025`,
      text: [
        `Desarrollo con Next.js, TypeScript y Tailwind CSS`,
        `Formulario de contacto y presupuesto con Nodemailer`,
        `i18n EN/ES con next-intl`,
        `SEO, performance y entrega al cliente; deploy en Netlify`,
      ],
      comment: `Proyecto freelance publicado`,
    },
    centrogh: {
      title: `Centro Médico Good Heart`,
      subtitle: `Sitio web para un centro médico`,
      date: `Abr. 2026 – May. 2026`,
      text: [
        `Desarrollo con React, TypeScript, Vite y Tailwind CSS`,
        `React Router y SEO con react-helmet-async`,
        `Investigación de opciones de turno para el cliente, contenidos institucionales y llamados a agendar`,
        `Dominio, hosting y deploy a cargo del cliente`,
      ],
      comment: `Proyecto freelance publicado`,
    },
    megastore: {
      title: `MegaStore`,
      subtitle: `Sitio web para tienda de tecnología y productos para el hogar`,
      date: `May. 2026 – Jun. 2026`,
      text: [
        `Desarrollo con React, TypeScript, Vite y Tailwind CSS`,
        `Mapa con Leaflet; React Router y SEO con react-helmet-async`,
        `Categorías de producto, contenidos comerciales y contacto`,
        `Trabajo con el cliente hasta la publicación`,
      ],
      comment: `Proyecto freelance publicado`,
    },
    epsilonarEncuesta: {
      title: `EPSILONAR - Encuesta Online`,
      subtitle: `Desarrollo e implementación del diseño propuesto por el cliente`,
      date: `Ene. 2024 - Ene. 2024`,
      text: [
        `Desarrollo realizado con NextJS y TypeScript`,
        `Posicionamiento en el SEO`,
        `Entrevista con el líder de la empresa`,
        `Embebido de formulario`,
      ],
      comment: `Proyecto freelance`,
    },
    moveFinanciera: {
      title: `MOVE - Financiera`,
      subtitle: `Rediseño y prototipado de un sistema financiero`,
      date: `Ene. 2023 – Abr. 2023`,
      text: [
        `Re-diseño de logo y creacion de identidad de la marca`,
        `UI Kit and prototipado`,
        `Entrevista con el líder de la empresa`,
        `Análisis UX`,
        `Nueva arquitectura de la información`,
        `Userflow`,
        `Nuevos caminos en el sistema`,
      ],
      comment: `Proyecto freelance realizado junto a un desarrollador web full stack`,
    },
    beautyCosmetics: {
      title: `“Beauty Cosmetics” - E-commerce de cosméticos`,
      subtitle: `Diseño, prototipado y desarrollo de proyecto basado en un e-commerce de cosméticos`,
      date: `Dic. 2022 – Feb. 2023`,
      text: [
        `E-commerce en React JS con React Router`,
        `Catálogo y carrito con datos en Firebase`,
        `Estilado con CSS puro e íconos con Font Awesome`,
        `Skeleton loader y validación de formularios`,
        `Responsive en todos los dispositivos`,
      ],
      comment: `Proyecto integrador asociado a “React JS - Coderhouse”`,
    },
    gamingStore: {
      title: `“Gaming Store” - E-commerce de juegos`,
      subtitle: `Diseño, prototipado y desarrollo de proyecto basado en un e-commerce de juegos`,
      date: `Nov. 2022 – Dic. 2022`,
      text: [
        `Manejo de API y JSON local`,
        `Skeleton loader`,
        `Carrusel dinámico`,
        `Simulación de registro e inicio de sesión utilizando localStorage`,
        `Manejo de productos en el carrito`,
        `Validación de formularios`,
        `HTML, CSS y JavaScript`,
        `La página web se adapta a todos los dispositivos`,
      ],
      comment: `Proyecto integrador asociado a “JavaScript - NUCBA”`,
    },
    limsa: {
      title: `“LIMSA: Limpiador de zapatillas” - Landing page`,
      subtitle: `Creación, investigación y diseño de una landing page para comercializar un producto de limpieza da calzado`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        `Diseño interactivo`,
        `Responsive design`,
        `Research y benchmarking`,
      ],
      comment: `Proyecto realizado en equipo junto un diseñador UX UI y dos desarrolladores Front-End`,
    },
    hbomax: {
      title: `HBO MAX - Re-diseño de página web`,
      subtitle: `Investigación de puntos de dolor y problemas al usar la plataforma web, propuesta de rediseño y presentación de prototipo`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        `Elementos del UX de James Garret`,
        `Entrevistas y encuestas`,
        `Análisis de tendencias`,
        `Benchmarking`,
        `Análisis UX`,
        `Lean UX Canvas`,
        `Mapa de trayectoria`,
        `Matriz de necesidades`,
        `Matriz de factibilidad, deseabilidad y viabilidad`,
        `Arquitectura de la información`,
        `Tree testing`,
        `Wireflow`,
        `Guia de estilos, sistema de diseño y UI Kit`,
        `Pruebas de usabilidad`,
      ],
      comment: `Proyecto integrador asociado a “Diseño UX UI Avanzado - Coderhouse”`,
    },
    gina: {
      title: `“Gina: Una perrita muy dulce” - cuento digital interactivo`,
      subtitle: `Diseño y desarrollo de cuento digital interactivo desarrollado en página web dónde el lector puede elegir su trayecto a través de la historia`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        `Diseño interactivo`,
        `Maquetado y desarrollo con HTML y CSS`,
        `Responsive design`,
      ],
      comment: `Proyecto realizado en equipo junto a la autora de la historia.  En este trabajo ejercí el rol de Diseñadora y Desarrolladora (HTML y CSS)`,
    },
    vf: {
      title: `Victoria Fernandez - Landing Page`,
      subtitle: `Creación, investigación y diseño de una landing page para una community manager`,
      date: `Ago. 2022 - Sep. 2022`,
      text: [
        `Investigación`,
        `Benchmarking`,
        `User-personas`,
        `Encuestas`,
        `Point of view (POV)`,
        `Minimo producto viable (MVP)`,
        `Card Sorting`,
        `Arquitectura de la información`,
        `Diseño en base a la identidad de la marca`,
        `Responsive design`,
      ],
      comment: `Proyecto realizado en equipo junto con dos desarrolladores Front-End.
      En este trabajo ejercí el rol de Diseñadora UX UI`,
    },
    nereidas: {
      title: `“Nereidas Cruceros” - Landing Page`,
      subtitle: `Creación, diseño y desarrollo de landing page`,
      date: `Ago. 2022 - Sep. 2022`,
      text: [
        `Maquetación en HTML5 y CSS3 de un proyecto final dónde se debía representar una landing page con distintas secciones dentro de la misma página y un registro e inicio de sesión`,
        `Maquetado y desarrollo con HTML y CSS`,
        `Responsive design`,
      ],
      comment: `Proyecto integrador asociado a “Diseño web - NUCBA”`,
    },
    share: {
      title: `“Share” - Aplicación móvil para android`,
      subtitle: `Creación, investigación y diseño de una aplicación móvil`,
      date: `Feb. 2022 - May. 2022`,
      text: [
        `Diseño centrado en el usuario`,
        `Benchmarking`,
        `Responsive design`,
        `User-personas y storyboard`,
        `Entrevistas cualitativas y encuestas`,
        `Arquitectura de la información y user-flow`,
        `Bocetado de wireframes, prototipado en baja fidelidad y alta fidelidad (LO-FI, HI-FI)`,
        `Pruebas de usabilidad`,
        `Elaboración de UI kit y Atomic Design`,
      ],
      comment: `Proyecto integrador asociado a “Diseño UX UI - CoderHouse”`,
    },
  },
  footer: {
    p1: `Diseñada y desarrollada por Natalia Vega en mayo de 2023`,
    p2: `Contenido actualizado en agosto de 2026`,
  },
};
const EN = {
  navBar: {
    p1: `About Me`,
    p2: `Studies`,
    p3: `Skills`,
    p4: `Projects`,
    p5: `Contact`,
    p6: `Freelance`,
    menuOpen: `Close menu`,
    menuClose: `Open menu`,
    themeDark: `Switch to dark mode`,
    themeLight: `Switch to light mode`,
    closeStudy: `Close study details`,
    skip: `Skip to content`,
  },
  aboutMe: {
    h2: `About Me`,
    p1: (
      <P>
        I am a <Span>Software Development Technician</Span> from I.F.T.S. No. 24
        (March 2023 – July 2026). I specialize in{" "}
        <Span>web and mobile frontend</Span>, with a background in{" "}
        <Span>UX/UI design</Span> and product thinking. I like to be involved
        from business and user-experience definitions through to the development
        that connects frontend and backend.
      </P>
    ),
    p2: (
      <P>
        I have been part of <Span>SportClub</Span> since <Span>June 2023</Span>:
        I started with landings and management systems; since{" "}
        <Span>February 2024</Span> my main role is the members app for{" "}
        <Span>iOS</Span> and <Span>Android</Span> with <Span>React Native</Span>
        , <Span>Expo</Span> and <Span>TypeScript</Span>, and I still work on
        backoffices, CMS and product landings with <Span>Next.js</Span> and{" "}
        <Span>Tailwind</Span>.
      </P>
    ),
    p3: (
      <P>
        In parallel I work as a <Span>freelancer</Span>: websites and landings
        with <Span>React</Span>, <Span>Next.js</Span>, <Span>Vite</Span>,{" "}
        <Span>TypeScript</Span> and <Span>Tailwind</Span>. I work with the
        client and the designer, when there is one: requirements, SEO, domain,
        hosting and deploy. Published work is in the Freelance section.
      </P>
    ),
    p4: (
      <P>
        I enjoy <Span>working in a team</Span>, reading Figma, aligning
        usability and catching edge cases. I am <Span>detail-oriented</Span> and
        effective at solving problems.
      </P>
    ),
  },
  studys: {
    h2: `Studies`,
    gradeP: `Grade`,
    certificateP: `Certificate`,
    projectP: `Project`,
    gotoP: `Go to`,
    instituteP: `Institute`,
    planTitle: `Curriculum`,
    ifts: {
      school: `I.F.T.S. No. 24 · CABA`,
      degree: `Technician in Software Development`,
      finishDate: `Jul. 2026`,
      startDate: `Mar. 2023`,
      status: `Graduated`,
      progress: `Program complete · 23 courses`,
      institute: `https://www.ifts24.edu.ar/`,
      planTitle: `Curriculum`,
      plan: [
        `Core: programming, databases, OOP, modeling, mobile, testing, web front and back, software engineering, networks.`,
        `Foundations: calculus, computational logic, statistics, ICT and project management.`,
        `General: English, communication workshop, work, technology and society.`,
      ],
    },
    reactCoder: {
      degree: ` React JS Certificate `,
    },
    jsNucba: {
      degree: `JavaScript Certificate`,
    },
    uxuiAdvCoder: {
      degree: ` Advanced UX UI Design Certificate `,
    },
    webdesignNucba: {
      degree: `Web Design (HTML5 y CSS) Certificate `,
    },
    uxuiinitialCoder: {
      degree: `Initial UX UI Design Certificate `,
    },
    ubaOdon: {
      school: `Buenos Aires University `,
      degree: `general dentistry degree`,
      grade: `(44% of the career- Unfinished)`,
      finishDate: `Dec. 2021`,
    },
    bachiller: {
      school: ` Nuestra Señora de Luján School - Adrogué`,
      degree: `Bachelor’s degree in natural and exact sciences`,
      finishDate: `Dec. 2016`,
      startDate: `Mar. 2011`,
    },
  },
  skills: {
    techP: `Technical Skills`,
    softP: `How I work`,
    groups: {
      frontend: `Frontend`,
      mobile: `Mobile`,
      design: `Design`,
      transversal: `Cross-cutting`,
    },
    soft: {
      s1: `I take a feature from product and design definition through to production.`,
      s2: `I read Figma, align usability, and flag edge cases before they reach the user.`,
      s3: `I work across frontend, backend, and design: API contracts, UI states (loading, error, empty), and copy for the person using the product.`,
      s4: `On web and mobile I build reusable UI, organized by features, so the team can keep building on top of it.`,
      s5: `In freelance work I own the full cycle with the client: scope, development, SEO, domain, hosting, and handoff.`,
    },
  },
  contact: {
    h2: `Contact`,
    p1: `Thanks for visiting my portfolio!`,
    p2: `If my profile is a fit or you want to talk about a project, write to me by email or LinkedIn.`,
  },
  freelance: {
    h2: `Freelance`,
  },
  pageTitle: {
    about: `Natalia Vega — Frontend web y mobile`,
    studys: `Studies — Natalia Vega`,
    skills: `Skills — Natalia Vega`,
    freelance: `Freelance — Natalia Vega`,
    projects: `Projects — Natalia Vega`,
    contact: `Contact — Natalia Vega`,
  },
  projects: {
    h2: `Projects`,
    h3: `Filter`,
    empty: `No projects match that filter.`,
    according1: `According to the role fulfilled`,
    according2: `According to technical abilities`,
    according3: `According to context`,
    ac1it1: `UX UI Design `,
    ac1it2: `Front End Development`,
    ac1it3: `Back End Development`,
    faculty: `College`,
    courses: `Courses`,
    personal: `Personal`,
    rank: {
      title: `.RANK — Video game reviews`,
      subtitle: `IFTS No. 24 capstone: review platform with roles, game explorer and backoffice`,
      date: `Apr. 2026 – Jul. 2026`,
      text: [
        `Frontend in a team with Next.js 16 (App Router), TypeScript and Tailwind CSS v4`,
        `Feature-based architecture, custom design system and Zustand for state`,
        `Forms and validation with React Hook Form and Zod; toasts with Sonner`,
        `Auth and roles (user, moderator, admin): reviews, game explorer and backoffice`,
        `Light/dark theme (next-themes) and deploy on Netlify`,
      ],
      comment: `Capstone project for the technical degree, as a team. Frontend role: features, UI and design system`,
    },
    examenConducir: {
      title: `CABA driving test`,
      subtitle: `Practice the theory test, run the simulator and understand the license process`,
      date: `Jul. 2026 – Present`,
      text: [
        `Next.js 16 (App Router, SSG), React 19, TypeScript and Tailwind CSS v4`,
        `shadcn/ui (Radix) and light/dark mode with next-themes`,
        `Simulator, flashcards, question bank and process guides`,
        `Multi-license architecture; progress in localStorage, no backend`,
        `SEO, Google Analytics, AdSense and deploy on Cloudflare`,
      ],
      comment: `Personal project. Unofficial informational site`,
    },
    bookers: {
      title: `Bookers - Book Management Project`,
      subtitle: `Development and implementation of a backend and frontend project for the university`,
      date: `Sep. 2024 – Nov. 2024`,
      text: [
        `REST API with Node.js, Express and MySQL (mysql2)`,
        `Auth with JWT and bcrypt; file uploads with Multer`,
        `CRUD for books, genres, reviews, banners, roles and users`,
        `Frontend with Next.js, TypeScript, Tailwind and Zustand; toasts with Sonner`,
        `API deployed on Always Data and frontend on Vercel`,
      ],
      comment: `Academic project for the final delivery in the backend course`,
    },
    gght: {
      title: `GGHT Solutions`,
      subtitle: `Website for appliance repair in the United States`,
      date: `Feb. 2025 – Jun. 2025`,
      text: [
        `Built with Next.js, TypeScript and Tailwind CSS`,
        `EN/ES i18n with next-intl`,
        `Contact form with Nodemailer`,
        `SEO, performance, and advice on domain, hosting and Netlify deploy`,
      ],
      comment: `Published freelance project`,
    },
    jrservices: {
      title: `J&R Contracting Services`,
      subtitle: `Website for a roofing, windows and home-repair contractor in Florida`,
      date: `Nov. 2024 – Feb. 2025`,
      text: [
        `Built with Next.js, TypeScript and Tailwind CSS`,
        `Contact and quote form with Nodemailer`,
        `EN/ES i18n with next-intl`,
        `SEO, performance and client handoff; deploy on Netlify`,
      ],
      comment: `Published freelance project`,
    },
    centrogh: {
      title: `Centro Médico Good Heart`,
      subtitle: `Website for a medical center`,
      date: `Apr. 2026 – May 2026`,
      text: [
        `Built with React, TypeScript, Vite and Tailwind CSS`,
        `React Router and SEO with react-helmet-async`,
        `Researched appointment-booking options for the client, plus institutional content and CTAs to book`,
        `Domain, hosting and deploy handed over to the client`,
      ],
      comment: `Published freelance project`,
    },
    megastore: {
      title: `MegaStore`,
      subtitle: `Website for a home and technology store`,
      date: `May 2026 – Jun. 2026`,
      text: [
        `Built with React, TypeScript, Vite and Tailwind CSS`,
        `Map with Leaflet; React Router and SEO with react-helmet-async`,
        `Product categories, commercial content and contact`,
        `Worked with the client through to launch`,
      ],
      comment: `Published freelance project`,
    },
    epsilonarEncuesta: {
      title: `EPSILONAR - Online Survey`,
      subtitle: `Development and implementation of the client's proposed design`,
      date: `Jan. 2024 - Jan. 2024`,
      text: [
        `Developed using NextJS and TypeScript`,
        `SEO optimization`,
        `Interview with the company leader`,
        `Form embedding`,
      ],
      comment: `Freelance project`,
    },
    moveFinanciera: {
      title: `MOVE - Financial`,
      subtitle: ` Redesign and prototyped of a finance system `,
      date: `Jan. 2023 – Apr. 2023`,
      text: [
        `Logo re-design and brand identit creation`,
        `UI Kit and prototyped`,
        `Interview with the company leader`,
        `UX Analysis`,
        `New information architecture`,
        `Userflow`,
        `New paths in the system`,
      ],
      comment: `Freelance project carried out as a team together with a developer`,
    },
    beautyCosmetics: {
      title: `“Beauty Cosmetics” – Cosmetics e-commerce`,
      subtitle: ` Design, prototyped and project development based on a cosmetics e-commerce`,
      date: `Dec. 2022 – Feb. 2023`,
      text: [
        `E-commerce in React JS with React Router`,
        `Catalog and cart with Firebase`,
        `Styled with plain CSS and Font Awesome icons`,
        `Skeleton loader and form validation`,
        `Responsive on all devices`,
      ],
      comment: ` Integrator project associated with "React JS - Coderhouse"”`,
    },
    gamingStore: {
      title: `“Gaming Store” - E-commerce of games`,
      subtitle: ` Design, prototyped and project development based on a games e-commerce`,
      date: `Nov. 2022 – Dec. 2022`,
      text: [
        ` Local API and JSON Handling`,
        `Skeleton loader`,
        ` Dynamic carousel`,
        ` Simulation of registration and login using localStorage`,
        ` Management of products in the cart`,
        ` Form validation`,
        `HTML, CSS y JavaScript`,
        ` The website adapts to all devices`,
      ],
      comment: ` Integrator project associated with "JavaScript - NUCBA”`,
    },
    limsa: {
      title: `“LIMSA: Shoe cleaner” - Landing page`,
      subtitle: ` Creation, research and design of a landing page to market a shoe cleaning product`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        ` Interactive design`,
        `Responsive design`,
        ` Research and benchmarking`,
      ],
      comment: ` Project carried out as a team with a UX UI designer and two Front-End developers. In this job I performed the role of UX UI Designer. `,
    },
    hbomax: {
      title: ` HBO MAX - Website redesign`,
      subtitle: ` Investigation of pain points and problems when using the web platform, redesign proposal and prototype presentation`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        ` Elements of James Garrett's UX`,
        ` Interviews and surveys`,
        ` Trend analysis`,
        `Benchmarking`,
        ` UX analysis`,
        `Lean UX Canvas`,
        ` Trajectory map`,
        ` Matrix of needs`,
        ` Feasibility, desirability and viability matrix`,
        ` Information Architecture`,
        `Tree testing`,
        `Wireflow`,
        ` Style guide, design system and UI Kit`,
        ` Usability testing`,
      ],
      comment: ` Integrative project associated with "Advanced UX UI Design - Coderhouse”`,
    },
    gina: {
      title: `“Gina: A very sweet dog” - interactive digital story`,
      subtitle: ` Design and development of an interactive digital story developed on a web page where the reader can choose their path through the story`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        ` Interactive design`,
        ` Layout and development with HTML and CSS`,
        `Responsive design`,
      ],
      comment: ` Project carried out as a team together with the author of the story. In this job I exercised the role of Designer and Developer (HTML and CSS)`,
    },
    vf: {
      title: `Victoria Fernandez - Landing Page`,
      subtitle: ` Creation, research and design of a landing page for a community manager`,
      date: `Ago. 2022 - Sep. 2022`,
      text: [
        ` Research`,
        `Benchmarking`,
        `User-person`,
        ` surveys`,
        `Point of view (POV)`,
        ` Minimum Viable Product (MVP)`,
        `Card Sorting`,
        ` Information Architecture`,
        ` Design based on the identity of the brand`,
        `Responsive design`,
      ],
      comment: ` Project carried out as a team together with two Front-End developers. In this job I played the role of UX UI Designer`,
    },
    nereidas: {
      title: ` “Nereidas Cruises” - Landing Page`,
      subtitle: ` Creation, design and development of landing page`,
      date: `Ago. 2022 - Sep. 2022`,
      text: [
        ` Layout in HTML5 and CSS3 of a final project where a landing page should be represented with different sections within the same page and a registration and login`,
        ` Layout and development with HTML and CSS`,
        `Responsive design`,
      ],
      comment: ` Integrative project associated with "Web Design - NUCBA"`,
    },
    share: {
      title: `“Share” - Mobile application for android`,
      subtitle: ` Creation, research and design of a mobile application`,
      date: `Feb. 2022 - May. 2022`,
      text: [
        ` User-centered design`,
        `Benchmarking`,
        `Responsive design`,
        `User-persona and storyboard`,
        ` Qualitative interviews and surveys`,
        ` Information architecture and user-flow`,
        ` Wireframe sketching, prototyping in low fidelity and high fidelity (LO-FI, HI-FI)`,
        ` Usability tests`,
        ` Development of UI kit and Atomic Design`,
      ],
      comment: `Integrative project associated with "UX UI Design - CoderHouse"`,
    },
  },
  modal: {
    title: `Resume`,
    text: `Would you like to open a new window to see the Resume in PDF format?`,
    accept: `accept`,
    decline: `decline`,
  },
  footer: {
    p1: `Designed and developed by Natalia Vega in May 2023`,
    p2: `Content updated in August 2026`,
  },
};

const langs = { ES, EN };
const themes = { light, dark };

const Theme = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  const [langSelected, setLangSelected] = useState("ES");

  useEffect(() => {
    if (window.localStorage.getItem(`themeMode`)) {
      setThemeMode(window.localStorage.getItem(`themeMode`));
    }
    if (window.localStorage.getItem(`localLanguage`)) {
      setLangSelected(window.localStorage.getItem(`localLanguage`));
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = langSelected === `EN` ? `en` : `es`;
  }, [langSelected]);

  return (
    <ThemeProvider
      theme={{
        mode: themes[themeMode],
        setThemeMode,
        themeMode,
        lang: langs[langSelected],
        setLangSelected,
        langSelected,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Theme;
