import { useState } from "react";
import styled, { useTheme } from "styled-components";

import StudyDisplay from "./StudyDisplay";
import StudyItem from "./StudyItem";

const Studys = () => {
  // Para cambiar el idioma y usar el theme fuera de styled components
  const theme = useTheme();

  const studyCollection = [
    //IFTS
    {
      school: theme.lang.studys.ifts.school,
      schoolLogo: `iftsLogo.png`,
      degree: theme.lang.studys.ifts.degree,
      finishDate: theme.lang.studys.ifts.finishDate,
      startDate: theme.lang.studys.ifts.startDate,
      project: `rankCover.webp`,
      link: `https://rank-ifts24.netlify.app/`,
      status: theme.lang.studys.ifts.status,
      progress: theme.lang.studys.ifts.progress,
      instituteLink: theme.lang.studys.ifts.institute,
      planTitle: theme.lang.studys.ifts.planTitle,
      studyPlan: theme.lang.studys.ifts.plan,
    },
    // React coderhouse
    {
      school: `Coderhouse`,
      schoolLogo: `coderLogo.svg`,
      degree: theme.lang.studys.reactCoder.degree,
      grade: `10`,
      credential: `coderReactCredential.webp`,
      project: `coderReactProject.webp`,
      link: `https://beautycosmetics.vercel.app/`,
      finishDate: ``,
      startDate: ``,
    },
    // JS Nucba
    {
      school: `Nucba`,
      schoolLogo: `nucbaLogo.svg`,
      degree: theme.lang.studys.jsNucba.degree,
      grade: ``,
      credential: `nucbaJSCredential.webp`,
      project: `nucbaJSProject.webp`,
      link: `https://gamingstore-bynatalia.vercel.app/`,
      finishDate: ``,
      startDate: ``,
    },
    // UXUI Avanzado coderhouse
    {
      school: `Coderhouse`,
      schoolLogo: `coderLogo.svg`,
      degree: theme.lang.studys.uxuiAdvCoder.degree,
      grade: `10`,
      credential: `coderUXACredential.webp`,
      project: `coderUXAProject.webp`,
      link: `https://www.behance.net/gallery/150898443/Re-diseno-de-la-web-HBO-MAX-Natalia-Vega`,
      finishDate: ``,
      startDate: ``,
    },
    // Diseño web Nucba
    {
      school: `Nucba`,
      schoolLogo: `nucbaLogo.svg`,
      degree: theme.lang.studys.webdesignNucba.degree,
      grade: ``,
      credential: `nucbaDWebCredential.webp`,
      project: `nucbaDWebProject.webp`,
      link: `https://nereidas-cruceros.vercel.app/`,
      finishDate: ``,
      startDate: ``,
    },
    // UXUI Inicial coderhouse
    {
      school: `Coderhouse`,
      schoolLogo: `coderLogo.svg`,
      degree: theme.lang.studys.uxuiinitialCoder.degree,
      grade: `10`,
      credential: `coderUXCredential.webp`,
      project: `coderUXProject.webp`,
      link: `https://www.behance.net/gallery/142527049/Share-Natalia-Vega`,
      finishDate: ``,
      startDate: ``,
    },
    // Odontologia - Universidad de Bs As
    {
      school: theme.lang.studys.ubaOdon.school,
      schoolLogo: `UBALogo.svg`,
      degree: theme.lang.studys.ubaOdon.degree,
      grade: theme.lang.studys.ubaOdon.grade,
      credential: ``,
      project: ``,
      link: ``,
      finishDate: theme.lang.studys.ubaOdon.finishDate,
      startDate: ``,
    },
    //Bachiller
    {
      school: theme.lang.studys.bachiller.school,
      schoolLogo: `CNSLLogo.svg`,
      degree: theme.lang.studys.bachiller.degree,
      grade: ``,
      credential: ``,
      project: ``,
      link: ``,
      finishDate: theme.lang.studys.bachiller.finishDate,
      startDate: theme.lang.studys.bachiller.startDate,
    },
  ];
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
  const StudyDisplayContainer = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 960px) {
      width: 100%;
      justify-content: center;
    }
  `;
  const H2 = styled.h1`
    font-family: "Convergence";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: ${(propsTheme) => propsTheme.theme.mode.colors.yellow};
  `;
  const StudysContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-self: start;
    width: fit-content;
    @media (max-width: 960px) {
      width: 100%;
    }
  `;
  const [studySelected, setStudySelected] = useState();
  const renderStudys = studyCollection.map((study, index) => (
    <StudyItem
      key={study.degree + index}
      credential={study.credential}
      degree={study.degree}
      finishDate={study.finishDate}
      grade={study.grade}
      gradeP={theme.lang.studys.gradeP}
      link={study.link}
      project={study.project}
      school={study.school}
      schoolLogo={study.schoolLogo}
      setterStudySelected={setStudySelected}
      startDate={study.startDate}
      status={study.status}
      studyPlan={study.studyPlan}
      instituteLink={study.instituteLink}
      studySelected={studySelected}
    />
  ));

  const findStudySelected = studyCollection.find(
    (study) => studySelected && studySelected === study.degree,
  );

  return (
    <Container>
      <H2>{theme.lang.studys.h2}</H2>
      <StudyDisplayContainer>
        <StudysContainer>{renderStudys}</StudysContainer>
        {findStudySelected && (
          <StudyDisplay
            certificateP={theme.lang.studys.certificateP}
            closeLabel={theme.lang.navBar.closeStudy}
            gotoP={theme.lang.studys.gotoP}
            infoStudySelected={findStudySelected}
            instituteP={theme.lang.studys.instituteP}
            planTitle={theme.lang.studys.planTitle}
            projectP={theme.lang.studys.projectP}
            setterStudySelected={setStudySelected}
            studySelected={studySelected}
          />
        )}
      </StudyDisplayContainer>
    </Container>
  );
};

export default Studys;
