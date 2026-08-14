import {
  Bell,
  GithubLogo,
  Kanban,
  Link,
  MagnifyingGlass,
  SquaresFour,
  Translate,
} from "@phosphor-icons/react";
import {
  SiExpo,
  SiExpress,
  SiGit,
  SiGoogleanalytics,
  SiJira,
  SiJsonwebtokens,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const ICON = 28;

const BrandImg = ({ file }) => (
  <img alt="" height={ICON} src={`/assets/icons/${file}`} width={ICON} />
);

export const skillIcons = {
  typescript: () => <BrandImg file="typescriptIcon.svg" />,
  javascript: () => <BrandImg file="javascriptIcon.svg" />,
  react: () => <SiReact color="#61DAFB" size={ICON} />,
  next: () => <SiNextdotjs color="#000000" size={ICON} />,
  vite: () => <BrandImg file="viteIcon.svg" />,
  tailwind: () => <SiTailwindcss color="#06B6D4" size={ICON} />,
  zustand: () => <BrandImg file="zustandIcon.svg" />,
  tanstack: () => <BrandImg file="tanstackIcon.svg" />,
  rhf: () => <BrandImg file="reactHookFormIcon.svg" />,
  zod: () => <BrandImg file="zodIcon.svg" />,
  html: () => <BrandImg file="htmlIcon.svg" />,
  css: () => <BrandImg file="cssIcon.svg" />,
  i18n: () => <Translate color="#5B8DEF" size={ICON} weight="regular" />,
  seo: () => <MagnifyingGlass color="#2E7D32" size={ICON} weight="regular" />,
  designSystem: () => (
    <SquaresFour color="#7B61FF" size={ICON} weight="regular" />
  ),
  expo: () => <SiExpo color="#000020" size={ICON} />,
  android: () => <BrandImg file="androidIcon.svg" />,
  ios: () => <BrandImg file="iosIcon.svg" />,
  androidStudio: () => <BrandImg file="androidStudio.svg" />,
  xcode: () => <BrandImg file="xCodeIcon.svg" />,
  deepLink: () => <Link color="#1565C0" size={ICON} weight="regular" />,
  push: () => <Bell color="#E65100" size={ICON} weight="regular" />,
  firebase: () => <BrandImg file="firebaseIcon.svg" />,
  figma: () => <BrandImg file="figmaIcon.svg" />,
  git: () => <SiGit color="#F05032" size={ICON} />,
  github: () => <GithubLogo color="#181717" size={ICON} weight="regular" />,
  postman: () => <SiPostman color="#FF6C37" size={ICON} />,
  jwt: () => <SiJsonwebtokens color="#000000" size={ICON} />,
  node: () => <SiNodedotjs color="#5FA04E" size={ICON} />,
  express: () => <SiExpress color="#000000" size={ICON} />,
  mysql: () => <SiMysql color="#4479A1" size={ICON} />,
  jira: () => <SiJira color="#0052CC" size={ICON} />,
  analytics: () => <SiGoogleanalytics color="#E37400" size={ICON} />,
  scrum: () => <Kanban color="#0052CC" size={ICON} weight="regular" />,
};
