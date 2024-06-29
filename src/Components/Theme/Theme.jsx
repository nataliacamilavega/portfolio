import React, { useState, useEffect, useContext } from "react";
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
    pink: `#FB8B8C`,
    lightPink: `#FFDAD9`,

    // Yellow
    darkerYellow: `#65580a`,
    darkYellow: `#EED500`,
    yellow: `#FFD600`,
    lightYellow: `#FFF3B4`,
    lighterYellow: `#F9F8EE`,

    // Purple
    darkerPurple: `#583376`,
    darkPurple: `#DFB6FF`,
    purple: `#E544FF`,
    lightPurple: `#FAD9FF`,

    // Blue
    darkerBlue: `#1d5181`,
    darkBlue: ``,
    blue: `#47A6FF`,
    lightBlue: `#C6F1FF`,

    // Green
    darkerGreen: `#1d550f`,
    darkGreen: ``,
    green: `#2EE400`,
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
    bgURL: `assets/whiteClouds.svg`,
    msColor: `#ffc187`,
    msBS: `-3.9px 6.5px 5.2px rgba(183, 183, 183, 0.35),
    0px 0px 11.7px rgba(255, 193, 135, 0.6), inset 0px -2.6px 5.2px #ffa149,
    inset 0px 2.6px 5.2px #ffd0a5;
  clip-path: circle(50% at 50% 50%);`,
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
    bgURL: `assets/whiteStars.svg`,
    msColor: `#ffffff`,
    msBS: `-3.9px 0px 19.5px rgba(183, 183, 183, 0.31),
    inset 0px -2.6px 5.2px #ffffff, inset 0px 2.6px 5.2px #bfbfc0;`,
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
    p6: `Curriculum`,
  },
  aboutMe: {
    h2: `Sobre Mi`,
    p1: (
      <P>
        Soy una persona <Span>creativa</Span>, <Span>entusiasta</Span> y
        <Span> responsable</Span>. A comienzos del año 2022 decidí tomar un
        rumbo distinto con mi vida profesional y cambié de estudiar odontología
        a dedicarme al diseño y desarrollo web.
      </P>
    ),
    p2: (
      <P>
        Realicé cursos de Diseño UX UI y además proyectos donde cumplí este rol.
        Luego comencé a estudiar desarrollo web aprendiendo
        <Span> HTML5</Span>,<Span> CSS3</Span>,<Span> JavaScript</Span> y
        <Span> React JS</Span>. También poseo proyectos integradores, te invito
        a verlos más abajo 😊.{" "}
      </P>
    ),
    p3: (
      <P>
        Me gusta trabajar en equipo por lo que considero que tengo la capacidad
        de adaptarme rápidamente, empatizar y comunicarme claramente. Además,
        soy atenta a los detalles y puedo resolver problemas emergentes.
      </P>
    ),
    p4: (
      <P>
        Espero conseguir un puesto laboral donde pueda emplear mis conocimientos
        actuales y tener la oportunidad de seguir ampliándolos
      </P>
    ),
  },
  studys: {
    h2: `Estudios`,
    gradeP: `Titulación`,
    certificateP: `Certificado`,
    projectP: `Proyecto`,
    gotoP: `Ir a`,
    ifts: {
      school: `I.F.T.S - Ciudad de Buenos Aires`,
      degree: `Tecnicatura Superior en Desarrollo de Software`,
      finishDate: `Actualidad`,
      startDate: `Mar. 2023`,
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
    softP: `Habilidades blandas`,
    soft: {
      s1: `Trabajo en equipo`,
      s2: `empatía`,
      s3: `adaptabilidad`,
      s4: `colaborativa`,
      s5: `Capacidad resolutiva`,
      s6: `creatividad`,
      s7: `buena organización`,
      s8: `Trabajo bajo presión`,
      s9: `comunicación clara`,
      s10: `atención a los detalles`,
      s11: `persistente`,
    },
  },
  contact: {
    h2: `Contacto`,
    p1: `¡Muchas gracias por visitar mi portfolio!`,
    p2: ` Si te gustó mi trabajo no dudes en contactarme a través de mis redes
    sociales.`,
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
    according1: `Según rol ejercido`,
    according2: `Según habilidad técnica`,
    ac1it1: `Diseño UX UI`,
    ac1it2: `Desarrollo Front-End`,
    skillsP: `Habilidades desarrolladas`,
    moveFinanciera: {
      title: `MOVE - Financiera`,
      subtitle: `Rediseño y prototipado de un sistema financiero.`,
      date: `Ene. 2023- Abr. 2022`,
      text: [
        `Re-diseño de logo y creacion de identidad de la marca`,
        `UI Kit and prototipado`,
        `Entrevista con el líder de la empresa`,
        `Análisis UX`,
        `Nueva arquitectura de la información`,
        `Userflow`,
        `Nuevos caminos en el sistema`
      ],
      comment: `Proyecto freelance realizado junto a un desarrollador web full stack.”`,
    },
    beautyCosmetics: {
      title: `“Beauty Cosmetics” - E-commerce de cosméticos`,
      subtitle: `Diseño, prototipado y desarrollo de proyecto basado en un e-commerce de cosméticos.`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        `Manejo de datos en Firebase`,
        `Skeleton loader`,
        `Manejo de productos en el carrito`,
        `Validación de formularios`,
        `HTML, CSS, JavaScript y React JS`,
        `La página web se adapta a todos los dispositivos`,
      ],
      comment: `Proyecto integrador asociado a “React JS - Coderhouse”`,
    },
    gamingStore: {
      title: `“Gaming Store” - E-commerce de juegos`,
      subtitle: `Diseño, prototipado y desarrollo de proyecto basado en un e-commerce de juegos.`,
      date: `Sep. 2022 - Nov. 2022`,
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
      comment: `Proyecto integrador asociado a “JavaScript - NUCBA”.`,
    },
    limsa: {
      title: `“LIMSA: Limpiador de zapatillas” - Landing page`,
      subtitle: `Creación, investigación y diseño de una landing page para comercializar un producto de limpieza da calzado.`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        `Diseño interactivo`,
        `Responsive design`,
        `Research y benchmarking`,
      ],
      comment: `Proyecto realizado en equipo junto un diseñador UX UI y dos desarrolladores Front-End.`,
    },
    hbomax: {
      title: `HBO MAX - Re-diseño de página web`,
      subtitle: `Investigación de puntos de dolor y problemas al usar la plataforma web, propuesta de rediseño y presentación de prototipo.`,
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
      comment: `Proyecto integrador asociado a “Diseño UX UI Avanzado - Coderhouse”.`,
    },
    gina: {
      title: `“Gina: Una perrita muy dulce” - cuento digital interactivo`,
      subtitle: `Diseño y desarrollo de cuento digital interactivo desarrollado en página web dónde el lector puede elegir su trayecto a través de la historia.`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        `Diseño interactivo`,
        `Maquetado y desarrollo con HTML y CSS`,
        `Responsive design`,
      ],
      comment: `Proyecto realizado en equipo junto a la autora de la historia.  En este trabajo ejercí el rol de Diseñadora y Desarrolladora (HTML y CSS).`,
    },
    vf: {
      title: `Victoria Fernandez - Landing Page`,
      subtitle: `Creación, investigación y diseño de una landing page para una community manager.`,
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
      En este trabajo ejercí el rol de Diseñadora UX UI.`,
    },
    nereidas: {
      title: `“Nereidas Cruceros” - Landing Page`,
      subtitle: `Creación, diseño y desarrollo de landing page.`,
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
      subtitle: `Creación, investigación y diseño de una aplicación móvil.`,
      date: `Feb. 2022 - May. 2022`,
      text: [
        `Diseño centrado en el usuario`,
        `Benchmarking`,
        `Responsive design`,
        `User-personas y storyboard`,
        `Entrevistas cualitativas y encuestas`,
        `Arquitectura de la información y user-flow`,
        `Bocetado de wireframes, prototipado en baja fidelidad y alta fidelidad (LO-FI, HI-FI)`,
        `Pruebas de usabilidad.`,
        `Elaboración de UI kit y Atomic Design.`,
      ],
      comment: `Proyecto integrador asociado a “Diseño web - NUCBA”`,
    },
  },
  resume: `cvES.pdf`,
  footer: {
    p1: `Página diseñada y desarrollada por Natalia Vega`,
  },
};
const EN = {
  navBar: {
    p1: `About Me`,
    p2: `Studies`,
    p3: `Skills`,
    p4: `Projects`,
    p5: `Contact`,
    p6: `Resume`,
  },
  aboutMe: {
    h2: `About Me`,
    p1: (
      <P>
        I am a <Span>creative</Span>, <Span>enthusiastic</Span>, and{" "}
        <Span>responsible</Span> person. At the beginning of 2022 I decided to
        take my professional path in another direction which led me to change
        from studying dentistry to web design and development.
      </P>
    ),
    p2: (
      <P>
        I did UX UI design courses and some projects where I fulfilled that
        role. Then I proceeded with web development by learning{" "}
        <Span>HTML5</Span>, <Span>CSS3</Span>,<Span>JavaScript</Span> and{" "}
        <Span>React JS</Span>. I have some integrating projects I invite you to
        see in the section called “Projects”.
      </P>
    ),
    p3: (
      <P>
        I am a team worker, so I consider I have the ability to adapt quickly,
        empathise, and communicate clearly. Furthermore, I pay attention to
        details and I can solve emerging issues.
      </P>
    ),
    p4: (
      <P>
        I expect to get a job position where I can use my skills and keep
        expanding them.
      </P>
    ),
  },
  studys: {
    h2: `Studies`,
    gradeP: `Grade`,
    certificateP: `Certificate`,
    projectP: `Project`,
    gotoP: `Go to`,
    ifts: {
      school: `I.F.T.S - Ciudad de Buenos Aires `,
      degree: `Technician in Software Development`,
      finishDate: `Present`,
      startDate: `Mar. 2023`,
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
    softP: `Soft Skills`,
    soft: {
      s1: `Teamwork`,
      s2: `Empathy`,
      s3: `Adaptabilityv`,
      s4: `Collaboration`,
      s5: `Problem solving`,
      s6: `Creativity`,
      s7: `Good organization`,
      s8: `Work under pressure`,
      s9: `Communicate clearly`,
      s10: `Attention to detail`,
      s11: `Persistent`,
    },
  },
  contact: {
    h2: `Contact`,
    p1: `Thanks for visiting my portfolio`,
    p2: `If you liked my work, don’t hesitate to contact me on my social media`,
  },
  projects: {
    h2: `Projects`,
    h3: `Filter`,
    according1: `According to the role fulfilled`,
    according2: `According to technical abilities`,
    ac1it1: `UX UI Design `,
    ac1it2: `Front End Development`,
    skillsP: `Skills developed`,
    moveFinanciera: {
      title: `MOVE - Financial`,
      subtitle: ` Redesign and prototyped of a finance system .`,
      date: `Jan. 2023- Apr. 2022`,
      text: [
        `Logo re-design and brand identit creation`,
        `UI Kit and prototyped`,
        `Interview with the company leader`,
        `UX Analysis`,
        `New information architecture`,
        `Userflow`,
        `New paths in the system`
      ],
      comment: `Freelance project carried out as a team together with a developer ”`,
    },
    beautyCosmetics: {
      title: `“Beauty Cosmetics” – Cosmetics e-commerce`,
      subtitle: ` Design, prototyped and project development based on a cosmetics e-commerce.`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        ` Data handling in Firebase`,
        `Skeleton loader`,
        ` Management of products in the cart`,
        ` Form validation`,
        `HTML, CSS, JavaScript y React JS`,
        ` The website adapts to all devices`,
      ],
      comment: ` Integrator project associated with "React JS - Coderhouse"”`,
    },
    gamingStore: {
      title: `“Gaming Store” - E-commerce of games`,
      subtitle: ` Design, prototyped and project development based on a games e-commerce.`,
      date: `Sep. 2022 - Nov. 2022`,
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
      comment: ` Integrator project associated with "JavaScript - NUCBA”.`,
    },
    limsa: {
      title: `“LIMSA: Shoe cleaner” - Landing page`,
      subtitle: ` Creation, research and design of a landing page to market a shoe cleaning product.`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        ` Interactive design`,
        `Responsive design`,
        ` Research and benchmarking`,
      ],
      comment: ` Project carried out as a team with a UX UI designer and two Front-End developers. In this job I performed the role of UX UI Designer. .`,
    },
    hbomax: {
      title: ` HBO MAX - Website redesign`,
      subtitle: ` Investigation of pain points and problems when using the web platform, redesign proposal and prototype presentation.`,
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
      comment: ` Integrative project associated with "Advanced UX UI Design - Coderhouse”.`,
    },
    gina: {
      title: `“Gina: A very sweet dog” - interactive digital story`,
      subtitle: ` Design and development of an interactive digital story developed on a web page where the reader can choose their path through the story.`,
      date: `Sep. 2022 - Nov. 2022`,
      text: [
        ` Interactive design`,
        ` Layout and development with HTML and CSS`,
        `Responsive design`,
      ],
      comment: ` Project carried out as a team together with the author of the story. In this job I exercised the role of Designer and Developer (HTML and CSS).`,
    },
    vf: {
      title: `Victoria Fernandez - Landing Page`,
      subtitle: ` Creation, research and design of a landing page for a community manager.`,
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
      subtitle: ` Creation, design and development of landing page.`,
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
        ` Usability tests.`,
        ` Development of UI kit and Atomic Design`,
      ],
      comment: ` Integrative project associated with "Web Design - NUCBA" .`,
    },
  },
  modal: {
    title: `Resume`,
    text: `Would you like to open a new window to see the Resume in PDF format?`,
    accept: `accept`,
    decline: `decline`,
  },
  resume: `cvEN.pdf`,
  footer: {
    p1: `Web page design and developed by Natalia Vega`,
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
