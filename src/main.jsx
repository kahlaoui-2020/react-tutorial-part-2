import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { styled } from "styled-components";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./index.css";
import Freelances from "./pages/Freelances";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Survey from "./pages/Survey.jsx";
import { SurveyProvider, ThemeProvider } from "./utils/context/index.jsx";
import StyledGlobalStyle from "./utils/style/GlobalStyle.jsx";
import ProfileContainer from "./components/ProfileContainer.jsx";
const GlobalContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  flex: 1;
`;
createRoot(document.getElementById("root")).render(
  <Router>
    <ThemeProvider>
      <SurveyProvider>
        <StyledGlobalStyle />
        <GlobalContainer>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/survey/:questionNumber" element={<Survey />} />
              <Route path="/results" element={<Results />} />
              <Route path="/freelances" element={<Freelances />} />
              <Route path="/profile/:id" element={<ProfileContainer />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Container>
          <Footer />
        </GlobalContainer>
      </SurveyProvider>
    </ThemeProvider>
  </Router>
);
