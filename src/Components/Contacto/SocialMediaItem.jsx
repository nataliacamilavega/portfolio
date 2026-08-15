import styled from "styled-components";

const ItemLink = styled.a`
  display: flex;
  gap: 10px;
  flex: 0 0 230px;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.mode.colors.text};
  border-radius: 8px;
  padding: 4px 0;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    display: block;
    width: 22px;
    height: 22px;
    transition: transform 0.2s ease;
  }

  &:hover,
  &:focus-visible {
    color: ${(props) => props.theme.mode.colors.pink};
  }

  &:hover svg,
  &:focus-visible svg {
    transform: scale(1.12);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color 0.2s ease;

    &:hover svg,
    &:focus-visible svg {
      transform: none;
    }
  }
`;

const IconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  line-height: 0;
`;

const Label = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
`;

const SocialMediaItem = ({ icon, scname, link }) => {
  const external = link.startsWith(`http`);

  return (
    <ItemLink
      href={link}
      rel={external ? `noreferrer` : undefined}
      target={external ? `_blank` : undefined}
    >
      <IconWrap aria-hidden="true">{icon}</IconWrap>
      <Label>{scname}</Label>
    </ItemLink>
  );
};

export default SocialMediaItem;
