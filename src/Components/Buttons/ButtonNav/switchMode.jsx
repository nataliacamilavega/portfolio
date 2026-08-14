import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const Contenedor = styled.button`
  flex-shrink: 0;
  margin: 0 8px;
  border: none;
  background: transparent;
  min-width: 44px;
  min-height: 44px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.mode.colors.text};
    outline-offset: 2px;
    border-radius: 100px;
  }

  @media (max-width: 960px) {
    display: ${(props) => (props.$open ? `flex` : `none`)};
  }
`;

const Track = styled.span`
  background-color: ${(props) => props.theme.mode.switchStyle.contenedorBgC};
  width: 60px;
  height: 20px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.theme.mode.switchStyle.contenedorJC};
  padding: 1px 3px;
  position: relative;
  overflow: hidden;
  transition: all 0.25s linear;
  pointer-events: none;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: url(${(props) => props.theme.mode.switchStyle.bgURL});
    transition: background 0.25s linear;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:after {
      transition: none;
    }
  }
`;

const MoonSun = styled.span`
  background-color: ${(props) => props.theme.mode.switchStyle.msColor};
  box-shadow: ${(props) => props.theme.mode.switchStyle.msBS};
  clip-path: circle(50% at 50% 50%);
  border-radius: 100px;
  width: 16px;
  height: 16px;
  position: relative;
  z-index: 1;
  transition: all 0.25s linear;

  &:after {
    content: "";
    position: ${(props) => props.theme.mode.switchStyle.msAfterP};
    width: 10px;
    height: 10px;
    background-color: #1f2533;
    border-radius: 100px;
    top: calc(50% - 8px);
    right: -2px;
    transition: all 0.25s linear;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:after {
      transition: none;
    }
  }
`;

const SwitchMode = ({ stateMenu }) => {
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext.themeMode === `dark`;

  return (
    <Contenedor
      $open={stateMenu}
      aria-label={
        isDark
          ? themeContext.lang.navBar.themeLight
          : themeContext.lang.navBar.themeDark
      }
      aria-pressed={isDark}
      type="button"
      onClick={() => {
        const localMode = isDark ? `light` : `dark`;
        themeContext.setThemeMode(localMode);
        window.localStorage.setItem(`themeMode`, localMode);
      }}
    >
      <Track>
        <MoonSun />
      </Track>
    </Contenedor>
  );
};

export default SwitchMode;
