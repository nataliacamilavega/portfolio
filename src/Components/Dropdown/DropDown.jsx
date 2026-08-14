import { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { CaretDown } from "@phosphor-icons/react";

import Options from "./Options";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
  height: 52px;
  justify-content: center;
  @media (max-width: 960px) {
    display: ${(props) => (props.$open ? `flex` : `none`)};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
  }
`;
const OptionsContainer = styled.div`
  background-color: ${(propsTheme) => propsTheme.theme.mode.colors.bgNavBar};
  display: ${(props) => (props.$open ? `flex` : `none`)};
  flex-direction: column;
  position: absolute;
  top: 56px;
  width: 100%;
  border-radius: 7px;
`;

const languageSettings = [
  {
    text: `ES`,
    img: `spanish.svg`,
    id: `ES`,
  },
  {
    text: `EN`,
    img: `english.svg`,
    id: `EN`,
  },
];

const DropDown = ({ stateMenu }) => {
  const [dropdown, setDropdown] = useState(false);
  const themeContext = useContext(ThemeContext);

  const setLanguage = (id) => {
    themeContext.setLangSelected(id);
    window.localStorage.setItem(`localLanguage`, id);
    setDropdown(false);
  };

  const selected = languageSettings.find(
    (lang) => lang.id === themeContext.langSelected,
  );

  return (
    <Container $open={stateMenu}>
      {selected && (
        <Options
          expanded={dropdown}
          icon={<CaretDown aria-hidden="true" />}
          id={selected.id}
          img={selected.img}
          text={selected.text}
          onPick={() => setDropdown((open) => !open)}
        />
      )}
      <OptionsContainer $open={dropdown}>
        {languageSettings.map((option) => (
          <Options
            key={option.id}
            id={option.id}
            img={option.img}
            text={option.text}
            onPick={() => setLanguage(option.id)}
          />
        ))}
      </OptionsContainer>
    </Container>
  );
};

export default DropDown;
