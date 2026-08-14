import { useState } from "react";
import styled, { useTheme } from "styled-components";

import FilterItem from "./FilterItem";
import ProjectItem from "./ProjectItem";

const Container = styled.section`
  width: 100%;
  padding-top: 92px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 960px) {
    padding-top: 56px;
  }
`;
const FilterContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FilterItemContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const H2 = styled.h1`
  font-family: "Convergence";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${(propsTheme) => propsTheme.theme.mode.colors[propsTheme.$titleColor]};
`;
const H3 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;
const ProjectsContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const getProjectFilters = (theme, { withContext } = {}) => {
  const filters = [];

  if (withContext) {
    filters.push({
      filterType: theme.lang.projects.according3,
      filter: [
        { name: theme.lang.projects.faculty, color: `lightYellow`, id: 1 },
        { name: theme.lang.projects.courses, color: `lightPurple`, id: 2 },
        { name: theme.lang.projects.personal, color: `lightBlue`, id: 3 },
      ],
    });
  }

  filters.push(
    {
      filterType: theme.lang.projects.according1,
      filter: [
        { name: theme.lang.projects.ac1it1, color: `lightPink`, id: 1 },
        { name: theme.lang.projects.ac1it2, color: `lightPurple`, id: 2 },
        { name: theme.lang.projects.ac1it3, color: `lightYellow`, id: 3 },
      ],
    },
    {
      filterType: theme.lang.projects.according2,
      filter: [
        { name: `JS Vanilla`, color: `lightBlue`, id: 1 },
        { name: `TypeScript`, color: `lightBlue`, id: 4 },
        { name: `React JS`, color: `lightBlue`, id: 2 },
        { name: `NextJS`, color: `lightBlue`, id: 3 },
        { name: `Vite`, color: `lightBlue`, id: 8 },
        { name: `Node.js`, color: `lightBlue`, id: 6 },
        { name: `Express.js`, color: `lightBlue`, id: 7 },
      ],
    },
  );

  return filters;
};

const ProjectList = ({
  title,
  titleColor = `blue`,
  collection,
  withContext,
}) => {
  const theme = useTheme();
  const filters = getProjectFilters(theme, { withContext });
  const [filterSelected, setFilterSelected] = useState(`all`);

  const renderFilters = filters.map((item, index) => (
    <FilterItem
      key={item.filterType + index}
      filter={item.filter}
      filterSelected={filterSelected}
      filterType={item.filterType}
      setterFilter={setFilterSelected}
    />
  ));

  const matchesFilter = (project) => {
    if (filterSelected === `all`) return true;

    return (
      project.context === filterSelected ||
      project.filterTag.some((e) => e.name === filterSelected) ||
      project.skillsTag.some((e) => e === filterSelected)
    );
  };

  function renderProjects(colection) {
    return colection.map((item, index) => (
      <ProjectItem
        key={item.title + index}
        behance={item.behance}
        comment={item.comment}
        date={item.date}
        filterTag={item.filterTag}
        gitHub={item.gitHub}
        id={item.id}
        image={item.image}
        link={item.link}
        skillsTag={item.skillsTag}
        subtitle={item.subtitle}
        text={item.text}
        title={item.title}
        priority={index === 0}
      />
    ));
  }

  const visible = (collection || []).filter(matchesFilter);

  return (
    <Container>
      <H2 $titleColor={titleColor}>{title}</H2>
      <FilterContainer>
        <H3>{theme.lang.projects.h3}:</H3>
        <FilterItemContainer>{renderFilters}</FilterItemContainer>
      </FilterContainer>
      <ProjectsContainer>
        {visible.length > 0 ? (
          renderProjects(visible)
        ) : (
          <p>{theme.lang.projects.empty}</p>
        )}
      </ProjectsContainer>
    </Container>
  );
};

export default ProjectList;
