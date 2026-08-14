import styled from "styled-components";
import { Sparkle } from "@phosphor-icons/react";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: flex-start;
`;

const P = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.45;
  margin: 0;
`;

const SoftItem = ({ thname }) => (
  <Container>
    <Sparkle
      aria-hidden="true"
      style={{ color: `#ffc107`, flexShrink: 0, marginTop: `2px` }}
    />
    <P>{thname}</P>
  </Container>
);

export default SoftItem;
