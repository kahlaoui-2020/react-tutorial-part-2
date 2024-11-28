import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Survey from './pages/Survey.jsx';
import Header from './components/Header';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import createGlobalStyle, { styled } from 'styled-components';
import Home from './pages/Home';
import Error from './components/Error';
const GlobalStyle = createGlobalStyle`
  div {
    font-family: 'Trebuchet MS', Helvetica, sans-serif'
  }
`;
const GlobalContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  flex: 1;
`;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <GlobalContainer>
        <GlobalStyle />
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </GlobalContainer>
    </Router>
  </StrictMode>
);
