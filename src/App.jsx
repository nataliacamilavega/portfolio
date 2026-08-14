import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle, useTheme } from "styled-components";

import Theme from "./Components/Theme/Theme";
import Loader from "./Components/Loader/Loader";
import AboutMe from "./Components/AboutMe/AboutMe";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Studys from "./Components/Studys/Studys";
import Habilities from "./Components/Habilities/Habilities";
import Contact from "./Components/Contacto/Contact";
import Projects from "./Components/Projects/Projects";
import Freelance from "./Components/Freelance/Freelance";
import Analytics from "./Components/Analytics/Analytics";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${(props) => props.theme.mode.colors.background};
  }

  :focus-visible {
    outline: 2px solid ${(props) => props.theme.mode.colors.text};
    outline-offset: 2px;
  }
`;

const Shell = styled.div`
  width: 100%;
  ${(props) => (props.$openMenu ? `height:100vh` : `min-height: 100vh`)};
  ${(props) => (props.$openMenu ? `overflow-y:hidden` : `overflow-y:unset`)};
  color: ${(props) => props.theme.mode.colors.text};
  background-color: ${(props) => props.theme.mode.colors.background};
  ${(props) => (props.$openMenu ? `position: relative` : `position: static`)};
  .backdropFilterMenu {
    ${(props) =>
      props.$openMenu
        ? `position: absolute;
        top: 0;
        left: 0;
        background-color: #ffffff00;
        backdrop-filter: blur(1.5px);
        width: 100%;
        height: 100%`
        : `display: none`}
  }
`;

const SkipToContent = styled.a`
  position: absolute;
  left: -9999px;
  top: 12px;
  z-index: 6000;
  padding: 10px 16px;
  background: ${(props) => props.theme.mode.colors.bgNavBar};
  color: ${(props) => props.theme.mode.colors.text};
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-decoration: none;

  &:focus {
    left: 16px;
    outline: 2px solid ${(props) => props.theme.mode.colors.text};
    outline-offset: 2px;
  }
`;

const SkipLink = () => {
  const theme = useTheme();

  return <SkipToContent href="#main">{theme.lang.navBar.skip}</SkipToContent>;
};

const Header = styled.header`
  width: 100%;
  height: fit-content;
  padding: 0 92px;
  padding-top: 32px;
  display: flex;
  justify-content: center;

  @media (max-width: 1280px) {
    padding: 32px 32px 0;
  }
  @media (max-width: 960px) {
    display: block;
    padding: 16px;
  }
`;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 0 122px;
  display: flex;
  flex-direction: column;
  gap: 72px;
  align-items: center;
  @media (max-width: 1280px) {
    padding: 0 56px;
  }
  @media (max-width: 500px) {
    padding: 0 24px;
  }
`;

const App = () => {
  const [openMenu, setStateMenu] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      `(prefers-reduced-motion: reduce)`,
    ).matches;
    if (reduceMotion) {
      setShowLoader(false);
      return;
    }
    const timeoutId = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Theme>
      <GlobalStyle />
      <Shell $openMenu={openMenu}>
        <SkipLink />
        <div
          className="backdropFilterMenu"
          onClick={() => setStateMenu(!openMenu)}
          onKeyDown={(event) => {
            if (event.key === `Enter` || event.key === ` `) {
              setStateMenu(!openMenu);
            }
          }}
          role="presentation"
        />
        {showLoader && <Loader />}
        <BrowserRouter>
          <Analytics />
          <Header>
            <NavBar openMenu={openMenu} setterMenu={setStateMenu} />
          </Header>
          <Main id="main">
            <Routes>
              <Route element={<AboutMe />} path="/" />
              <Route element={<Studys />} path="/studys" />
              <Route element={<Habilities />} path="/habilities" />
              <Route element={<Projects />} path="/projects" />
              <Route element={<Freelance />} path="/freelance" />
              <Route element={<Contact />} path="/contact" />
            </Routes>
          </Main>
          <Footer />
        </BrowserRouter>
      </Shell>
    </Theme>
  );
};

export default App;
