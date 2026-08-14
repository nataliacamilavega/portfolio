import styled, { useTheme } from "styled-components";
import {
  BehanceLogo,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  const theme = useTheme();
  const Contenedor = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 144px;
    gap: 8px;
    padding: 32px 92px;
    background-color: ${(props) => props.theme.mode.colors.bgNavBar};
    box-sizing: border-box;
    border-radius: 16px 16px 0 0;
  `;
  const P = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
  `;
  const RedesContain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 16px;
    margin-bottom: 8px;

    .iconSocialMedia {
      cursor: pointer;
      color: ${(props) => props.theme.mode.colors.text};
    }
  `;
  const socialMediaCollection = [
    {
      scname: `Natalia Camila Vega`,
      icon: <LinkedinLogo />,
      link: `https://www.linkedin.com/in/nataliacamilavega/`,
    },
    {
      scname: `nataliacamilavega`,
      icon: <GithubLogo />,
      link: `https://github.com/nataliacamilavega`,
    },
    {
      scname: `nataliavega98`,
      icon: <BehanceLogo />,
      link: `https://www.behance.net/nataliavega98`,
    },
    {
      scname: `nataliacamilav@gmail.com`,
      icon: <EnvelopeSimple />,
      link: `mailto:nataliacamilav@gmail.com`,
    },
  ];
  const renderSocialMedia = socialMediaCollection.map((item, index) => {
    const external = item.link.startsWith(`http`);

    return (
      <a
        key={item.link + index}
        aria-label={item.scname}
        className="iconSocialMedia"
        href={item.link}
        rel={external ? `noreferrer` : undefined}
        target={external ? `_blank` : undefined}
      >
        <span aria-hidden="true">{item.icon}</span>
      </a>
    );
  });

  return (
    <Contenedor>
      <RedesContain>{renderSocialMedia}</RedesContain>
      <P>{theme.lang.footer.p1}</P>
      <P>{theme.lang.footer.p2}</P>
    </Contenedor>
  );
};

export default Footer;
