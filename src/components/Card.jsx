import PropTypes from 'prop-types';
import DefaultPicture from '../assets/profile.png';
import styled from 'styled-components';
import colors from '../utils/style/colors';
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }`;
const CardLabel = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`;
const CardTitle = styled.span`
  color: #5843e4;
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
function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
}
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
Card.defaultProps = {
  title: '',
  lable: '',
  picture: DefaultPicture,
};
export default Card;
