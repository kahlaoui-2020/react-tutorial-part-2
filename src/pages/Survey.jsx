import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { SurveyContext } from "../utils/context";
import { useFetch } from "../utils/hooks";
import { Loader } from "../utils/style/Loader";
import colors from "../utils/style/colors";
const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;
const QuestionContent = styled.span`
  margin: 30px;
`;
const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;
const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ReplyButton = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${({ isSelected }) =>
    isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : "none"};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;
function Survey() {
  let { questionNumber } = useParams();
  questionNumber = parseInt(questionNumber);
  const prevQuestionNumber = questionNumber === 1 ? 1 : questionNumber - 1;
  const nextQuestionNumber = questionNumber + 1;
  const { isLoading, data, error } = useFetch("http://localhost:8000/survey");
  const { surveyData } = data;
  const { saveAnswers, answers } = useContext(SurveyContext);
  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer });
  }

  if (error) return <span>Oups Error</span>;
  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <QuestionContent>
          {surveyData && surveyData[questionNumber]}
        </QuestionContent>
      )}
      {answers && (
        <ReplyWrapper>
          <ReplyButton
            onClick={() => saveReply(true)}
            isSelected={answers[questionNumber] === true}
          >
            Oui
          </ReplyButton>
          <ReplyButton
            onClick={() => saveReply(false)}
            isSelected={answers[questionNumber] === false}
          >
            Non
          </ReplyButton>
        </ReplyWrapper>
      )}
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData && surveyData[questionNumber + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultat</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  );
}
export default Survey;
