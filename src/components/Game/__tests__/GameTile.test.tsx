import React from "react";
import { render, screen } from "@testing-library/react";

import { GameTile } from "../GameTile";

describe("GameTile", () => {
  it("Should show the content when not hidden", () => {
    render(<GameTile>H</GameTile>);
    const child = screen.getByText("H");
    expect(child).toBeInTheDocument();
  });

  it("Should not show the content when hidden", () => {
    render(<GameTile hidden>H</GameTile>);
    const child = screen.getByText("🤷🏽‍♂️");
    expect(child).toBeInTheDocument();
  });
});
