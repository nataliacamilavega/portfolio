import { useState } from "react";
import styled, { useTheme } from "styled-components";

import FilterItem from "./FilterItem";
import ProjectItem from "./ProjectItem";

const Container = styled.section`
  width: 100%;
  padding-top: 92px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 960px) {
    padding-top: 56px;
  }
`;
const FilterContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FilterItemContainer = styled.article`
  display: flex;
  gap: 32px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const H2 = styled.h2`
  font-family: "Convergence";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${(propsTheme) => propsTheme.theme.mode.colors.blue};
`;
const H3 = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;
const ProjectsContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Projects = () => {
  // Para cambiar el idioma y usar el theme fuera de styled components
  const theme = useTheme();
  const filters = [
    // Segun rol ejercido
    {
      filterType: theme.lang.projects.according1,
      filter: [
        { name: theme.lang.projects.ac1it1, color: `lightPink`, id: 1 },
        { name: theme.lang.projects.ac1it2, color: `lightPurple`, id: 2 },
        { name: theme.lang.projects.ac1it3, color: `lightYellow`, id: 3 },
      ],
    },
    // Según habilidad técnica:
    {
      filterType: theme.lang.projects.according2,
      filter: [
        { name: `JS Vanilla`, color: `lightBlue`, id: 1 },
        { name: `TypeScript`, color: `lightBlue`, id: 4 },
        { name: `React JS`, color: `lightBlue`, id: 2 },
        { name: `React Native`, color: `lightBlue`, id: 5 },
        { name: `NextJS`, color: `lightBlue`, id: 3 },
        { name: `Node.js`, color: `lightBlue`, id: 6 },
        { name: `Express.js`, color: `lightBlue`, id: 7 },
      ],
    },
  ];
  const projectsCollection = [
    // Share App
    {
      id: 12,
      title: theme.lang.projects.shareApp.title,
      subtitle: theme.lang.projects.shareApp.subtitle,
      date: theme.lang.projects.shareApp.date,
      filterTag: [{ name: theme.lang.projects.ac1it2, color: "lightPurple" }],
      skillsTag: [
        `React Native`,
        `Expo`,
        `Tailwind CSS`,
        `NativeWind`,
        `Zustand`,
        `eslint`,
        `GitHub`,
      ],
      image: `shareAppCover.png`,
      text: theme.lang.projects.shareApp.text,
      link: `https://github.com/nataliacamilavega/share-app`,
      comment: theme.lang.projects.shareApp.comment,
    },
    // Bookers
    {
      id: 11,
      title: theme.lang.projects.bookers.title,
      subtitle: theme.lang.projects.bookers.subtitle,
      date: theme.lang.projects.bookers.date,
      filterTag: [
        { name: theme.lang.projects.ac1it2, color: "lightPurple" },
        {
          name: theme.lang.projects.ac1it3,
          color: "lightYellow",
        },
      ],
      skillsTag: [
        `Node.js`,
        `Express.js`,
        `MySQL`,
        `Multer`,
        `JWT`,
        `TypeScript`,
        `Postman`,
        `API REST`,
        `GitHub`,
        `VSCode`,
        `Vercel`,
        `AlwaysData`,
        `NextJS`,
        `TailwindCSS`,
      ],
      image: `bookersCover.png`,
      text: theme.lang.projects.bookers.text,
      link: `https://bookreview-ifts24.vercel.app/`,
      gitHub: `https://github.com/nataliacamilavega/back-tp-bookreview`,
      comment: theme.lang.projects.bookers.comment,
    },
    // Epsilonar Encuesta
    {
      id: 10,
      title: theme.lang.projects.epsilonarEncuesta.title,
      subtitle: theme.lang.projects.epsilonarEncuesta.subtitle,
      date: theme.lang.projects.epsilonarEncuesta.date,
      filterTag: [{ name: theme.lang.projects.ac1it2, color: "lightPurple" }],
      skillsTag: [
        `Freelance`,
        `Responsive Design`,
        `NextJS`,
        `TypeScript`,
        `ReactJS`,
        `SEO`,
        `GitHub`,
        `VSCode`,
      ],
      image: `epsilonarCover.png`,
      text: theme.lang.projects.epsilonarEncuesta.text,
      link: `https://www.epsilonar.online/`,
      comment: theme.lang.projects.epsilonarEncuesta.comment,
    },
    // Move Financiera
    {
      id: 9,
      title: theme.lang.projects.moveFinanciera.title,
      subtitle: theme.lang.projects.moveFinanciera.subtitle,
      date: theme.lang.projects.moveFinanciera.date,
      filterTag: [{ name: theme.lang.projects.ac1it1, color: "lightPink" }],
      skillsTag: [
        `Freelance`,
        `Prototipado`,
        `Responsive Design`,
        `UI Kit`,
        `Benchmarking`,
        `Sistema Financiero`,
        `Whimsical`,
        `UXTweak`,
        `Ps`,
      ],
      image: `reportMove.png`,
      text: theme.lang.projects.moveFinanciera.text,
      behance: `https://www.behance.net/gallery/171044901/MOVE-Financiera-Rediseno-de-sistema?`,
      comment: theme.lang.projects.moveFinanciera.comment,
    },
    // Beauty cosmetics
    {
      id: 8,
      title: theme.lang.projects.beautyCosmetics.title,
      subtitle: theme.lang.projects.beautyCosmetics.subtitle,
      date: theme.lang.projects.beautyCosmetics.date,
      filterTag: [{ name: theme.lang.projects.ac1it2, color: "lightPurple" }],
      skillsTag: [
        `HTML5`,
        `CSS3`,
        `JavaScript`,
        `React JS`,
        `Responsive design`,
        `Firebase`,
        `VSCode`,
        `GitHub`,
      ],
      image: `coderReactProject.png`,
      text: theme.lang.projects.beautyCosmetics.text,
      gitHub: `https://github.com/nataliavega98/Beauty-Cosmetics`,
      link: ` https://beautycosmetics.vercel.app/`,
      comment: theme.lang.projects.beautyCosmetics.comment,
    },
    // Gaming Store
    {
      id: 7,
      title: theme.lang.projects.gamingStore.title,
      subtitle: theme.lang.projects.gamingStore.subtitle,
      date: theme.lang.projects.gamingStore.date,
      filterTag: [{ name: theme.lang.projects.ac1it2, color: "lightPurple" }],
      skillsTag: [
        `HTML5`,
        `CSS3`,
        `JS Vanilla`,
        `Responsive design`,
        `APIs`,
        `VSCode`,
        `GitHub`,
      ],
      image: `nucbaJSProject.png`,
      text: theme.lang.projects.gamingStore.text,
      gitHub: `https://github.com/nataliavega98/gaming-store`,
      link: `https://gamingstore-bynatalia.vercel.app/`,
      comment: theme.lang.projects.gamingStore.comment,
    },
    // “LIMSA: Limpiador de zapatillas” - Landing page
    {
      id: 6,
      title: theme.lang.projects.limsa.title,
      subtitle: theme.lang.projects.limsa.subtitle,
      date: theme.lang.projects.limsa.date,
      filterTag: [{ name: theme.lang.projects.ac1it1, color: "lightPink" }],
      skillsTag: [
        `Prototipado`,
        `Responsive Design`,
        `UI Kit`,
        `Benchmarking`,
        `Aplicación móvil`,
        `Whimsical`,
        `UXTweak`,
        `Ps`,
      ],
      image: `coderLIMSAProject.png`,
      text: theme.lang.projects.limsa.text,
      behance: `https://www.behance.net/gallery/159075451/LIM-SA-Landing-page`,
      link: `https://lim-sa.netlify.app/`,
      comment: theme.lang.projects.limsa.comment,
    },
    // “HBO MAX - Re-diseño de página web
    {
      id: 5,
      title: theme.lang.projects.hbomax.title,
      subtitle: theme.lang.projects.hbomax.subtitle,
      date: theme.lang.projects.hbomax.date,
      filterTag: [{ name: theme.lang.projects.ac1it1, color: "lightPink" }],
      skillsTag: [
        `Prototipado`,
        `Responsive Design`,
        `UI Kit`,
        `Benchmarking`,
        `Diseño web`,
        `Whimsical`,
        `UXTweak`,
        `Ps`,
      ],
      image: `coderUXAProject.png`,
      text: theme.lang.projects.hbomax.text,
      behance: `https://www.behance.net/gallery/153206055/Reporte-UX-VF-Natalia-Vega?tracking_source=project_owner_other_projects`,
      comment: theme.lang.projects.hbomax.comment,
    },
    // “Gina: Una perrita muy dulce” - cuento digital interactivo
    {
      id: 4,
      title: theme.lang.projects.gina.title,
      subtitle: theme.lang.projects.gina.subtitle,
      date: theme.lang.projects.gina.date,
      filterTag: [
        { name: theme.lang.projects.ac1it1, color: "lightPink" },
        { name: theme.lang.projects.ac1it2, color: "lightPurple" },
      ],
      skillsTag: [
        `Prototipado`,
        `Responsive Design`,
        `Figma`,
        `HTML5`,
        `CSS3`,
        `Diseño web`,
        `VSCode`,
        `Ps`,
      ],
      image: `ginaProject.png`,
      text: theme.lang.projects.gina.text,
      link: `https://gina-unaperritamuydulce.vercel.app/`,
      comment: theme.lang.projects.gina.comment,
    },
    // Victoria Fernandez - Landing Page
    {
      id: 3,
      title: theme.lang.projects.vf.title,
      subtitle: theme.lang.projects.vf.subtitle,
      date: theme.lang.projects.vf.date,
      filterTag: [{ name: theme.lang.projects.ac1it1, color: "lightPink" }],
      skillsTag: [
        `Prototipado`,
        `Responsive Design`,
        `Figma`,
        `UI Kit`,
        `Benchmarking`,
        `Whimsical`,
        `UXTweak`,
        `Ps`,
      ],
      image: `coderVFProject.png`,
      text: theme.lang.projects.vf.text,
      behance: `https://www.behance.net/gallery/153206055/Reporte-UX-VF-Natalia-Vega?tracking_source=project_owner_other_projects/`,
      comment: theme.lang.projects.vf.comment,
    },
    // “Nereidas Cruceros” - Landing Page
    {
      id: 2,
      title: theme.lang.projects.nereidas.title,
      subtitle: theme.lang.projects.nereidas.subtitle,
      date: theme.lang.projects.nereidas.date,
      filterTag: [{ name: theme.lang.projects.ac1it2, color: "lightPurple" }],
      skillsTag: [
        `HTML5`,
        `CSS3`,
        `Diseño web`,
        `Responsive design`,
        `Maquetado`,
        `VSCode`,
      ],
      image: `nucbaDWebProject.png`,
      text: theme.lang.projects.nereidas.text,
      link: `https://nereidas-cruceros.vercel.app/`,
      comment: theme.lang.projects.nereidas.comment,
    },
    // “Share” - Aplicación móvil para android
    {
      id: 1,
      title: theme.lang.projects.share.title,
      subtitle: theme.lang.projects.share.subtitle,
      date: theme.lang.projects.share.date,
      filterTag: [{ name: theme.lang.projects.ac1it1, color: "lightPink" }],
      skillsTag: [
        `Prototipado`,
        `Figma`,
        `UI Kit`,
        `Benchmarking`,
        `Aplicación móvil`,
        `Whimsical`,
        `Optimal Workshop`,
        `Ps`,
        `Ai`,
      ],
      image: `coderUXProject.png`,
      text: theme.lang.projects.share.text,
      behance: `https://www.behance.net/gallery/142527049/Share-Natalia-Vega`,
      comment: theme.lang.projects.share.comment,
    },
  ];
  const [filterSelected, setFilterSelected] = useState(`all`);
  const renderFilters = filters.map((item, index) => (
    <FilterItem
      key={item.filterType + index}
      filter={item.filter}
      filterSelected={filterSelected}
      filterType={item.filterType}
      setterFilter={setFilterSelected}
    />
  ));

  function renderProjects(colection) {
    return colection.map((item, index) => (
      <ProjectItem
        key={item.title + index}
        behance={item.behance}
        comment={item.comment}
        date={item.date}
        filterTag={item.filterTag}
        gitHub={item.gitHub}
        id={item.id}
        image={item.image}
        link={item.link}
        skillsP={theme.lang.projects.skillsP}
        skillsTag={item.skillsTag}
        subtitle={item.subtitle}
        text={item.text}
        title={item.title}
      />
    ));
  }

  const filteredProjects = () => {
    if (filterSelected === `all`) {
      return renderProjects(projectsCollection);
    } else {
      const filterProjects = projectsCollection.filter((project) => {
        return (
          project.filterTag.some((e) => e.name === filterSelected) ||
          project.skillsTag.some((e) => e === filterSelected)
        );
      });

      return renderProjects(filterProjects);
    }
  };

  return (
    <Container>
      <H2>{theme.lang.projects.h2}</H2>
      <FilterContainer>
        <H3>{theme.lang.projects.h3}:</H3>
        <FilterItemContainer>{renderFilters}</FilterItemContainer>
      </FilterContainer>
      <ProjectsContainer>{filteredProjects()}</ProjectsContainer>
    </Container>
  );
};

export default Projects;
