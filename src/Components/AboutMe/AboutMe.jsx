import React from "react";

// Style
import styled, { keyframes, useTheme } from "styled-components";

const AboutMe = () => {
  // Para cambiar el idioma y usar el theme fuera de styled components
  const theme = useTheme();

  // Nubes moviiendose hacia la derecha
  const infiniteLoop = keyframes`
    to {
    background-position: 1500px;
    }
    `;
  const Container = styled.section`
    width: 100%;
    padding-top: 92px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (max-width: 960px) {
      padding: 16px;
      padding-bottom: 56px;
      padding-top: 56px;
    }
  `;

  const BgImg = styled.div`
    background-color: ${(propsTheme) =>
      propsTheme.theme.mode.bgAnimated.bgColor};
    clip-path: circle(50% at 50% 50%);
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-basis: 250px;
    background-size: 1500px 100%;
    position: relative;

    &:after {
      content: "";
      background: url(assets/${(propsTheme) =>
          propsTheme.theme.mode.bgAnimated.vectorAnimated})
        repeat-x;
      background-size: 500px 250px;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      animation: ${infiniteLoop} 15s linear infinite;
    }
  `;

  const InfoContainer = styled.article`
    width: 100%;
    display: flex;
    gap: 24px;
    @media (max-width: 720px) {
      flex-direction: column;
      align-items: center;
    }
    & + p {
      text-align: center;
    }
  `;

  const Paragraph = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;
  const H2 = styled.h2`
    font-family: "Convergence";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: ${(propsTheme) => propsTheme.theme.mode.colors.purple};
  `;
  return (
    <Container>
      <H2>{theme.lang.aboutMe.h2}</H2>
      <InfoContainer>
        <BgImg>
          <img
            src="../../assets/cvPicture.png"
            alt=""
            style={{ width: `250px`, height: `250px` }}
          />
        </BgImg>
        <Paragraph>
          {theme.lang.aboutMe.p1}
          {theme.lang.aboutMe.p2}
          {theme.lang.aboutMe.p3}
        </Paragraph>
      </InfoContainer>
      {theme.lang.aboutMe.p4}
    </Container>
  );
};

export default AboutMe;
