import styled from 'styled-components';
import colors from '../utils/style/colors';
import Error404 from '../assets/404.svg';
const ErrorWrapper = styled.div`
  height: calc(100% - 60px);
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
`;
const ErrorTitle = styled.h1`
font-weight: 300;
`;
const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`;
const Illustration = styled.img`
  max-width: 800px;
`;

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n'existe pas
      </ErrorSubtitle>
      <Illustration src={Error404} />
    </ErrorWrapper>
  );
}
export default Error;
