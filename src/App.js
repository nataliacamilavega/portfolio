import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Theme from './Components/Theme/Theme'
import Loader from './Components/Loader/Loader'
import AboutMe from './Components/AboutMe/AboutMe'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Studys from './Components/Studys/Studys'
import Habilities from './Components/Habilities/Habilities'
import Contact from './Components/Contacto/Contact'
import Projects from './Components/Projects/Projects'
import Modal from './Components/Modal/Modal'

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${(props) => props.theme.mode.colors.background};
  }

  
`

const App = () => {
  // Modal
  const [openModal, setOpenModal] = useState(false)
  const [titleDialog, setTitleDialog] = useState(``)
  const [textDialog, setTextDialog] = useState(``)

  //Menu
  const [openMenu, setStateMenu] = useState(false)
  // CAmbios dinamicos de Loader
  const [heightDynamic, setheightDynamic] = useState(`100px`)
  const [valueTop, setValueTop] = useState(0)
  // STYLED COMPONENTS
  const App = styled.div`
    width: 100%;

    ${openMenu ? `height:100vh` : `min-height: 100vh`};
    ${openMenu ? `overflow-y:hidden` : `overflow-y:unset`};
    color: ${(props) => props.theme.mode.colors.text};
    background-color: ${(props) => props.theme.mode.colors.background};
    ${openMenu ? `position: relative` : `position: static`};
    .backdropFilterMenu {
      ${openMenu
        ? `position: absolute;
        top: 0;
        left: 0;
        background-color: #ffffff00;
        backdrop-filter: blur(1.5px);
        width: 100%;
        height: 100%`
        : `display: none`}
    }
  `

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
  `
  const Main = styled.main`
    width: 100%;
    min-height: ${heightDynamic};
    height: ${heightDynamic === `100vh` ? `auto` : `100px`};
    overflow-y: ${heightDynamic === `100vh` ? `visible` : `hidden`};
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
  `

  // UseEffect para Loader
  useEffect(() => {
    setTimeout(() => {
      setheightDynamic(`100vh`)
      // Cambio de value Top del loader LoaderContainer. Se va sumando de
      // a 1 vh cada cierto tiempo generando el efecto que se desliza hacia arriba
      for (let i = 0; i < 180; i++) {
        const valueTop = i++

        setTimeout(() => {
          setValueTop(`-` + valueTop + `vh`)
        }, i * 10)
      }
    }, 3000)
  }, [])

  return (
    <Theme>
      <GlobalStyle />
      <App>
        {/* backdrop filter for menu */}
        <div className="backdropFilterMenu" onClick={() => setStateMenu(!openMenu)} />
        {/* Loader dinamico */}
        <Loader valueTop={valueTop} />
        <Modal
          openModal={openModal}
          setterModal={setOpenModal}
          textDialog={textDialog}
          titleDialog={titleDialog}
        />
        <BrowserRouter>
          <Header>
            <NavBar
              openMenu={openMenu}
              openModal={openModal}
              setterMenu={setStateMenu}
              setterModal={setOpenModal}
              setterText={setTextDialog}
              setterTitle={setTitleDialog}
              textDialog={textDialog}
              titleDialog={titleDialog}
            />
          </Header>
          <Main>
            <Routes>
              <Route exact element={<AboutMe />} path="/" />
              <Route exact element={<Studys />} path="/studys" />
              <Route exact element={<Habilities />} path="/habilities" />
              <Route exact element={<Projects />} path="/projects" />
              <Route exact element={<Contact />} path="/contact" />
            </Routes>
          </Main>
          <Footer />
        </BrowserRouter>
      </App>
    </Theme>
  )
}

export default App
