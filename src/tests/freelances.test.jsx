import "@testing-library/jest-dom";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";
import Freelances from "../pages/Freelances";
import render from "../utils/test/render";
const freelancersMockedData = [
  { name: "Julien Brun", job: "Développeur mobile", picture: "/picture1.png" },
  {
    name: "Arielle Gautier",
    job: "Développeuse fullstack",
    picture: "/picture2.png",
  },
];
export const handlers = [
  http.get("http://localhost:8000/freelances", () => {
    console.log('Captured a "GET http://localhost:8000/freelances" request');
    return HttpResponse.json({ freelancersList: freelancersMockedData });
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
it("should display freelancers names after loader is removed", async () => {
  render(<Freelances />);
  expect(screen.findByTestId("loader")).toBeTruthy();
  await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
  expect(await screen.findByText(/Julien Brun/i)).toBeInTheDocument();
  expect(await screen.getByText(/Arielle Gautier/i)).toBeInTheDocument();
  expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
});
