import React from "react";

// Style
import Theme from "../Theme/Theme";
import styled, { css, keyframes } from "styled-components";

const tecnicalItem = ({ thname, icon }) => {
  const Container = styled.div`
    height: 96px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 0 1 80px;
    align-items: center;
    img {
      max-height: 54px;
    }
    .filter {
      filter: ${(props) => props.theme.mode.filterInvert};
    }
  `;
  const P = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    font-variant: all-small-caps;
    padding: 0 8px;
    text-align: center;
  `;
  const equalTo = (value, skill) => {
    return value == skill;
  };
  return (
    <Container>
      <img
        src={`assets/` + icon}
        alt={`imagen de` + thname}
        className={
          equalTo(thname, `github`) ||
          equalTo(thname, `git`) ||
          equalTo(thname, `styled components`)
            ? `filter`
            : ``
        }
      />
      <P>{thname}</P>
    </Container>
  );
};

export default tecnicalItem;
