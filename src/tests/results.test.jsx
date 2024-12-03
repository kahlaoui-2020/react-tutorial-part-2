import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect } from "vitest";
import Results, { formatJobList, formatQueryParams } from "../pages/Results";
import render from "../utils/test/render";

describe("The formatJobList function ", () => {
  it("should add a comma to a word", () => {
    const expectedState = "item2,";
    expect(formatJobList("item2", 3, 1)).toEqual(expectedState);
  });
  it("should not add a comma to the last element of the list", () => {
    const expectedState = "item3";
    expect(formatJobList("item3", 3, 2)).toEqual(expectedState);
  });
});
describe("The formatQueryParams function ", () => {
  it("should use the right format for param", () => {
    const answers = { 0: true };
    const expectedState = "a0=true";
    expect(formatQueryParams(answers)).toEqual(expectedState);
  });
  it("should concatenate param with &", () => {
    const expectedState = "a1=true&a2=true&a3=false";
    expect(
      formatQueryParams({
        1: true,
        2: true,
        3: false,
      })
    ).toEqual(expectedState);
  });
});
const resultsMockedData = [
  {
    title: "seo",
    description: "Le SEO est en charge du référencement web d'une page",
  },
  {
    title: "frontend",
    description:
      "Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.",
  },
];
export const handlers = [
  http.get("http://localhost:8000/results", () => {
    console.log('Captured a "GET http://localhost:8000/freelances" request');
    return HttpResponse.json({ resultsData: resultsMockedData });
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("The Results Component", () => {
  it("should display the results after the data is loaded", async () => {
    render(<Results />);
    expect(screen.findByTestId("loader")).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    const jobTitleElements = screen.getAllByTestId("job-title");
    expect(jobTitleElements[0].textContent).toBe("seo,");
    expect(jobTitleElements.length).toBe(2);
    const jobDescriptionElements = screen.getAllByTestId("job-description");
    expect(jobDescriptionElements[0].textContent).toBe(
      resultsMockedData[0].description
    );
    expect(jobTitleElements.length).toBe(2);
  });
});
