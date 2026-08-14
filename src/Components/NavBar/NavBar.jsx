import styled, { useTheme } from "styled-components";
import {
  Brain,
  Briefcase,
  ChatCircle,
  Folder,
  GraduationCap,
  Info,
  List,
  X,
} from "@phosphor-icons/react";

import ButtonNav from "../Buttons/ButtonNav/ButtonNav";
import SwitchMode from "../Buttons/ButtonNav/switchMode";
import DropDown from "../Dropdown/DropDown";

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
  width: calc(100% - 92px - 92px);

  @media (max-width: 1280px) {
    width: calc(100% - 100px);
  }
  @media (max-width: 960px) {
    width: ${(props) => (props.$open ? `50%` : `56px`)};
    height: ${(props) => (props.$open ? `calc(100vh - 32px)` : `56px`)};
    flex-direction: column;
    border-radius: 50px;
    padding-bottom: ${(props) => (props.$open ? `52px` : `0`)};
    justify-content: ${(props) => (props.$open ? `start` : `center`)};
  }
  @media (max-width: 500px) {
    max-width: ${(props) => (props.$open ? `calc(100% - 32px)` : `56px`)};
    width: ${(props) => (props.$open ? `100%` : `56px`)};
  }
`;

const MenuButton = styled.button`
  display: none;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  @media (max-width: 960px) {
    display: flex;
    font-size: 24px;
    justify-content: ${(props) => (props.$open ? `flex-end` : `center`)};
    align-items: ${(props) => (props.$open ? `flex-end` : `center`)};
    width: 100%;
    height: ${(props) => (props.$open ? `56px` : `100%`)};
    min-height: 44px;
    padding: ${(props) => (props.$open ? `24px 32px 0 32px` : `8px`)};
  }
  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.mode.colors.text};
    outline-offset: 2px;
  }
`;

const ButtonNavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;

  @media (max-width: 960px) {
    display: ${(props) => (props.$open ? `flex` : `none`)};
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

const NavBar = ({ setterMenu, openMenu }) => {
  const theme = useTheme();
  const buttonsNav = [
    {
      bgColor: `Purple`,
      text: theme.lang.navBar.p1,
      icon: <Info />,
      link: `/`,
      id: `aboutme`,
    },
    {
      bgColor: "Green",
      text: theme.lang.navBar.p3,
      icon: <Brain />,
      link: `/habilities`,
      id: `habilities`,
    },
    {
      bgColor: "Pink",
      text: theme.lang.navBar.p6,
      icon: <Briefcase />,
      link: `/freelance`,
      id: `freelance`,
    },
    {
      bgColor: "Yellow",
      text: theme.lang.navBar.p2,
      icon: <GraduationCap />,
      link: `/studys`,
      id: `studys`,
    },
    {
      bgColor: "Blue",
      text: theme.lang.navBar.p4,
      icon: <Folder />,
      link: `/projects`,
      id: `projects`,
    },
    {
      bgColor: "Pink",
      text: theme.lang.navBar.p5,
      icon: <ChatCircle />,
      link: `/contact`,
      id: `contact`,
    },
  ];

  return (
    <Nav $open={openMenu}>
      <MenuButton
        $open={openMenu}
        aria-expanded={openMenu}
        aria-label={
          openMenu ? theme.lang.navBar.menuOpen : theme.lang.navBar.menuClose
        }
        className="closeMenu"
        type="button"
        onClick={() => setterMenu(!openMenu)}
      >
        {openMenu ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
      </MenuButton>
      <ButtonNavContainer $open={openMenu}>
        {buttonsNav.map((button) => (
          <ButtonNav
            key={button.id}
            bgColor={button.bgColor}
            icon={button.icon}
            link={button.link}
            setterMenu={setterMenu}
            stateMenu={openMenu}
            text={button.text}
          />
        ))}
      </ButtonNavContainer>
      <SwitchMode stateMenu={openMenu} />
      <DropDown stateMenu={openMenu} />
    </Nav>
  );
};

export default NavBar;
