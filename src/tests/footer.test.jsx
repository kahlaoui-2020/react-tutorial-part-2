import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach } from "vitest";
import Footer from "../components/Footer";
import { ThemeProvider } from "../utils/context";
describe("Footer", () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
  });
  it("Should render without crash", async () => {});
  it("Should change theme", async () => {
    const nightModeButton = screen.getByRole("button");
    expect(nightModeButton.textContent).toBe("Changer de mode: ☀️");
    fireEvent.click(nightModeButton);
    expect(nightModeButton.textContent).toBe("Changer de mode: 🌙");
  });
});
