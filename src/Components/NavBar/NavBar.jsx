// React imports
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
// Style
import styled, {useTheme} from "styled-components";
// iconos
import {
  MdInfoOutline,
  MdOutlineFileDownload,
  MdOutlineFolderSpecial,
  MdOutlinePsychology,
  MdOutlineSchool,
  MdOutlineContactSupport,
} from "react-icons/md";
import { CgClose, CgMenu } from "react-icons/cg";
import ButtonNav from "../Buttons/ButtonNav/ButtonNav";
import SwitchMode from "../Buttons/ButtonNav/switchMode";
import DropDown from "../Dropdown/DropDown";

const NavBar = ({
  setterText,
  setterTitle,
  setterModal,
  openModal,
  setterMenu,
  openMenu,
}) => {
  const location = useLocation();

  const [sectionSelected, setSectionSelected] = useState(location.pathname);

  const Nav = styled.nav`
    width: 100%;
    max-width: 1400px;
    height: 52px;
    display: flex;
    background: ${(props) => props.theme.mode.colors.bgNavBar};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    gap: 24px;
    position: fixed;
    z-index: 3000;
    width:calc(100% - 92px - 92px);
    
    @media (max-width: 1280px) {
      width:calc(100% - 100px);
      
    }
    @media (max-width: 960px) {
      width: ${openMenu ? `50%` : `56px`};
      height: ${openMenu ? `calc(100vh - 32px)` : `56px`};
      flex-direction: column;
      border-radius: 50px;
      padding-bottom: ${openMenu ? `52px` : `0`};
      justify-content: ${openMenu ? `start` : `center`};
    }
    @media (max-width: 500px) {
      max-width: ${openMenu ? `calc(100% - 32px)` : `56px`};
      width: ${openMenu ? `100%` : `56px`};
    }
  `;
  const MenuIconContainer = styled.div`
    display: none;
    @media (max-width: 960px) {
      display: flex;
      font-size: 24px;
      justify-content: ${openMenu ? `flex-end` : `center`};
      align-items: ${openMenu ? `flex-end` : `center`};
      width: 100%;
      height: ${openMenu ? `56px` : `100%`};
      padding: ${openMenu ? `24px 32px 0 32px` : `8px`};

      cursor: pointer;
    }
  `;
  const ButtonNavContainer = styled.div`
    width: calc(100% - 60px);
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 960px) {
      display: ${openMenu ? `flex` : `none`};
      width: 100%;
      flex-direction: column;
    }
  `;
  // Para cambiar el idioma y usar el theme fuera de styled components
  const theme = useTheme();
  // Array de objetos de botones
  const buttonsNav = [
    {
      bgColor: `Purple`,
      text: theme.lang.navBar.p1,
      icon: <MdInfoOutline />,
      link: `/`,
      id: `aboutme`,
    },
    {
      bgColor: "Yellow",
      text: theme.lang.navBar.p2,
      icon: <MdOutlineSchool />,
      link: `/studys`,
      id: `studys`,
    },
    {
      bgColor: "Green",
      text: theme.lang.navBar.p3,
      icon: <MdOutlinePsychology />,
      link: `/habilities`,
      id: `habilities`,
    },
    {
      bgColor: "Blue",
      text: theme.lang.navBar.p4,
      icon: <MdOutlineFolderSpecial />,
      link: `/projects`,
      id: `projects`,
    },
    {
      bgColor: "Pink",
      text: theme.lang.navBar.p5,
      icon: <MdOutlineContactSupport />,
      link: `/contact`,
      id: `contact`,
    },
    {
      bgColor: "Pink",
      text: theme.lang.navBar.p6,
      icon: <MdOutlineFileDownload />,
      href: "cv.pdf",
      id: `resume`,
      titleDialog: theme.lang.modal.title,
      textDialog: theme.lang.modal.text,
      dialog: `true`,
    },
  ];
  // Renderizado de botones
  const renderButtons = buttonsNav.map((button, index) => (
    <ButtonNav
      bgColor={button.bgColor}
      text={button.text}
      icon={button.icon}
      key={`ButtonNav` + index}
      link={button.link}
      id={button.id}
      dialog={button.dialog}
      sectionSelected={sectionSelected}
      setterTextDialog={setterText}
      setterTitleDialog={setterTitle}
      setterSection={setSectionSelected}
      setterModal={setterModal}
      openModal={openModal}
      titleDialog={button.titleDialog}
      textDialog={button.textDialog}
      setterMenu={setterMenu}
      stateMenu={openMenu}
    ></ButtonNav>
  ));

  return (
    <Nav>
      <MenuIconContainer
        className="closeMenu"
        onClick={() => setterMenu(!openMenu)}
      >
        {openMenu ? <CgClose /> : <CgMenu />}
      </MenuIconContainer>
      <ButtonNavContainer>{renderButtons}</ButtonNavContainer>
      {/* Cambiar width calc(100% - 60px) en ButtonNavContainer */}
      <SwitchMode stateMenu={openMenu}></SwitchMode>
      <DropDown stateMenu={openMenu}></DropDown>
    </Nav>
  );
};

export default NavBar;
