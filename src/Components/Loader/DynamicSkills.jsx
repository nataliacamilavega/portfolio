import { useEffect, useState } from 'react'
import styled from 'styled-components'

const P = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.mode.loaderAnimated.text1};
  font-size: 16px;
`
const DynamicSkills = () => {
  // ANIMACION DE SKILLS

  // Array de mis Skills
  const skillsLoader = ['JavaScript', 'ReactJS', 'React Native', 'Figma']

  // Busco la ultima Skill cargada
  const lastSkill = skillsLoader[skillsLoader.length - 1]

  // Seteo que arranque por la ultima
  const [skillsText, setSkillLoader] = useState(lastSkill)

  // Si la ultima skill es igual a la skill que se renderizará
  const checkEqual = skillsText === lastSkill

  useEffect(() => {
    // Recorro el array y seteo
    for (let i = 0; i < skillsLoader.length; i++) {
      setTimeout(() => {
        // Seteo el texto del Loader
        setSkillLoader(skillsLoader[i])
      }, i * 1000)
    }
  }, [checkEqual]); // eslint-disable-line

  return <P>{skillsText}</P>
}

export default DynamicSkills
