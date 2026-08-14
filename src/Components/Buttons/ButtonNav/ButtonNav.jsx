import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
  border-radius: 100px;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  flex-grow: 1;
  min-width: fit-content;
  align-self: stretch;
  text-decoration: none;
  color: ${(props) => props.theme.mode.colors.text};
  background-color: ${(props) => props.theme.mode.colors.bgNavBar};

  .navIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
  }

  .navIcon svg {
    display: block;
    width: 1em;
    height: 1em;
  }

  &:hover {
    background-color: ${(propsTheme) => propsTheme.theme.mode.colors.lightGrey};
  }

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.mode.colors.text};
  }

  &.selected {
    color: ${(props) => props.theme.mode.colors[`darker` + props.$bgColor]};
    background-color: ${(props) =>
      props.theme.mode.colors[`light` + props.$bgColor]};
  }
`;

const ButtonNav = ({ text, bgColor, icon, link, setterMenu, stateMenu }) => {
  const location = useLocation();
  const selected = location.pathname === link;

  return (
    <NavLink
      $bgColor={bgColor}
      aria-current={selected ? `page` : undefined}
      className={selected ? `selected` : ``}
      onClick={() => {
        if (window.innerWidth < 960) {
          setterMenu(!stateMenu);
        }
      }}
      to={link}
    >
      <span aria-hidden="true" className="navIcon">
        {icon}
      </span>
      <span>{text}</span>
    </NavLink>
  );
};

export default ButtonNav;
