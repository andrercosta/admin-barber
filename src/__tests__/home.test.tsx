import React from 'react';
import { render, screen } from "@testing-library/react";
import Home from '@/app/page';


describe("Home", () => {
  it("renders the home page", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("div")).toBeDefined();
  });
});
