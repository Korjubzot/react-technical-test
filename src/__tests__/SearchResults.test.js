import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
  const { asFragment } = render(<SearchResults />);

  test("renders Search correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
