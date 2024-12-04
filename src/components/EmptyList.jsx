import styled from "styled-components";
import { useTheme } from "../utils/hooks";
import colors from "../utils/style/colors";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === "light" ? colors.backgroundDark : colors.backgroundLight};
`;
const Title = styled.h1`
  background-color: ${({ theme }) =>
    theme === "light" ? colors.dark : colors.light};
`;
const Illustration = styled.img`
  margin: 30px 0;
`;
const SubTitle = styled.h3`
  background-color: ${({ theme }) =>
    theme === "light" ? colors.dark : colors.light};
  font-weight: normal;
`;
function EmptyList() {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <Title theme={theme}>Dommage...</Title>
      <Illustration />
      <SubTitle theme={theme}>
        Il semblerait que vous n'ayez besoin d'aucune compétence
      </SubTitle>
    </Container>
  );
}
export default EmptyList;
