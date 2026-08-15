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
    width: min(var(--page-max), calc(100% - 2 * var(--page-pad)));
    margin: 0 auto;
    min-height: 144px;
    gap: 8px;
    padding: 32px 24px;
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
    gap: 16px;
    margin-bottom: 8px;

    .iconSocialMedia {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 100px;
      color: ${(props) => props.theme.mode.colors.text};
      transition:
        color 0.2s ease,
        background-color 0.2s ease,
        transform 0.2s ease;
    }

    .iconSocialMedia svg {
      display: block;
      width: 24px;
      height: 24px;
    }

    .iconSocialMedia:hover,
    .iconSocialMedia:focus-visible {
      color: ${(props) => props.theme.mode.colors.pink};
      background-color: ${(props) => props.theme.mode.colors.lightPink};
      transform: translateY(-2px);
    }

    @media (prefers-reduced-motion: reduce) {
      .iconSocialMedia {
        transition: color 0.2s ease, background-color 0.2s ease;
      }

      .iconSocialMedia:hover,
      .iconSocialMedia:focus-visible {
        transform: none;
      }
    }
  `;
  const socialMediaCollection = [
    {
      scname: `Natalia Camila Vega`,
      icon: <LinkedinLogo size={24} />,
      link: `https://www.linkedin.com/in/nataliacamilavega/`,
    },
    {
      scname: `nataliacamilavega`,
      icon: <GithubLogo size={24} />,
      link: `https://github.com/nataliacamilavega`,
    },
    {
      scname: `nataliavega98`,
      icon: <BehanceLogo size={24} />,
      link: `https://www.behance.net/nataliavega98`,
    },
    {
      scname: `nataliacamilav@gmail.com`,
      icon: <EnvelopeSimple size={24} />,
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
