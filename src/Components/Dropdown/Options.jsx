// Style
import styled from 'styled-components'
const Options = ({ text, img, icon, id, setterLanguage }) => {
  const ButtonOption = styled.button`
    border: none;
    display: flex;
    gap: 4px;

    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    font-variant: all-small-caps;

    align-items: center;
    justify-content: center;

    padding: 0 16px;
    height: 52px;
    width: 90px;
    border-radius: 100px;
    background-color: '';

    cursor: pointer;
    color: ${(props) => props.theme.mode.colors.text};

    background: ${(props) => props.theme.mode.colors.bgNavBar};

    @media (max-width: 960px) {
      width: 100%;
    }
    &:hover {
      background-color: ${(propsTheme) => propsTheme.theme.mode.colors.lightGrey};
    }
  `

  return (
    <ButtonOption onClick={() => id && setterLanguage(id)}>
      <img alt="" src={`assets/icons/` + img} width={`20px`} />
      {text}
      {icon}
    </ButtonOption>
  )
}

export default Options
