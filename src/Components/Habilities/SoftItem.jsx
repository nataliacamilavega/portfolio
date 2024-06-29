import React from "react";

// Style
import Theme from "../Theme/Theme";
import styled, { css, keyframes } from "styled-components";
import { BsStars } from "react-icons/bs";
const SoftItem = ({ thname, icon }) => {
  const Container = styled.div`
    width: 200px;

    display: flex;
    gap: 8px;
    align-items: center;
  `;
  const P = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    font-variant: all-small-caps;
    padding: 0 8px;
    
  `;
  return (
    <Container>
      <BsStars style={{color: `#ffc107`}}/>
      <P>{thname}.</P>
    </Container>
  );
};

export default SoftItem;
