import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";
import { ThemeProvider } from "../utils/context";
describe("The Home component", () => {
  it("should render title", () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 2,
        text: "Repérer vos besoins, on s'occupe du reste, avec les meilleurs talent",
      })
    ).toBeTruthy();
  });
});
