import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'

const StudyItem = ({
  school,
  schoolLogo,
  degree,
  grade,
  credential,
  project,
  startDate,
  finishDate,
  setterStudySelected,
  gradeP,
}) => {
  const Container = styled.div`
    display: flex;
    gap: 24px;
    height: 180px;
    align-items: center;
    @media (max-width: 720px) {
      width: 100%;
      gap: 24px;
    }
    @media (max-width: 570px) {
      width: 100%;
      height: 300px;
      gap: 24px;
    }
  `
  const DateLine = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    height: 100%;
    width: 58px;
    @media (max-width: 570px) {
      align-items: start;
      width: 3px;
    }
  `
  const StudyInfoContainer = styled.div`
    display: flex;
    gap: 8px;
    background-color: ${(props) => props.theme.mode.colors.lighterYellow};
    border-radius: 7px;
    min-width: 420px;
    height: 100px;
    padding: 16px;

    align-items: center;
    cursor: pointer;
    .imgLogo {
      border-radius: 7px;
      width: 68px;
      height: 68px;
      object-fit: cover;
      object-position: center;
    }
    .arrowRight {
      color: ${(props) => props.theme.mode.colors.darkYellow};
      font-size: 24px;

      @media (max-width: 570px) {
        transform: rotate(90deg);
      }
    }

    @media (max-width: 960px) {
      min-width: 320px;
    }
    @media (max-width: 570px) {
      min-width: 200px;
      width: calc(300px - 24px - 8px);
      height: fit-content;
      flex-direction: column;
    }
  `
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 270px;
    @media (max-width: 570px) {
      width: 100%;
      text-align: center;
    }
  `
  const H3 = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  `
  const H4 = styled.h4`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 14x;
  `
  const DateP = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding: 16px 0;
  `
  const Italic = styled.span`
    font-style: italic;
  `
  const Divider = styled.div`
    height: 100%;
    width: 3px;
    border-radius: 5px;
    background-color: ${(propsTheme) => propsTheme.theme.mode.colors.darkYellow};
  `

  const activateDisplay = () => {
    !project || !credential ? setterStudySelected(undefined) : setterStudySelected(degree)
  }

  return (
    <Container>
      <DateLine>
        {finishDate && <DateP>{finishDate}</DateP>}
        <Divider />
        {startDate && <DateP>{startDate}</DateP>}
      </DateLine>
      <StudyInfoContainer
        onClick={() => activateDisplay()}
        style={project || credential ? { cursor: 'pointer' } : { cursor: 'default' }}
      >
        <img alt={`Logo` + school} className="imgLogo" src={`assets/logos/` + schoolLogo} />
        <TextContainer>
          <H3>{school}</H3>
          <H4>
            {degree}
            {grade && (
              <Italic>
                {' '}
                - {gradeP}: {grade}
              </Italic>
            )}
          </H4>
        </TextContainer>
        {(project || credential) && <IoIosArrowForward className="arrowRight" />}
      </StudyInfoContainer>
    </Container>
  )
}

export default StudyItem
