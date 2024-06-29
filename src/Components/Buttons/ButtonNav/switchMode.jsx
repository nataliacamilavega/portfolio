// React imports
import React, { useContext } from "react";

// Style
import styled, { ThemeContext } from "styled-components";

const SwitchMode = ({ stateMenu }) => {
  const Contenedor = styled.div`
    margin: 0 16px;
    background-color: ${(props) => props.theme.mode.switchStyle.contenedorBgC};
    width: 60px;
    height: 20px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.theme.mode.switchStyle.contenedorJC};
    padding: 1px 3px;
    position: relative;
    cursor: pointer;
    transition: all 5s linear;
    overflow: hidden;
    min-width: 24px;

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;

      background: url(${(props) => props.theme.mode.switchStyle.bgURL});

      transition: background 5s linear;
    }
    @media (max-width: 960px) {
      display: ${stateMenu ? `flex` : `none`};
      
    }
  `;
  const MoonSun = styled.div`
    background-color: ${(props) => props.theme.mode.switchStyle.msColor};
    box-shadow: ${(props) => props.theme.mode.switchStyle.msBS};

    border-radius: 100px;
    width: 16px;
    height: 16px;
    position: relative;
    transition: all 5s linear;

    &:after {
      content: "";
      position: ${(props) => props.theme.mode.switchStyle.msAfterP};
      width: 10px;
      height: 10px;
      background-color: #1f2533;
      border-radius: 100px;
      top: calc(50% - 8px);

      right: -2px;
      transition: all 5s linear;
    }
  `;

  //Fx para setear en el localStorage el mode
  const themeContext = useContext(ThemeContext);

  const setterThemeMode = () => {
    const localMode = themeContext.themeMode === `light` ? `dark` : `light`;
    themeContext.setThemeMode(localMode);
    window.localStorage.setItem(`themeMode`, localMode);
  };

  const fxOnclick = () => {
    setterThemeMode();
  };
  return (
    <Contenedor
      onClick={() => {
        fxOnclick();
      }}
    >
      <MoonSun></MoonSun>
    </Contenedor>
  );
};

export default SwitchMode;
