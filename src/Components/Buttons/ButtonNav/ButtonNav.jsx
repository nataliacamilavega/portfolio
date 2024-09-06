import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Style

const ButtonNav = ({
  text,
  bgColor,
  icon,
  link,
  setterSection,
  sectionSelected,
  dialog,
  titleDialog,
  textDialog,
  setterModal,
  openModal,
  setterTitleDialog,
  setterTextDialog,
  setterMenu,
  stateMenu,
}) => {
  const ButtonNav = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 8px;
    border-radius: 100px;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    flex-grow: 1;
    min-width: fit-content;
    color: ${(props) => props.theme.mode.colors.text};

    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.mode.colors.bgNavBar};

    &:hover {
      background-color: ${(propsTheme) => propsTheme.theme.mode.colors.lightGrey};
    }

    &.selected {
      color: ${(props) => props.theme.mode.colors[`darker` + bgColor]};
      background-color: ${(propsTheme) => propsTheme.theme.mode.colors[`light` + bgColor]};
    }
  `
  const LinkButton = styled.div`
    textdecoration: none;

    width: 100%;
    height: 52px;
  `
  const onClickFx = () => {
    link && setterSection(link)
    if (window.innerWidth < 960) {
      setterMenu(!stateMenu)
    }
    const dialogSetter = () => {
      setterModal(!openModal)
      setterTitleDialog(titleDialog)
      setterTextDialog(textDialog)
    }

    dialog && dialogSetter()
  }
  const changeState = () => {
    if (link) {
      return sectionSelected === link ? `selected` : ``
    }

    return
  }

  return (
    <LinkButton>
      <Link
        style={{
          textDecoration: `none`,

          width: `100%`,
          height: `100%`,
        }}
        to={link}
      >
        <ButtonNav className={changeState()} onClick={() => onClickFx()}>
          {icon}
          <p>{text}</p>
        </ButtonNav>
      </Link>
    </LinkButton>
  )
}

export default ButtonNav
