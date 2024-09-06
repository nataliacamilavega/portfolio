import styled from 'styled-components'
import { BsStars } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { ImBehance2 } from 'react-icons/im'
import { MdOutlineLink } from 'react-icons/md'
const ProjectItem = ({
  title,
  subtitle,
  date,
  filterTag,
  skillsTag,
  image,
  text,
  gitHub,
  behance,
  link,
  comment,
  id,
  skillsP,
}) => {
  const isPar = () => {
    let valid = false

    if (id % 2 === 0) {
      valid = true

      return valid
    }

    return valid
  }

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 0;
    gap: 16px;
    border-top: 1px solid ${(props) => props.theme.mode.colors.blue};
  `
  const Title = styled.h4`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme.mode.colors.blue};
  `
  const Subtitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 100%;
  `
  const Date = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
  `
  const FilterTags = styled.p`
    background-color: ${(props) => props.theme.mode.colors[props.color]};
    width: fit-content;
    height: fit-content;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    padding: 8px 16px;
    text-align: center;
    border-radius: 8px;
  `
  const TagsContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-flow: row wrap;
    color: #151515;
  `
  const SkillTag = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 8px;
    white-space: nowrap;
    width: fit-content;
    height: fit-content;
    color: #151515;
    background-color: ${(props) => props.theme.mode.colors.lightBlue};
  `
  const CardContainer = styled.div`
    display: flex;
    flex-direction: ${isPar() ? `row-reverse` : `row`};
    gap: 24px;
    width: 100%;
    justify-content: ${isPar() ? `space-between` : `start`};
    & img {
      border-radius: 4px;
      height: 300px;
      object-fit: cover;

      @media (max-width: 1080px) {
        height: auto;
        width: 100%;
        max-width: 700px;
        object-fit: cover;
        align-self: center;
      }
    }
    @media (max-width: 1080px) {
      flex-direction: column;
    }
  `
  const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 40%;
    @media (max-width: 1080px) {
      width: 100%;
    }
  `
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 16px;
  `
  const PList = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 16px;
  `
  const AContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `
  const Anchor = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    & a {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      color: ${(props) => props.theme.mode.colors.text};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `
  const CommentP = styled.p`
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    width: 100%;
  `
  const IconContainer = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    font-size_ 16px;
  `
  const renderFilterTags = filterTag.map((e, index) => (
    <FilterTags key={e.color + index} color={e.color}>
      {e.name}
    </FilterTags>
  ))
  const renderSkillTags = skillsTag.map((e, index) => <SkillTag key={e + index}>{e}</SkillTag>)

  const renderText = text.map((e, index) => (
    <PList key={e + index}>
      <BsStars style={{ color: `#ffc107` }} />
      {e}.
    </PList>
  ))

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Date>{date}</Date>
      <TagsContainer>{renderFilterTags}</TagsContainer>
      <TagsContainer>{renderSkillTags}</TagsContainer>
      <CardContainer>
        <img alt={`imagen de` + title} src={`assets/project-cover/` + image} />
        <ColumnContainer>
          <TextContainer>
            <p>{skillsP}:</p>
            {renderText}
          </TextContainer>
          <AContainer>
            {gitHub && (
              <Anchor>
                <IconContainer>
                  <BsGithub />
                </IconContainer>
                <a href={gitHub} rel="noreferrer" target="_blank">
                  {gitHub}
                </a>
              </Anchor>
            )}
            {behance && (
              <Anchor>
                <IconContainer>
                  <ImBehance2 />
                </IconContainer>
                <a href={behance} rel="noreferrer" target="_blank">
                  {behance}
                </a>
              </Anchor>
            )}
            {link && (
              <Anchor>
                <IconContainer>
                  <MdOutlineLink />
                </IconContainer>
                <a href={link} rel="noreferrer" target="_blank">
                  {link}
                </a>
              </Anchor>
            )}
          </AContainer>
          <CommentP>{comment}.</CommentP>
        </ColumnContainer>
      </CardContainer>
    </Container>
  )
}

export default ProjectItem
