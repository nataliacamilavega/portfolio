import { useState, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { MdKeyboardArrowDown } from 'react-icons/md'

import Options from './Options'

const DropDown = ({ stateMenu }) => {
  const [dropdown, setDropdown] = useState(false)

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 960px) {
      display: ${stateMenu ? `flex` : `none`};
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  `
  const OptionsContainer = styled.div`
    background-color: ${(propsTheme) => propsTheme.theme.mode.colors.bgNavBar};
    display: ${dropdown ? `flex` : `none`};
    flex-direction: column;
    position: absolute;
    top: 56px;
    width: 100%;
    border-radius: 7px;
  `

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
  ]

  //Fx para setear en el localStorage el mode
  const themeContext = useContext(ThemeContext)

  const setLanguage = (id) => {
    themeContext.setLangSelected(id)
    window.localStorage.setItem(`localLanguage`, id)
  }
  // Renderizado de options
  const renderOptions = languageSettings.map((option) => (
    <Options
      key={option.id}
      id={option.id}
      img={option.img}
      setterLanguage={setLanguage}
      text={option.text}
    />
  ))

  const renderSelected = () => {
    const selected = languageSettings.find((lang) => lang.id === themeContext.langSelected)

    return (
      <Options
        key={selected.id}
        icon={<MdKeyboardArrowDown />}
        id={selected.id}
        img={selected.img}
        text={selected.text}
      />
    )
  }

  const fxOnclick = () => {
    setDropdown(!dropdown)
  }

  return (
    <Container onClick={() => fxOnclick()}>
      {themeContext.langSelected && renderSelected()}
      {/* Contenedor de opciones */}
      <OptionsContainer>{renderOptions}</OptionsContainer>
    </Container>
  )
}

export default DropDown
