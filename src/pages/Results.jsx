import { useContext } from "react";
import styled from "styled-components";
import { SurveyContext } from "../utils/context";
import { useFetch, useTheme } from "../utils/hooks";
import colors from "../utils/style/colors";
import { Loader } from "../utils/style/Loader";
import { StyledLink } from "../utils/style/StyledLink";
const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    (theme = "light" ? colors.backgroundLight : colors.backgroundDark)};
`;
const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme = "light" ? colors.dark : colors.light)};
  font-weight: 700;
  font-size: 31px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`;
const DescriptionWrapper = styled.div`
  padding: 60px;
`;
const JobTitle = styled.span`
  color: ${({ theme }) =>
    (theme = "light" ? colors.primary : colors.backgroundLight)};
  text-transform: capitalize;
`;
const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) =>
      (theme = "light" ? colors.secondary : colors.light)};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export function formatQueryParams(answers) {
  const answersNumbers = Object.keys(answers);
  return answersNumbers?.length
    ? answersNumbers.reduce((acc, answerNumber, index) => {
        const isFirstParam = index === 0;
        const separator = isFirstParam ? "" : "&";
        return `${acc}${separator}a${answerNumber}=${answers[answerNumber]}`;
      }, "")
    : "";
}
export function formatJobList(title, listLength, index) {
  if (index === listLength - 1) return title;
  return `${title},`;
}
function Results() {
  const { theme } = useTheme();
  const { answers } = useContext(SurveyContext);
  const fetchParams = formatQueryParams(answers);
  console.log(fetchParams);

  const { isLoading, data, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  );
  const { resultsData } = data;
  console.log(resultsData);
  return isLoading ? (
    <LoaderWrapper>
      <Loader data-testid="loader" />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin:
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
              data-testid="job-title"
            >
              {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              key={`result-description-${index}-${result.title}`}
              theme={theme}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p data-testid="job-description">{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  );
}
export default Results;
