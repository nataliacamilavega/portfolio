import styled, { keyframes } from "styled-components";

import DynamicSkills from "./DynamicSkills";

const infiniteLoop = keyframes`
  to {
    background-position: 1500px;
  }
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.mode.loaderAnimated.bgColor};
  position: absolute;
  z-index: 5000;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
`;

const Section = styled.section`
  background: url(/assets/custom/${(props) => props.theme.mode.loaderAnimated.vectorAnimated})
    repeat-x;
  width: 100%;
  height: 100%;
  background-size: 1500px 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Convergence", sans-serif;
  animation: ${infiniteLoop} 10s linear infinite;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  .avatarImg {
    opacity: ${(props) => props.theme.mode.gifImg};
    height: 500px;
    align-self: end;
    @media (max-width: 500px) {
      align-self: center;
      height: 400px;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const Brand = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  color: ${(props) => props.theme.mode.loaderAnimated.text1};
  font-size: 32px;
  span {
    color: ${(props) => props.theme.mode.loaderAnimated.text2};
    font-size: 24px;
  }
`;

const PushDiv = styled.div`
  height: 500px;
  width: 333px;
`;

const Loader = () => (
  <LoaderContainer aria-hidden="true">
    <Section>
      <img alt="" className="avatarImg" src="/assets/custom/avatar.webp" />
      <TextContainer>
        <Brand>
          Natalia Vega
          <span>portfolio</span>
        </Brand>
        <DynamicSkills />
      </TextContainer>
      <PushDiv />
    </Section>
  </LoaderContainer>
);

export default Loader;
