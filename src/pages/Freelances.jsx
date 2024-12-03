import styled from "styled-components";
import Card from "../components/Card";
import { useFetch, useTheme } from "../utils/hooks";
import colors from "../utils/style/colors";
import { Loader } from "../utils/style/Loader";
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  overflow-y: auto;
`;
const PageTitle = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => (theme = "light" ? colors.dark : colors.light)};
  text-align: center;
  padding-bottom: 30px;
`;
const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;
const FreelancesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
`;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Freelances() {
  const { theme } = useTheme();
  const { isLoading, data, error } = useFetch(
    "http://localhost:8000/freelances"
  );
  const { freelancersList } = data;

  if (error) return <span>Oups Error</span>;
  return (
    <FreelancesContainer>
      <PageTitle theme={theme}>Trouver votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList ? (
            freelancersList.map(profile => (
              <Card
                key={profile.id}
                label={profile.job}
                picture={profile.picture}
                title={profile.name}
              />
            ))
          ) : (
            <span>
              Test failed:{isLoading} {JSON.stringify(typeof freelancersList)}
            </span>
          )}
        </CardsContainer>
      )}
    </FreelancesContainer>
  );
}
export default Freelances;
