import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, it } from "vitest";
import Card from "../components/Card";
import { ThemeProvider } from "../utils/context";
describe("The Card component", () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Card title="Julien Brun" label="UX Design" picture="/picture.png" />
      </ThemeProvider>
    );
  });
  it("should render image", () => {
    const cardPicture = screen.getByRole("img");
    const cardTitle = screen.getByText("Julien Brun");
    expect(cardPicture.src).toBe("http://localhost:3000/picture.png");
    expect(cardTitle.textContent).toBe("Julien Brun");
  });
  it("should add ⭐️", () => {
    const cardTitle = screen.getByText("Julien Brun");
    const parentNode = cardTitle.closest("div");
    fireEvent.click(parentNode);
    expect(cardTitle.textContent).toBe("⭐️Julien Brun⭐️");
  });
});
