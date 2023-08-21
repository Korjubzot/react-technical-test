import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

describe("Search", () => {
  const { asFragment } = render(<App />);

  test("renders Search correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
