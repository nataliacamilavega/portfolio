import { useTheme } from "styled-components";

import ProjectList from "../Projects/ProjectList";

const Freelance = () => {
  const theme = useTheme();
  const freelanceCollection = [
    {
      id: 23,
      title: theme.lang.projects.megastore.title,
      subtitle: theme.lang.projects.megastore.subtitle,
      date: theme.lang.projects.megastore.date,
      filterTag: [{ name: theme.lang.projects.ac1it2, color: "lightPurple" }],
      skillsTag: [
        `Vite`,
        `TypeScript`,
        `React JS`,
        `Tailwind CSS`,
        `SEO`,
        `Leaflet`,
      ],
      image: `megastoreCover.webp`,
      text: theme.lang.projects.megastore.text,
      link: `https://megastore.com.ar/`,
      comment: theme.lang.projects.megastore.comment,
    },
    {
      id: 22,
      title: theme.lang.projects.centrogh.title,
      subtitle: theme.lang.projects.centrogh.subtitle,
      date: theme.lang.projects.centrogh.date,
      filterTag: [{ name: theme.lang.projects.ac1it2, color: "lightPurple" }],
      skillsTag: [`Vite`, `TypeScript`, `React JS`, `Tailwind CSS`, `SEO`],
      image: `centroghCover.webp`,
      text: theme.lang.projects.centrogh.text,
      link: `https://centrogh.com.ar/`,
      comment: theme.lang.projects.centrogh.comment,
    },
    {
      id: 20,
      title: theme.lang.projects.gght.title,
      subtitle: theme.lang.projects.gght.subtitle,
      date: theme.lang.projects.gght.date,
      filterTag: [{ name: theme.lang.projects.ac1it2, color: "lightPurple" }],
      skillsTag: [`NextJS`, `TypeScript`, `React JS`, `Tailwind CSS`, `SEO`],
      image: `gghtCover.webp`,
      text: theme.lang.projects.gght.text,
      link: `https://gghtsolutions.com/`,
      comment: theme.lang.projects.gght.comment,
    },
    {
      id: 21,
      title: theme.lang.projects.jrservices.title,
      subtitle: theme.lang.projects.jrservices.subtitle,
      date: theme.lang.projects.jrservices.date,
      filterTag: [{ name: theme.lang.projects.ac1it2, color: "lightPurple" }],
      skillsTag: [`NextJS`, `TypeScript`, `React JS`, `Tailwind CSS`, `SEO`],
      image: `jrservicesCover.webp`,
      text: theme.lang.projects.jrservices.text,
      link: `https://jrservicesfl.com/`,
      comment: theme.lang.projects.jrservices.comment,
    },
    {
      id: 10,
      title: theme.lang.projects.epsilonarEncuesta.title,
      subtitle: theme.lang.projects.epsilonarEncuesta.subtitle,
      date: theme.lang.projects.epsilonarEncuesta.date,
      filterTag: [{ name: theme.lang.projects.ac1it2, color: "lightPurple" }],
      skillsTag: [`NextJS`, `TypeScript`, `React JS`, `SEO`, `GitHub`],
      image: `epsilonarCover.webp`,
      text: theme.lang.projects.epsilonarEncuesta.text,
      link: `https://www.epsilonar.online/`,
      comment: theme.lang.projects.epsilonarEncuesta.comment,
    },
    {
      id: 9,
      title: theme.lang.projects.moveFinanciera.title,
      subtitle: theme.lang.projects.moveFinanciera.subtitle,
      date: theme.lang.projects.moveFinanciera.date,
      filterTag: [{ name: theme.lang.projects.ac1it1, color: "lightPink" }],
      skillsTag: [
        `Prototipado`,
        `Responsive Design`,
        `UI Kit`,
        `Benchmarking`,
        `Whimsical`,
        `UXTweak`,
      ],
      image: `reportMove.webp`,
      text: theme.lang.projects.moveFinanciera.text,
      behance: `https://www.behance.net/gallery/171044901/MOVE-Financiera-Rediseno-de-sistema?`,
      comment: theme.lang.projects.moveFinanciera.comment,
    },
  ];

  return (
    <ProjectList
      collection={freelanceCollection}
      title={theme.lang.freelance.h2}
      titleColor="pink"
    />
  );
};

export default Freelance;
