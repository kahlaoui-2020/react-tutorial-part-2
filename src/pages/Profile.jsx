import { useFetch, useTheme } from "../utils/hooks/index";
import styled from "styled-components";
import colors from "../utils/style/colors";
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  margin: 0 90px;
  background-color: ${({ theme }) =>
    theme === "light" ? colors.backgroundLight : colors.backgroundDark};
`;
const Picture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`;
const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  color: ${({ theme }) => (theme === "light" ? colors.dark : colors.light)};
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  font-weight: 500;
`;
const Location = styled.span`
  margin-left: 15px;
  color: ${colors.secondary};
`;
const JobTitle = styled.h2`
  padding-top: 10px;
  font-size: 20px;
  margin: 0;
  font-weight: 500;
`;
const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;
const Skill = styled.span`
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid
    ${({ theme }) => (theme === "light" ? colors.dark : colors.light)};
`;
const Availability = styled.span`
  :before {
    position: absolute;
    left: 0;
    top: 4px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: ${({ available }) => (available ? "green" : "red")};
    content: "";
  }
  padding-left: 20px;
  position: relative;
`;
const Price = styled.span`
  padding-top: 10px;
  font-weight: 500;
  font-size: 20px;
`;

function Profile() {
  const { id } = useParams();
  const { theme } = useTheme();
  const { isLoading, data, error } = useFetch(
    `http://localhost:8000/freelance?id=${id}`
  );
  const { name, job, location, tjm, skills, available, picture } = data;
  if (error) return <span>Oups Error</span>;
  return (
    <ProfileWrapper theme={theme}>
      <Picture src={picture} />
      <ProfileDetail theme={theme}>
        <TitleWrapper>
          <Title>{name}</Title>
          <Location>{location}</Location>
        </TitleWrapper>
        <JobTitle>{job}</JobTitle>
        <SkillsWrapper>
          {skills &&
            skills.map((skill) => (
              <Skill key={`skill-${id}-${skill}`} theme={theme}>
                {skill}
              </Skill>
            ))}
        </SkillsWrapper>
        <Availability available={available}>
          {available ? "Disponible" : "Indisponible"}
        </Availability>
        <Price>{tjm}€/jour</Price>
      </ProfileDetail>
    </ProfileWrapper>
  );
}
export default Profile;
