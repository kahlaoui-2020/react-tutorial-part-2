import { Component } from "react";
import { ThemeContext } from "../utils/context/index";
import styled from "styled-components";
const ProfileWrapper = styled.div``;
const Picture = styled.img``;
const ProfileDetail = styled.div``;
const TitleWrapper = styled.div``;
const Title = styled.h1``;
const Location = styled.span``;
const JobTitle = styled.h2``;
const SkillsWrapper = styled.div``;
const Skill = styled.span``;
const Availability = styled.span``;
const Price = styled.span``;
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
    };
  }
  async componentDidMount() {
    const { id } = this.props;
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/freelance?id=${id}`);
      const jsonResponse = await response.json();
      if (jsonResponse?.profileData) {
        this.setState({ profileData: jsonResponse.profileData });
      }
    };
    fetchData();
  }
  render() {
    const { profileData } = this.state;
    const { id, name, job, location, tjm, skills, available, picture } =
      profileData;
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div theme={theme} className="ProfileWrapper">
            <img src={picture} className="Picture" />
            <div theme={theme} className="ProfileDetail">
              <div className="TitleWrapper">
                <h1 className="Title"></h1>
                <span className="Location"></span>
              </div>
              <h2 className="JobTitle"></h2>
              <div className="SkillsWrapper">
                {skills &&
                  skills.map((skill) => (
                    <span
                      key={`skill-${id}-${skill}`}
                      className="Skill"
                      theme={theme}
                    >
                      {skill}
                    </span>
                  ))}
              </div>
              <span className="Availability"></span>
              <span className="Price"></span>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Profile;
