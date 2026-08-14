import styled, { useTheme } from "styled-components";

import TecnicalItem from "./TecnicalItem";
import SoftItem from "./SoftItem";
import { skillIcons } from "./skillIcons";

const Habilities = () => {
  const theme = useTheme();
  const Container = styled.section`
    position: relative;
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
  const H3 = styled.h2`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    width: 100%;
  `;
  const SoftTitle = styled.h2`
    font-family: "Convergence";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: ${(propsTheme) => propsTheme.theme.mode.colors.green};
  `;
  const SrOnly = styled.h1`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `;
  const ContainerTecnical = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 16px 12px;
    width: 100%;
    justify-content: flex-start;
  `;
  const ContainerSoft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  `;
  const groups = [
    {
      title: theme.lang.skills.groups.frontend,
      items: [
        { thname: `HTML5`, icon: skillIcons.html() },
        { thname: `CSS3`, icon: skillIcons.css() },
        { thname: `JavaScript`, icon: skillIcons.javascript() },
        { thname: `TypeScript`, icon: skillIcons.typescript() },
        { thname: `React`, icon: skillIcons.react() },
        { thname: `Next.js`, icon: skillIcons.next(), mono: true },
        { thname: `Vite`, icon: skillIcons.vite() },
        { thname: `Tailwind`, icon: skillIcons.tailwind() },
        { thname: `Zustand`, icon: skillIcons.zustand() },
        { thname: `TanStack Query`, icon: skillIcons.tanstack() },
        { thname: `React Hook Form`, icon: skillIcons.rhf() },
        { thname: `Zod`, icon: skillIcons.zod() },
        { thname: `i18n`, icon: skillIcons.i18n() },
        { thname: `SEO`, icon: skillIcons.seo() },
      ],
    },
    {
      title: theme.lang.skills.groups.mobile,
      items: [
        { thname: `React Native`, icon: skillIcons.react() },
        { thname: `Expo`, icon: skillIcons.expo(), mono: true },
        { thname: `Expo Router`, icon: skillIcons.expo(), mono: true },
        { thname: `EAS`, icon: skillIcons.expo(), mono: true },
        { thname: `Deep linking`, icon: skillIcons.deepLink() },
        { thname: `Push`, icon: skillIcons.push() },
        { thname: `Android`, icon: skillIcons.android() },
        { thname: `Android Studio`, icon: skillIcons.androidStudio() },
        { thname: `iOS`, icon: skillIcons.ios() },
        { thname: `Xcode`, icon: skillIcons.xcode() },
      ],
    },
    {
      title: theme.lang.skills.groups.design,
      items: [
        { thname: `Figma`, icon: skillIcons.figma() },
        { thname: `Design systems`, icon: skillIcons.designSystem() },
      ],
    },
    {
      title: theme.lang.skills.groups.transversal,
      items: [
        { thname: `Git`, icon: skillIcons.git() },
        { thname: `GitHub`, icon: skillIcons.github(), mono: true },
        { thname: `Node.js`, icon: skillIcons.node() },
        { thname: `Express`, icon: skillIcons.express(), mono: true },
        { thname: `MySQL`, icon: skillIcons.mysql() },
        { thname: `JWT`, icon: skillIcons.jwt(), mono: true },
        { thname: `Postman`, icon: skillIcons.postman() },
        { thname: `Jira`, icon: skillIcons.jira() },
        { thname: `Firebase`, icon: skillIcons.firebase() },
        { thname: `Google Analytics`, icon: skillIcons.analytics() },
        { thname: `Scrum`, icon: skillIcons.scrum() },
        { thname: `Kanban`, icon: skillIcons.scrum() },
      ],
    },
  ];
  const softH = [
    theme.lang.skills.soft.s1,
    theme.lang.skills.soft.s2,
    theme.lang.skills.soft.s3,
    theme.lang.skills.soft.s4,
    theme.lang.skills.soft.s5,
  ];

  return (
    <Container>
      <SrOnly>{theme.lang.navBar.p3}</SrOnly>
      {groups.map((group) => (
        <div key={group.title} style={{ display: `contents` }}>
          <H3>{group.title}</H3>
          <ContainerTecnical>
            {group.items.map((item) => (
              <TecnicalItem
                key={item.thname}
                icon={item.icon}
                mono={item.mono}
                thname={item.thname}
              />
            ))}
          </ContainerTecnical>
        </div>
      ))}
      <SoftTitle>{theme.lang.skills.softP}</SoftTitle>
      <ContainerSoft>
        {softH.map((name) => (
          <SoftItem key={name} thname={name} />
        ))}
      </ContainerSoft>
    </Container>
  );
};

export default Habilities;
