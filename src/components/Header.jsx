import { Link } from 'react-router-dom';
import { StyledLink } from '../utils/style/StyledLink';
import styled from 'styled-components';
import DarkLogo from '../assets/dark-logo.png';
const NavContainer = styled.div`
  padding: 30px;    
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HomeLogo = styled.img`
    height: 70px
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={DarkLogo} />
      </Link>
      <div>
        <StyledLink to="/">Acceuil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  );
}
export default Header;
