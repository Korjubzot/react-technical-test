import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  const { asFragment } = render(<App />);

  test("renders App correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
