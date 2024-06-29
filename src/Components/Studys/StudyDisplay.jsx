// React
import React from "react";

// Style
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
const StudyDisplay = ({
  infoStudySelected,
  setterStudySelected,
  certificateP,
  projectP,
  gotoP,
}) => {
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
    max-height: 500px;
    height: 70vh;
    position: fixed;
    right: 72px;
    border-radius: 16px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15), 1px 4px 4px rgba(0, 0, 0, 0.2);
    padding: 24px;
    max-width: 400px;
    & p {
      width: 100%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @media (max-width: 960px) {
        width: 250px;
      }
    }
    @media (max-width: 960px) {
      top: 100px;
      right: unset;
      position: fixed;
      height: fit-content;
      width: 90%;
    }
  `;
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 100%;
    img {
      width: 240px;

      box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.15);
      filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.2));
      border-radius: 7px;
      @media (max-width: 960px) {
        width: 240px;
      }
    }
  `;
  return (
    <Container>
      <div
        style={{
          display: `flex`,
          justifyContent: `flex-end`,
          fontSize: `24px`,
          cursor: `pointer`,
        }}
      >
        <MdOutlineClose onClick={() => setterStudySelected(undefined)} />
      </div>
      <Div>
        <p>{certificateP}</p>
        <img
          src={`assets/` + infoStudySelected.credential}
          alt={`certificado de` + infoStudySelected.degree}
        />
      </Div>
      <Div>
        <p>{projectP}</p>
        <img src={`assets/` + infoStudySelected.project} alt="Proyecto" />
        <p>
          {gotoP}:
          <a href={infoStudySelected.link} target="_blank">
            {infoStudySelected.link}
          </a>
        </p>
      </Div>
    </Container>
  );
};

export default StudyDisplay;
