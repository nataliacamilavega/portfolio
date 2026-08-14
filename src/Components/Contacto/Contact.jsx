import styled, { useTheme } from "styled-components";
import {
  BehanceLogo,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

import SocialMediaItem from "./SocialMediaItem";
const Contact = () => {
  // Para cambiar el idioma y usar el theme fuera de styled components
  const theme = useTheme();
  const Container = styled.section`
    width: 100%;

    padding-top: 32px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    padding-top: 92px;

    & img.avatarImg {
      opacity: ${(props) => props.theme.mode.gifImg};
      align-self: center;
      width: 350px;
      object-fit: cover;
      display: ${(props) => (props.theme.mode.gifImg === `0` ? `none` : `block`)};
      @media (max-width: 960px) {
        width: 250px;
      }
    }
    @media (max-width: 960px) {
      padding-top: 56px;
    }
  `;
  const ContactTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `;
  const H2 = styled.h1`
    font-family: "Convergence";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;

    color: ${(propsTheme) => propsTheme.theme.mode.colors.pink};
  `;
  const H3 = styled.h2`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
  `;
  const H4 = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    text-align: center;
  `;
  const SocialMediaContainer = styled.article`
    display: flex;
    flex-flow: row wrap;
    align-self: center;
    justify-content: space-between;
    gap: 16px;
    max-width: 480px;
    @media (max-width: 960px) {
      width: 100%;
    }
  `;
  const socialMediaCollection = [
    {
      scname: `nataliacamilavega`,
      icon: <GithubLogo />,
      link: `https://github.com/nataliacamilavega`,
    },
    {
      scname: `Natalia Camila Vega`,
      icon: <LinkedinLogo />,
      link: `https://www.linkedin.com/in/nataliacamilavega/`,
    },
    {
      scname: `nataliacamilav@gmail.com`,
      icon: <EnvelopeSimple />,
      link: `mailto:nataliacamilav@gmail.com`,
    },

    {
      scname: `nataliavega98`,
      icon: <BehanceLogo />,
      link: `https://www.behance.net/nataliavega98`,
    },
  ];
  const renderSocialMedia = socialMediaCollection.map((item, index) => (
    <SocialMediaItem
      key={item.scname + index}
      icon={item.icon}
      link={item.link}
      scname={item.scname}
    />
  ));

  return (
    <Container>
      <ContactTextContainer>
        <H2>{theme.lang.contact.h2}</H2>
        <H3>{theme.lang.contact.p1}</H3>
        <H4>{theme.lang.contact.p2}</H4>
        <SocialMediaContainer>{renderSocialMedia}</SocialMediaContainer>
      </ContactTextContainer>

      <img alt="" className="avatarImg" src="/assets/custom/avatar.webp" />
    </Container>
  );
};

export default Contact;
