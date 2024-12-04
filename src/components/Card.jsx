import PropTypes from "prop-types";
import { useState, Component } from "react";
import styled from "styled-components";
import DefaultPicture from "../assets/profile.png";
import { useTheme } from "../utils/hooks";
import colors from "../utils/style/colors";
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === "light" ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;
const CardLabel = styled.span`
  color: ${({ theme }) => (theme === "light" ? colors.primary : colors.light)};
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`;
const CardTitle = styled.span`
  color: ${({ theme }) => (theme === "light" ? colors.dark : colors.light)};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`;
const CardImage = styled.img`
  height: 80px;
  width: 80px;
  align-self: center;
  border-radius: 50%;
`;
function Card({ label = "", title = "", picture = DefaultPicture }) {
  const { theme } = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const star = isFavorite ? "⭐️" : "";

  return (
    <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
      <CardLabel theme={theme}>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <CardTitle theme={theme}>
        {star}
        {title}
        {star}
      </CardTitle>
    </CardWrapper>
  );
}
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Card;
