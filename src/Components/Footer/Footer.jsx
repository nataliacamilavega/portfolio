import styled, { useTheme } from 'styled-components'
import {  BsGithub, BsLinkedin } from 'react-icons/bs'
import { ImBehance2, } from 'react-icons/im'
import { IoMail, IoLogoGitlab } from 'react-icons/io5'
const Footer = () => {
  // Para cambiar el idioma y usar el theme fuera de styled components
  const theme = useTheme()
  const Contenedor = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 144px;
    gap: 16px;
    padding: 32px 92px;
    background-color: ${(props) => props.theme.mode.colors.bgNavBar};
    box-sizing: border-box;
    border-radius: 16px 16px 0 0;
  `
  const P = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  `
  const RedesContain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-sixe: 16px;

    .iconSocialMedia {
      cursor: pointer;
      color: ${(props) => props.theme.mode.colors.text};
    }
  `
  const socialMediaCollection = [
    // Linkedin
    {
      scname: `Natalia Camila Vega`,
      icon: <BsLinkedin />,
      link: `https://www.linkedin.com/in/nataliacamilavega/`,
    },
    {
      scname: `nataliacamilavega`,
      icon: <IoLogoGitlab />,
      link: `https://gitlab.com/nataliacamilavega`,
    },
    {
      scname: `nataliacamilavega`,
      icon: <BsGithub />,
      link: `https://github.com/nataliacamilavega`
    },
    {
      scname: `nataliavega98`,
      icon: <ImBehance2 />,
      link: `https://www.behance.net/nataliavega98`,
    },
    {
      scname: `nataliacamilav@gmail.com`,
      icon: <IoMail />,
      link: `nataliacamilav@gmail.com`,
    },
  ]
  const renderSocialMedia = socialMediaCollection.map((item, index) => (
    <a
      key={item.link + index}
      className="iconSocialMedia"
      href={item.link}
      rel="noreferrer"
      target="_blank"
    >
      {item.icon}
    </a>
  ))

  return (
    <Contenedor>
      <RedesContain>{renderSocialMedia}</RedesContain>
      <P>{theme.lang.footer.p1}</P>
    </Contenedor>
  )
}

export default Footer
