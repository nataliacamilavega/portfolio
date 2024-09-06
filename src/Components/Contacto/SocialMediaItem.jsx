import styled from 'styled-components'

const SocialMediaItem = ({ icon, scname, link }) => {
  const ItemContainer = styled.div`
    display: flex;
    gap: 8px;
    flex: 0 0 230px;
  `
  const P = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.mode.colors.text};
    }
  `

  return (
    <ItemContainer>
      {icon}
      <P>
        <a href={link}>{scname}</a>
      </P>
    </ItemContainer>
  )
}

export default SocialMediaItem
