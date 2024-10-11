// components/Atom/checkbox/checkbox.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Checkbox from "./checkbox";

describe("Checkbox", () => {
  const options = [
    { value: "reading", label: "Reading" },
    { value: "traveling", label: "Traveling" },
    { value: "cooking", label: "Cooking" },
  ];

  test("renders checkbox options", () => {
    const { getByLabelText } = render(
      <Checkbox
        name="hobbies"
        data={options}
        onChange={() => {}}
        text="Select Hobbies"
      />
    );
    expect(getByLabelText("Reading")).toBeInTheDocument();
    expect(getByLabelText("Traveling")).toBeInTheDocument();
    expect(getByLabelText("Cooking")).toBeInTheDocument();
  });

  test("calls onChange handler when checkbox is toggled", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox
        name="hobbies"
        data={options}
        onChange={handleChange}
        text="Select Hobbies"
      />
    );
    const checkbox = getByLabelText("Reading") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox.checked).toBe(true);
  });
});
