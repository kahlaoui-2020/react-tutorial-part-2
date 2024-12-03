import { render as rtlRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SurveyProvider, ThemeProvider } from "../context";
export default function render(ui, options) {
  function Wrapper({ children }) {
    return (
      <MemoryRouter {...options}>
        <ThemeProvider>
          <SurveyProvider>{children}</SurveyProvider>
        </ThemeProvider>
      </MemoryRouter>
    );
  }
  rtlRender(ui, { wrapper: Wrapper });
}
