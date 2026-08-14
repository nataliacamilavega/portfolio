import styled from "styled-components";
import { CaretRight } from "@phosphor-icons/react";

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
  studyPlan,
  instituteLink,
  status,
}) => {
  const Container = styled.div`
    display: flex;
    gap: 24px;
    min-height: 140px;
    height: auto;
    align-items: center;
    @media (max-width: 720px) {
      width: 100%;
      gap: 24px;
    }
    @media (max-width: 570px) {
      width: 100%;
      min-height: unset;
      gap: 24px;
    }
  `;
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
  `;
  const StudyInfoContainer = styled.button`
    display: flex;
    gap: 8px;
    background-color: ${(props) => props.theme.mode.colors.lighterYellow};
    border-radius: 7px;
    border: none;
    font: inherit;
    color: inherit;
    text-align: left;
    min-width: 420px;
    height: auto;
    min-height: 100px;
    padding: 16px;

    align-items: center;
    cursor: pointer;
    &:disabled {
      cursor: default;
      opacity: 1;
    }
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
      text-align: center;
    }
  `;
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 280px;
    @media (max-width: 570px) {
      width: 100%;
      text-align: center;
    }
  `;
  const H3 = styled.h3`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    white-space: normal;
  `;
  const H4 = styled.h4`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.3;
  `;
  const DateP = styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding: 16px 0;
  `;
  const Italic = styled.span`
    font-style: italic;
  `;
  const Divider = styled.div`
    height: 100%;
    width: 3px;
    border-radius: 5px;
    background-color: ${(propsTheme) => propsTheme.theme.mode.colors.darkYellow};
  `;

  const hasDetails = Boolean(
    project || credential || studyPlan || instituteLink,
  );
  const activateDisplay = () => {
    hasDetails ? setterStudySelected(degree) : setterStudySelected(undefined);
  };

  return (
    <Container>
      <DateLine>
        {finishDate && <DateP>{finishDate}</DateP>}
        <Divider />
        {startDate && <DateP>{startDate}</DateP>}
      </DateLine>
      <StudyInfoContainer
        disabled={!hasDetails}
        style={hasDetails ? { cursor: "pointer" } : { cursor: "default" }}
        type="button"
        onClick={() => activateDisplay()}
      >
        <img
          alt={`Logo de ${school}`}
          className="imgLogo"
          src={`/assets/logos/` + schoolLogo}
        />
        <TextContainer>
          <H3>{school}</H3>
          <H4>
            {degree}
            {status && <Italic> - {status}</Italic>}
            {grade && (
              <Italic>
                {" "}
                - {gradeP}: {grade}
              </Italic>
            )}
          </H4>
        </TextContainer>
        {hasDetails && <CaretRight className="arrowRight" size={24} />}
      </StudyInfoContainer>
    </Container>
  );
};

export default StudyItem;
