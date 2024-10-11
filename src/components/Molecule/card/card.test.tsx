// components/Molecule/card/card.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./card";

describe("Card", () => {
  test("renders card with title and description", () => {
    const { getByText } = render(
      <Card title="Card Title" description="Card Description" />
    );
    expect(getByText("Card Title")).toBeInTheDocument();
    expect(getByText("Card Description")).toBeInTheDocument();
  });

  test("calls onClick handler when card is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Card
        title="Card Title"
        description="Card Description"
        onClick={handleClick}
      />
    );
    fireEvent.click(getByText("Card Title"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
