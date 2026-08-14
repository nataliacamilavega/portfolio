import { useEffect, useRef } from "react";
import styled from "styled-components";
import { X } from "@phosphor-icons/react";

const Container = styled.article`
  background: ${(props) => props.theme.mode.colors.bgNavBar};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  position: fixed;
  top: 112px;
  right: 72px;
  border-radius: 16px;
  box-shadow:
    1px 1px 6px rgba(0, 0, 0, 0.15),
    1px 4px 4px rgba(0, 0, 0, 0.2);
  padding: 24px;
  max-width: 400px;
  & p {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 960px) {
    top: 100px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    height: fit-content;
    max-height: 75vh;
    width: 90%;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  img {
    width: 240px;
    box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.2));
    border-radius: 7px;
  }
  a {
    color: ${(props) => props.theme.mode.colors.text};
    word-break: break-all;
  }
`;
const Status = styled.p`
  font-weight: 500;
  margin: 0;
`;
const PlanItem = styled.p`
  text-align: left !important;
  font-size: 14px;
  line-height: 1.4;
  white-space: normal !important;
`;
const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  font-size: 24px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: inherit;
  align-self: flex-end;
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
`;

const StudyDisplay = ({
  infoStudySelected,
  setterStudySelected,
  certificateP,
  projectP,
  gotoP,
  instituteP,
  planTitle,
  closeLabel,
}) => {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === `Escape`) setterStudySelected(undefined);
    };

    window.addEventListener(`keydown`, onKeyDown);
    return () => window.removeEventListener(`keydown`, onKeyDown);
  }, [setterStudySelected]);

  return (
    <Container
      aria-label={infoStudySelected.degree}
      aria-modal="true"
      role="dialog"
    >
      <CloseButton
        ref={closeRef}
        aria-label={closeLabel}
        type="button"
        onClick={() => setterStudySelected(undefined)}
      >
        <X aria-hidden="true" />
      </CloseButton>
      {infoStudySelected.status && <Status>{infoStudySelected.status}</Status>}
      {infoStudySelected.progress && <p>{infoStudySelected.progress}</p>}
      {infoStudySelected.instituteLink && (
        <Div>
          <p>{instituteP}</p>
          <a
            href={infoStudySelected.instituteLink}
            rel="noreferrer"
            target="_blank"
          >
            {infoStudySelected.instituteLink
              .replace(/^https?:\/\//, "")
              .replace(/\/$/, "")}
          </a>
        </Div>
      )}
      {infoStudySelected.studyPlan && (
        <Div>
          <p>{infoStudySelected.planTitle || planTitle}</p>
          {infoStudySelected.studyPlan.map((item) => (
            <PlanItem key={item}>{item}</PlanItem>
          ))}
        </Div>
      )}
      {infoStudySelected.credential && (
        <Div>
          <p>{certificateP}</p>
          <img
            alt={`${certificateP} ${infoStudySelected.degree}`}
            src={`/assets/certificates/` + infoStudySelected.credential}
          />
        </Div>
      )}
      {infoStudySelected.project && (
        <Div>
          <p>{projectP}</p>
          <img
            alt={`${projectP} ${infoStudySelected.degree}`}
            src={`/assets/project-cover/` + infoStudySelected.project}
          />
          {infoStudySelected.link && (
            <p>
              {gotoP}:{" "}
              <a href={infoStudySelected.link} rel="noreferrer" target="_blank">
                {infoStudySelected.link}
              </a>
            </p>
          )}
        </Div>
      )}
    </Container>
  );
};

export default StudyDisplay;
