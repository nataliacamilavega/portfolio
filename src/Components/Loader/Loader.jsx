import styled, { keyframes } from 'styled-components'

// components
import DynamicSkills from './DynamicSkills'

// Style

// import "./Loader.css";

const Loader = ({ valueTop }) => {
  // const [valueTop, setValueTop] = useState(0);

  // Cambio de value Top del loader LoaderContainer. Se va sumando de
  // a 1 vh cada cierto tiempo generando el efecto que se desliza hacia arriba

  // STYLED COMPONENTS
  // Nubes moviiendose hacia la derecha
  const infiniteLoop = keyframes`
  to {
  background-position: 1500px;
  }
  `
  // Loader Container
  const LoaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.mode.loaderAnimated.bgColor};
    position:absolute;
    z-index: 5000;
    display: flex;
    justify-content: center;
    top: ${valueTop};
    left: 0;

    
    }
  `
  // Section
  const Section = styled.section`
    background: url(assets/custom/${(props) => props.theme.mode.loaderAnimated.vectorAnimated})
      repeat-x;
    width: 100%;
    height: 100%;

    background-size: 1500px 100vh;

    display: flex;

    justify-content: center;
    align-items: center;

    font-family: 'Convergence', sans-serif;
    animation: ${infiniteLoop} 10s linear infinite;

    @media (max-width: 500px) {
      flex-direction: column-reverse;
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
  `
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
  `
  // H1
  const H1 = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.mode.loaderAnimated.text1};
    font-size: 32px;
    span {
      color: ${(props) => props.theme.mode.loaderAnimated.text2};
      font-size: 24px;
    }
  `
  const PushDiv = styled.div`
    height: 500px;
    width: 333px;
  `

  return (
    <LoaderContainer>
      <Section>
        <img alt="" className="avatarImg" src="assets/custom/avatar.gif" />
        <TextContainer>
          <H1>
            Natalia Vega
            <span>portfolio</span>
          </H1>
          <DynamicSkills />
        </TextContainer>
        <PushDiv />
      </Section>
    </LoaderContainer>
  )
}

export default Loader
