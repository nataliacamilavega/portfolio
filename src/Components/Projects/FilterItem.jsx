import styled from 'styled-components'

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  & + & {
    padding-left: 16px;
    border-left: #207fb4 1px solid;
    @media (max-width: 600px) {
      padding-left: 0;
      border-left: none;
      padding-top: 16px;
      border-top: #207fb4 1px solid;
    }
  }
`
const H4 = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16x;
`
const FilterPContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`
const FilterP = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  align-content: center;
  border: 2px solid ${(props) => props.theme.mode.colors[props.color]};
  border-radius: 8px;
  padding: 8px 16px;
  width: fit-content;
  min-width: 100px;
  cursor: pointer;
  transition: background 0.2s linear;

  &.selected {
    background: ${(props) => props.theme.mode.colors[props.color]};
    color: ${(props) => props.theme.mode.colors.textInverse};
  }
  @media (min-width: 700px) {
    &:hover {
      transition: background 0.2s linear;
      color: ${(props) => props.theme.mode.colors.textInverse};
      background: ${(props) => props.theme.mode.colors[props.color]};
    }
  }
`

const FilterItem = ({ filterType, filter, setterFilter, filterSelected }) => {
  const changeState = (e) => {
    if (e !== `all`) {
      return filterSelected === e ? `selected` : ``
    }

    return
  }
  const renderFilter = filter.map((e, index) => (
    <FilterP
      key={e.color + index}
      className={changeState(e.name)}
      color={e.color}
      onClick={() => (e.name === filterSelected ? setterFilter(`all`) : setterFilter(e.name))}
    >
      {e.name}
    </FilterP>
  ))

  return (
    <Container>
      <H4>{filterType}:</H4>
      <FilterPContainer>{renderFilter}</FilterPContainer>
    </Container>
  )
}

export default FilterItem
