import styled, { useTheme } from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { IoMail, IoLogoGitlab } from "react-icons/io5";

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

    & img {
      opacity: ${(props) => props.theme.mode.gifImg};
      align-self: center;
      width: 350px;
      object-fit: cover;
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
  const H2 = styled.h2`
    font-family: "Convergence";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;

    color: ${(propsTheme) => propsTheme.theme.mode.colors.pink};
  `;
  const H3 = styled.h3`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
  `;
  const H4 = styled.h4`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 14x;
    text-align: center;
  `;
  const SocialMediaContainer = styled.article`
    display: flex;
    flex-flow: row wrap;
    align-self: center;
    justify-content: justify-between;
    gap: 16px;
    max-width: 480px;
    @media (max-width: 960px) {
      width: 100%;
    }
  `;
  const socialMediaCollection = [
    {
      scname: `nataliacamilavega`,
      icon: <BsGithub />,
      link: `https://github.com/nataliacamilavega`,
    },
    {
      scname: `Natalia Camila Vega`,
      icon: <BsLinkedin />,
      link: `https://www.linkedin.com/in/natalia-camila-vega-74783b228/`,
    },
    {
      scname: `nataliacamilavega`,
      icon: <IoLogoGitlab />,
      link: `https://gitlab.com/nataliacamilavega`,
    },
    // Linkedin
    {
      scname: `nataliacamilav@gmail.com`,
      icon: <IoMail />,
      link: `nataliacamilav@gmail.com`,
    },

    {
      scname: `nataliavega98`,
      icon: <ImBehance2 />,
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

      <img alt="" className="avatarImg" src="assets/custom/avatar.gif" />
    </Container>
  );
};

export default Contact;
