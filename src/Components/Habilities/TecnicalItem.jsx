import styled from 'styled-components'

const TecnicalItem = ({ thname, icon, mono }) => {
  const Container = styled.div`
    height: auto;
    min-height: 56px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 0 1 64px;
    align-items: center;
    .skillIcon {
      font-size: 28px;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      img,
      svg {
        width: 28px;
        height: 28px;
        object-fit: contain;
      }
    }
    .mono {
      filter: ${(props) => props.theme.mode.filterInvert};
    }
  `
  const P = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    max-width: 72px;
  `

  return (
    <Container>
      <span
        aria-hidden="true"
        className={mono ? `skillIcon mono` : `skillIcon`}
      >
        {icon}
      </span>
      <P>{thname}</P>
    </Container>
  )
}

export default TecnicalItem
