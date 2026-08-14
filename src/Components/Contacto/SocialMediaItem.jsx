import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  gap: 8px;
  flex: 0 0 230px;
  align-items: center;
`;
const P = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.mode.colors.text};
  }
`;

const SocialMediaItem = ({ icon, scname, link }) => {
  const external = link.startsWith(`http`);

  return (
    <ItemContainer>
      <span aria-hidden="true">{icon}</span>
      <P>
        <a
          href={link}
          rel={external ? `noreferrer` : undefined}
          target={external ? `_blank` : undefined}
        >
          {scname}
        </a>
      </P>
    </ItemContainer>
  );
};

export default SocialMediaItem;
