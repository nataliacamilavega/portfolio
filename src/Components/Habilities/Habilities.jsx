// React imports
import React from "react";
import TecnicalItem from "./TecnicalItem";
import SoftItem from "./SoftItem";
// Style
import styled, { useTheme } from "styled-components";
import { BsStars } from "react-icons/bs";
const Habilities = () => {
  // Para cambiar el idioma y usar el theme fuera de styled components
  const theme = useTheme();
  const Container = styled.section`
    width: 100%;
    padding-top: 92px;
    padding-bottom: 72px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (max-width: 960px) {
      padding-top: 56px;
    }
  `;
  const H2 = styled.h2`
    font-family: "Convergence";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: ${(propsTheme) => propsTheme.theme.mode.colors.green};
  `;
  const ContainerTecnical = styled.div`
    align-self: center;
    display: flex;
    flex-flow: row wrap;
    gap: 24px;
    max-width: 700px;
    justify-content: center;
  `;
  const ContainerSoft = styled.div`
    display: flex;
    flex-flow: row wrap;
    row-gap: 24px;
    column-gap: 52px;
    max-width: calc(700px + 32px);
  `;
  const tecnicalH = [
    // HTML
    {
      thname: `HTML5`,
      icon: `htmlIcon.svg`,
    },
    // CSS
    {
      thname: `CSS3`,
      icon: `cssIcon.svg`,
    },
    // Javascript
    {
      thname: `JavaScript`,
      icon: `javascriptIcon.svg`,
    },
    // React JS
    {
      thname: `React JS`,
      icon: `reactJSIcon.svg`,
    },
    // github
    {
      thname: `github`,
      icon: `githubIcon.svg`,
    },
    // git
    {
      thname: `git`,
      icon: `gitIcon.svg`,
    },
    // Figma
    {
      thname: `Figma`,
      icon: `figmaIcon.svg`,
    },
    // whimsical
    {
      thname: `whimsical`,
      icon: `whimsicalIcon.svg`,
    },
    // uxtweak
    {
      thname: `uxtweak`,
      icon: `uxtweakIcon.svg`,
    },
    // illustrator
    {
      thname: `illustrator`,
      icon: `illustratorIcon.svg`,
    },
    // photoshop
    {
      thname: `photoshop`,
      icon: `photoshopIcon.svg`,
    },
    // photoshop
    {
      thname: `styled components`,
      icon: `styledcomponentsIcon.svg`,
    },
  ];
  const softH = [
    {
      thname: theme.lang.skills.soft.s1,
      icon: <BsStars />,
    },
    {
      thname: theme.lang.skills.soft.s2,
      icon: <BsStars />,
    },
    {
      thname: theme.lang.skills.soft.s3,
      icon: <BsStars />,
    },
    {
      thname: theme.lang.skills.soft.s4,
      icon: <BsStars />,
    },
    {
      thname: theme.lang.skills.soft.s5,
      icon: <BsStars />,
    },
    {
      thname: theme.lang.skills.soft.s6,
      icon: <BsStars />,
    },
    {
      thname: theme.lang.skills.soft.s7,
      icon: <BsStars />,
    },
    {
      thname: theme.lang.skills.soft.s8,
      icon: <BsStars />,
    },
    {
      thname: theme.lang.skills.soft.s9,
      icon: <BsStars />,
    },
    {
      thname: theme.lang.skills.soft.s10,
      icon: <BsStars />,
    },
    {
      thname: theme.lang.skills.soft.s11,
      icon: <BsStars />,
    },
  ];

  const renderTecnicalH = tecnicalH.map((item, index) => (
    <TecnicalItem
      icon={item.icon}
      thname={item.thname}
      key={item.thname + index}
    ></TecnicalItem>
  ));
  const renderSoftH = softH.map((item, index) => (
    <SoftItem thname={item.thname} key={item.thname + index}></SoftItem>
  ));
  return (
    <Container>
      <H2>{theme.lang.skills.techP}</H2>
      <ContainerTecnical>{renderTecnicalH}</ContainerTecnical>
      <H2>{theme.lang.skills.softP}</H2>
      <ContainerSoft>{renderSoftH}</ContainerSoft>
    </Container>
  );
};

export default Habilities;
